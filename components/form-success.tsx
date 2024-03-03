

interface FormSuccessProps {
    message:string
}

export const FormSuccess = ({message}:FormSuccessProps) => {
    return <div>
        <p>{message}</p>
    </div>
}