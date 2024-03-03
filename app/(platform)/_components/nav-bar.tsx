import Link from "next/link";

export const NavBar = () => {
    return <nav>
        <ul className="flex flex-col  lg:flex-row md:flex-row items-center gap-1 lg:pl-14">
            <Link href={"/"}>Home</Link>
            <Link href={"/featured"}>Featured</Link>
            <Link href={"/"}>New Arrivals</Link>
            <Link href={"/"}>Sales</Link>
        </ul>
    </nav>
}