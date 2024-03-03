import {NextResponse, NextRequest} from "next/server";
import {CreateSignUpUserSchema} from "@/lib/zod-schema";
import {getUserByEmail} from "@/lib/users-helpers";
import {db} from "@/db/prisma-client"
import {generateVerificationToken} from "@/lib/token";
import bcrypt from "bcryptjs";
import {sendEmail} from "@/lib/send-email";

export async function POST(req:NextRequest){
    try{

        const body = await req.formData();
        const validatedFields = CreateSignUpUserSchema.safeParse({
            name:body.get("name"),
            email:body.get("email"),
            password:body.get("password"),
            passwordConfirm:body.get("passwordConfirm")
        })

        if(!validatedFields.success){
            return NextResponse.json({errors: validatedFields.error.flatten().fieldErrors   }, {status:400})
        }

        const { name,email, password } = validatedFields.data;
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);
        const existingUser = await getUserByEmail(email);

        if(existingUser){
            return NextResponse.json({error:"user already exist with that email"}, {status:400})
        }

        const newUser = await  db.users.create({
            data:{
                name,
                email, password:hashPassword
            }
        })

        const token = await generateVerificationToken(newUser);
        await sendEmail("Verify your email", `Confirm your email <a href="${process.env.DOMAIN}/new-verification?token=${token?.token}">click here</a>`)




        return NextResponse.json({message:"success"}, {  status:200  })
    }
    catch (err:unknown){
        if(err instanceof  Error){
            return NextResponse.json({err:err.message}, {status:500})
        } else {
            return NextResponse.json({err:"something went wrong"}, {status:500})
        }
    }
}