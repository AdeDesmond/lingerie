import {NextRequest, NextResponse} from "next/server";
import {db} from "@/db/prisma-client";

export async function GET(){
    try{
        //TODO pagination maybe done in the future
        const products = await  db.products.findMany();
        if(products.length > 0){
            return NextResponse.json({message:"success", allProducts:products}, {status:200})
        } else {
            return NextResponse.json({message:"fail"}, {status:404})
        }
    }
    catch (err:unknown){
        if(err instanceof  Error){
            return NextResponse.json({ error:err.message }, {status:500});

        } else {
            return  NextResponse.json({error:"Something went wrong"}, {status:500})
        }
    }
}