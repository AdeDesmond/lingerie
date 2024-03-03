"use client";
import {usePathname, useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {X} from "lucide-react";

interface PopoverProps {
    children:React.ReactNode
    showForm:boolean;
    setShowForm:(show:boolean) => void;
}
export const Popover = ({children, showForm, setShowForm}:PopoverProps) => {
    const pathName = usePathname();
    const router = useRouter();
    const handleShowForm = () => {
        setShowForm(false)
        if(pathName === "/signup" || pathName === "/signin"){
            router.push("/")
        }
    }
    return <div className="w-full min-h-screen fixed inset-0 bg-black bg-opacity-80 ">
        <div className="w-full h-full relative flex items-center justify-center">
            <Button onClick={handleShowForm} className="absolute top-3 right-3" size="sm" variant="ghost">
                <X className="h-5 w-5 text-rose-400" />
            </Button>

            <div className="w-full flex justify-center">
                {children}
            </div>
        </div>
    </div>
}