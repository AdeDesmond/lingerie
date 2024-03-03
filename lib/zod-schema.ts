import * as z from "zod";


export const CreateProductSchema = z.object({
    title:z.string().min(3, {message:"character must be at least 3 characters"}),
    brand:z.string(),
    tags:z.string(),
    variants:z.string(),
    dimensions:z.number(),
    quantity:z.number(),
    price:z.number(),
    description:z.string().min(3, {message:"description must have a reasonable length"}),
    imageUrl:z.string(),

});


export const CreateSignUpUserSchema = z.object({
    name:z.string().min(3, {message:"character must be at least 3 characters"}),
    email:z.string().email({message:"Email should be a correct format"}),
    password:z.string(),
    passwordConfirm:z.string()
}).refine((data) =>data.password === data.passwordConfirm, {
       message:"Passwords don't match",
    path:["passwordConfirm"]
})


export const CreateSignInUserSchema = z.object({
    email:z.string().email({message:"email should be in a valid format"}),
    password:z.string()
})

