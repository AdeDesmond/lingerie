import {NextRequest, NextResponse} from "next/server";
import {uploadBagsImage} from "@/db/upload-images";

export async function POST(req:NextRequest){
    try{
        const body = await  req.formData();
        const imageFile =  body.get("file");
        const imageFromSupbaseUrl = await  uploadBagsImage(imageFile as File);
        return NextResponse.json({ message:"success", superBaseImageUrl:imageFromSupbaseUrl }, {status:200})
    }
    catch (err:unknown){
        if(err instanceof  Error){
            return NextResponse.json({  error:err.message  }, {status:500})
        } else {
            return NextResponse.json({error:"something went wrong"}, {status:500})
        }
    }
}