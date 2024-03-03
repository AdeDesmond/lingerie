import {v4 as uuid } from "uuid";
import {db} from "@/db/prisma-client"
import {Users}  from "@prisma/client"
import {getVerificationByEmail} from "@/db/verification-token";

export const generateVerificationToken = async (user:Users) => {
    try{
       const token = uuid();
        const expires = new Date(new Date().getTime() + 3600 * 60);
       const existingToken = await getVerificationByEmail(user.email);
       if(existingToken){
           await db.verificationToken.delete({
               where:{
                   id:existingToken.id
               }
           })
       }

       return await db.verificationToken.create({
           data:{
               email:user.email,
               token,
               expires
           }
       })
    }
    catch (err:unknown){
        console.log(err)
    }
}

