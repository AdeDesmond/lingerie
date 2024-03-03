import { SearchIcon, HeartIcon,UserRoundIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";


export const UserNav = () => {
    return <div className="flex items-center gap-x-1">
       <Link href={"/"}>
           <SearchIcon />
       </Link>
        <Link href={"/"}>
            <UserRoundIcon />
        </Link>
        <Link href={"/"}>
            <HeartIcon />
        </Link>
        <Link href={"/"}>
            <ShoppingCartIcon />
        </Link>
    </div>
}