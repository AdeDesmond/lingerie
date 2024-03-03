import {Button} from "@/components/ui/button";

export const CallToAction = () => {
    return <div className="flex flex-col gap-y-10 lg:mt-[4rem] items-center">
        <h2 className="text-4xl font-bold text-[#FEF9F5]">Enjoy your summer</h2>
        <p>we are here for you</p>
        <Button className="w-[10rem] bg-[#FEF9F5] text-[#53362D]">Shop Now</Button>
    </div>
}