import {NextResponse, NextRequest} from "next/server";
import {CreateProductSchema} from "@/lib/zod-schema";
import { db } from "@/db/prisma-client";


export async function POST(req:NextRequest){
    try{
        //TODO we will have to validated the user in the future
        const body = await  req.formData();
        const validatedFields = CreateProductSchema.safeParse({
            title:body.get("title"),
            brand:body.get("brand"),
            tags:body.get("tags"),
            variants:body.get("variants"),
            dimensions:Number(body.get("dimensions")),
            quantity:Number(body.get("quantity")),
            price:Number(body.get("price")),
            imageUrl:body.get("imageUrl"),
            description:body.get("description"),
        })


        if(!validatedFields.success){
            return NextResponse.json({ error:validatedFields.error.flatten().fieldErrors }, { status: 400})
        }
        const productFields = validatedFields.data;
        const newProduct = await  db.products.create({
            data:{
                title:productFields.title,
                brand:productFields.brand,
                tags:productFields.tags,
                variants:productFields.variants,
                dimensions:productFields.dimensions,
                quantity:productFields.quantity,
                price:productFields.price,
                imageUrl:productFields.imageUrl,
                description:productFields.description
            }
        })
        return NextResponse.json({ message:"success" }, {status:200})
    }
    catch(err:unknown){
        if(err instanceof  Error){
            NextResponse.json({ error:err.message  }, {status:500});
        }else {
            NextResponse.json({
                err:"something went wrong"
            }, { status:500 })
        }
    }
}