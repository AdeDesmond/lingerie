import {ColorSelection} from "@/app/(platform)/products/_components/color-selection";
import {PriceSlider} from "@/app/(platform)/products/_components/price-slider";

export  default  function ProductPage(){
    return <section className="grid grid-cols-4 w-full min-h-screen">
        <div>

            <ColorSelection />
            <PriceSlider  />
        </div>
        <div className="bg-amber-500 col-span-3">
            am taking the lion share
        </div>
    </section>
}