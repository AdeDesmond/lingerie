import Link from "next/link";
import {HomeIcon, BadgeCentIcon, TicketPercentIcon, WrenchIcon, Wrench} from "lucide-react";
export const NavBar = () => {
    return <nav className="flex mx-auto flex-col gap-y-5">
        <Link href={"/"} className="flex items-center gap-x-1">
            <HomeIcon />
            Dashboard
        </Link>
        <Link href={"/"} className="flex items-center gap-x-1">
            <BadgeCentIcon  />
            Sales
        </Link>
        <Link href={"/post-product"} className="flex items-center gap-x-1">
            <TicketPercentIcon  />
            Products
        </Link>
        <Link href={"/"} className="flex items-center gap-x-1">
            <Wrench />
            Settings
        </Link>
        <Link href={"/"}>Test</Link>
    </nav>
}