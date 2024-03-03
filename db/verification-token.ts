import {db} from "@/db/prisma-client"

export const getVerificationByEmail = async (email:string) => {
    try{
       return await  db.verificationToken.findFirst({
           where:{
               email
           }
       })
    }
    catch (err:unknown){
        console.log(err)
    }
}


export const getVerificationByToken = async (token:string) => {
    try{
        return await db.verificationToken.findFirst({
            where:{
                token
            }
        })
    }
    catch (err:unknown){
        console.log(err)
    }
}

