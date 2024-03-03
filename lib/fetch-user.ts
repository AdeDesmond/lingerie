export const fetchSignUpUser = async (formData:FormData) => {
    try{
        const response = await  fetch("/api/users/signup", {
            method:"POST",
            body:formData
        })

        return await response.json();
    }
    catch (err:unknown){
        console.log(err)
    }
}


export const fetchVerificationToken = async (formData:FormData) => {
    try{
        const res = await  fetch("/api/users/new-verification", {
            body:formData,
            method:"POST"
        })

        return await res.json();
    }
    catch (err:unknown){
        console.log(err)
    }
}