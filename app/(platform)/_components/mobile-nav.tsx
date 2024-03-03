"use client";

// @ts-ignore
import {Button} from "@/components/ui/button"
// @ts-ignore
import { Sheet, SheetContent } from "@/components/ui/sheet";
import {MobileStoreNav, useMobileNav} from "../../../hooks/use-mobile-nav";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import {MenuIcon} from "lucide-react";
import {NavBar} from "@/app/(platform)/_components/nav-bar";
import {Logo} from "@/components/logo";
import {UserNav} from "@/app/(platform)/_components/user-nav";


export const MobileSideNav = () => {
    const pathName = usePathname()
    const [mounted, setMounted] = useState(false);
    const isOpen = useMobileNav((state:MobileStoreNav) => state.isOpen);
    const onOpen = useMobileNav((state) => state.onOpen);
    const onClose = useMobileNav((state) => state.onClose);
    useEffect(() => {
        setMounted(true);
    }, []);
    useEffect(() => {
        onClose();
    }, [pathName, onClose]);
    if(!mounted)return null;
    return <>
        <Button onClick={onOpen} variant="ghost" size="sm" className="w-fit">
            <MenuIcon className="text-[#FEF9F5] h-6 w-6"  />
        </Button>
        <Sheet open={isOpen} onOpenChange={onClose}>
           <SheetContent side="right" className="flex flex-col items-center justify-around z-[100000000] ">
               <Logo />
               <NavBar />
               <UserNav  />
           </SheetContent>
        </Sheet>
    </>
}