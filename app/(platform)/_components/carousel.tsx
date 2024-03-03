import * as React from "react"
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {Header} from "@/app/(platform)/_components/header";
import {CallToAction} from "@/app/(platform)/_components/call-to-action";
import {MobileSideNav} from "@/app/(platform)/_components/mobile-nav";


const devImages = [
    "/images/test1.jpg",
    "/images/test2.jpg"
]

export function CarouselLanding() {
    return (
        <Carousel className="w-full relative">
            <div className="absolute top-14  z-[100000] w-full flex flex-col ">
                <div className="w-full lg:hidden md:hidden absolute flex justify-end -top-10">
                    <MobileSideNav  />
                </div>
                <Header  />
                <CallToAction />
            </div>
            <CarouselContent className="w-full  ">
                {
                    devImages.map((image, index) => <CarouselItem key={index} className="pl-[-6rem]">
                        <div className="w-full relative min-h-[40vh]">
                            <Image src={image} alt="model" fill className="object-cover
                            "/>
                        </div>
                    </CarouselItem>)
                }
            </CarouselContent>
            <div className="absolute bottom-5 left-[50%] flex items-center ">
                <CarouselPrevious className=" "/>
                <CarouselNext className=" " />
            </div>
        </Carousel>
    )
}
