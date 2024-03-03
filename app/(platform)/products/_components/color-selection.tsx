import { CircleDashedIcon } from "lucide-react";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export const  ColorSelection = () => {
    return <Select>
        <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Available colors" />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                <SelectLabel>North America</SelectLabel>
                <SelectItem value="est">
                    <div className="flex items-center gap-x-4">
                        <CircleDashedIcon className="h-5 w-5"  /> <span>color</span>
                    </div>
                </SelectItem>
                <SelectItem value="cst">
                    <div className="flex items-center gap-x-4">
                        <CircleDashedIcon className="h-5 w-5"/> <span>color</span>
                    </div>
                </SelectItem>
                <SelectItem value="mst">
                    <div className="flex items-center gap-x-4">
                        <CircleDashedIcon className="h-5 w-5"/> <span>color</span>
                    </div>
                </SelectItem>
                <SelectItem value="pst">
                    <div className="flex items-center gap-x-4">
                        <CircleDashedIcon className="h-5 w-5"/> <span>color</span>
                    </div>
                </SelectItem>
                <SelectItem value="akst">
                    <div className="flex items-center gap-x-4">
                        <CircleDashedIcon className="h-5 w-5"/> <span>color</span>
                    </div>
                </SelectItem>
                <SelectItem value="hst">
                    <div className="flex items-center gap-x-4">
                        <CircleDashedIcon className="h-5 w-5"/> <span>color</span>
                    </div>
                </SelectItem>
            </SelectGroup>
            <SelectGroup>
                <SelectLabel>South America</SelectLabel>
                <SelectItem value="art">Argentina Time (ART)</SelectItem>
                <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
            </SelectGroup>
        </SelectContent>
    </Select>
}



