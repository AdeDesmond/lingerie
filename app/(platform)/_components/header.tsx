import {Logo} from "@/components/logo";
import {NavBar} from "@/app/(platform)/_components/nav-bar";
import {UserNav} from "@/app/(platform)/_components/user-nav";

export const Header = () => {
    return <header className="hidden  absolute md:flex lg:flex z-[100000] w-full justify-between px-[10rem] text-[#FEF9F5]">
        <Logo />
        <NavBar />
        <UserNav />
    </header>
}