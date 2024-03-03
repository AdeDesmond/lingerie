import {HeroSection} from "@/app/(platform)/_components/hero-section";
import {DisplayProducts} from "@/app/(platform)/_components/display-products";
import Image from "next/image";
import {Button } from "@/components/ui/button";
import {Footer} from "@/app/(platform)/_components/footer";


export default function HomePage(){
    return <main className="w-full min-h-screen ">
        <HeroSection  />
        <DisplayProducts  />
        <div className="flex items-center justify-center gap-x-10 mt-10">
            <Image src={"/images/test1.jpg"} alt={"image"} width={550} height={500} className="object-cover" />
            <div className="flex flex-col gap-y-6">

                <h2 className="text-3xl">Welcome to order</h2>
                <p className="">This is something that you want to check to  make sure that <br /> you like it before buying it </p>
                 <Button className="w-[12rem]">Check it out</Button>
            </div>
        </div>
        <div className="flex items-center justify-center gap-x-10 mt-10 w-full">
            <Image src={"/images/test8.jpg"} alt={"model"}  width={309} height={400}   />
            <Image src={"/images/test9.jpg"} alt={"model"}  width={309} height={400}   />
            <Image src={"/images/test7.jpg"} alt={"model"}  width={309} height={400}   />
        </div>
        <Footer />
    </main>
}