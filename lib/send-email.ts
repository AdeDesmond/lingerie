import {Resend} from "resend";
import {EmailTemplate} from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (subject:string, body:string) => {
    try{
        const {data, error} = await resend.emails.send({
            from:'Acme <onboarding@resend.dev>',
            to:["desmondade09@gmail.com"],
            subject:subject,
            html:`<p>${body}</p>`
        })

        if(error){
            console.log(error)
        }
    }
    catch (err:unknown){
        console.log(err)
    }
}