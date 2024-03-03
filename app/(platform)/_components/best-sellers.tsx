import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";

const devImages = [
    "/images/test3.jpg",
    "/images/test4.jpg",
    "/images/test5.jpg",
    "/images/test6.jpg",
    "/images/test7.jpg",
]
export const BestSellers = () => {
    return <div className="mx-auto flex items-center justify-center flex-col">
        <h2 className="text-3xl mb-4 pt-4 text-[#53362D]">Best Sellers</h2>
        {/*  todo put a nav bar here for selection of type of pants */}
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full max-w-4xl"
        >
            <CarouselContent className="w-full">
                {devImages.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="relative h-[25rem] gap-x-10 ">
                            <Card>
                                <CardContent>
                                    <Image src={image}  alt="image" fill className="object-cover"  />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
}




