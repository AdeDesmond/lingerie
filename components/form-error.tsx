

interface FormErrorProps{
    error:string
}

export const FormError = ({error}:FormErrorProps) => {
    return <div>
        <p>{error}</p>
    </div>
}