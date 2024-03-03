"use client"
import {useRouter} from "next/navigation";
import {FormEvent, useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import {fetchVerificationToken} from "@/lib/fetch-user";
import {FormSuccess} from "@/components/form-success";
import {FormError} from "@/components/form-error";


interface VerificationFormProps {
    token:string
}
export const VerificationForm = ({token}:VerificationFormProps) => {
    const [verificationToken, setVerificationToken] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [isVerify, setIsVerify] = useState(false)
    const router = useRouter();
    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsVerify(true)
        const formData = new FormData()
        formData.append("token", verificationToken);
        const response = await fetchVerificationToken(formData)
        if(response.message === "success"){
            setIsVerify(false)
            setVerificationToken("")
            setMessage("Email confirm!!")
            setTimeout(() => {
                router.push("/signin")
            },2000)

        } else {
            if(response.error) {
                setError(response.error)
            }
        }
        setIsVerify(false);
    }

    useEffect(() => {
        if(token && token.length > 0){
            setVerificationToken(token);
        }
    }, [token]);
    return <div>
        <form onSubmit={handleSubmit} className="shadow-2xl w-[40rem] h-[10rem] p-4 flex flex-col items-center gap-y-2">
            <h2 className="text-2xl font-bold mb-2">Welcome to the community!!</h2>
            <p>Please click confirm to complete the process</p>
            <Button disabled={isVerify} className="disabled:cursor-wait" size="sm">Confirm</Button>
            <FormSuccess message={message}  />
            <FormError error={error} />
        </form>
    </div>
}

