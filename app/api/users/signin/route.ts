import {NextResponse, NextRequest} from "next/server";
import jwt from "jsonwebtoken"
import {db} from "@/db/prisma-client"
import bcrypt from "bcryptjs";
import { CreateSignInUserSchema} from "@/lib/zod-schema";
import {getUserByEmail} from "@/lib/users-helpers";
import {generateVerificationToken} from "@/lib/token";
import {sendEmail} from "@/lib/send-email";

export async function POST(req:NextRequest){
    try{
        const body = await req.formData();
        const validatedFields = CreateSignInUserSchema.safeParse({
            email:body.get("email"),
            password:body.get("password")
        })
        if(!validatedFields.success){
            return NextResponse.json({error:validatedFields.error.flatten().fieldErrors}, {status:400})
        }
        const {email, password} = validatedFields.data;
        const existingUser = await getUserByEmail(email)
        if(!existingUser){
            return NextResponse.json({error:"User doesn't exist"}, {status:404})
        }
        if(!existingUser.isVerify){
            const verificationToken = await generateVerificationToken(existingUser)
            await sendEmail("Verify your email", `Confirm your email <a href="${process.env.DOMAIN}/new-verification?token=${verificationToken?.token}">click here</a>`)

            return NextResponse.json({message:"Email confirmation sent!!"}, {status:200})
        }

        if(!password || !bcrypt.compareSync(password, existingUser.password)){
            return NextResponse.json({error:"password or email does not match"}, {status:404})
        }

        const tokenData = {
            id:existingUser.id,
            email:existingUser.email
        }

        const token = jwt.sign(tokenData, process.env.JWT_SECRET!, {
            expiresIn:"1d"
        })

        let response = NextResponse.next();

        if(token){
            response.cookies.set("token", token);
        }

        //TODO generate a token and save on the user's browser as a cookie, we will use the cookie to track the session

        return NextResponse.json({message:"success", token:token}, {status:200});
    }
    catch (err:unknown){
        if(err instanceof  Error){
            return NextResponse.json({ error:err.message     }, {status:500})

        }else {
            return NextResponse.json({ error:"Something went wrong"    }, {status:500})
        }
    }
}