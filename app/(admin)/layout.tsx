import {SideBar} from "@/app/(admin)/_components/side-bar";

interface LayoutProps {
    children:React.ReactNode
}

export default function Layout({children}:LayoutProps){
    return <div className="bg-[#FEF9F5] max-w-[1500px] mx-auto min-h-screen flex ">
        <SideBar  />
        {children}
    </div>
}