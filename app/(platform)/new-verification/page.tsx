import {VerificationForm} from "@/app/(platform)/new-verification/_components/verification-form";

interface NewVerificationProps {
    searchParams:{
        token:string
    }

}

export default function NewVerification({searchParams}:NewVerificationProps){
    return <div className="w-full min-h-screen flex items-center justify-center ">
        <VerificationForm token={searchParams.token} />
    </div>
}