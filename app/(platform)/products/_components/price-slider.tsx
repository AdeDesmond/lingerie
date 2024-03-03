"use client";
import {cn} from "@/lib/utils"
import {useState, ChangeEvent, ComponentProps} from "react";
import {Slider} from "@/components/ui/slider"

type SliderProps = ComponentProps<typeof Slider>

export function PriceSlider({className, ...props}: SliderProps) {
    const [price, setPrice] = useState(0)
    const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value)
        setPrice(newValue)
    }
    return (
        <div className="mt-20">
            <p>$100</p>
            <input
                type="range"
                min="100"
                max="1000"
                value={price}
                onChange={handlePriceChange}
                className="w-[75%]"
            />
            <p>${price}</p>
        </div>
    )
}


// export  const PriceSlider = () => {
//     const [price, setPrice] = useState(100)
//     const handlePriceChange = () => {
//         setPrice((price) => price + 10)
//     }
//     console.log(price)
//     return <div>
//         {price}
//         <Slider defaultValue={[50]} max={1000} step={1} min={price} value={[price]} onValueChange={handlePriceChange} className={cn("w-[60%]")}  />
//     </div>
//
// }



