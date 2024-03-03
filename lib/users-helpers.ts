import {db} from "@/db/prisma-client"

export const getUserByEmail = async (email:string) => {
    try{
        return await db.users.findUnique({
            where:{
                email
            }
        })
    }
    catch (err:unknown){
        console.log(err)
    }
}