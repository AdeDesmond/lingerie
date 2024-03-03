export const fetchUploadImages = async (formdata:FormData) => {
    try{
        const response = await  fetch("/api/upload", {
            body:formdata,
            method:"POST"
        })
        return await response.json();
    }
    catch(e:unknown) {
        console.log(e)
    }
}


export const fetchCreateProduct = async (formData:FormData) => {
    try{
        const res = await  fetch("/api/create-product", {
            method:"POST",
            body:formData
        })
        return await  res.json();
    }
    catch (err:unknown){
        console.log(err)
    }
}


export const fetchAllProducts = async () => {
    try{
        const response = await  fetch("/api/products", {
            method:"GET",
        })

        return await  response.json();
    }
    catch(err:unknown){
        console.log(err)
    }
}

