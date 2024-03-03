import {NextResponse, NextRequest} from "next/server";
import {db} from "@/db/prisma-client"
import {getVerificationByToken} from "@/db/verification-token";
import {getUserByEmail} from "@/lib/users-helpers";
export async function POST(req:NextRequest){
    try{
        const body = await req.formData();
        const token = body.get("token") as string;
        console.log(token)
        const existingToken = await getVerificationByToken(token)
        if(!existingToken){
            return NextResponse.json({error:"Token already exist"}, {status:400})
        }
        const hasExpired = new Date(existingToken.expires) < new Date();
        if(hasExpired){
            return NextResponse.json({error:"Token has expired"}, {status:400})
        }
        const existingUser = await getUserByEmail(existingToken.email);
        if(!existingUser){
            return NextResponse.json({error:"User doesn't exist"})
        }
        await db.users.update({
            where:{
                id:existingUser.id
            },
            data:{
                isVerify:true
            }

        })
        await db.verificationToken.delete({
            where:{
                id:existingToken.id
            }
        })
        return NextResponse.json({message:"success"}, {status:200})
    }
    catch (err:unknown){
        if(err instanceof Error){
            return NextResponse.json({error:err.message}, {status:500})
        }else {
            return NextResponse.json({error:"something went wrong"}, {status:500})
        }
    }
}