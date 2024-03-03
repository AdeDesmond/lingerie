
import { TruckIcon, WalletIcon, PackageIcon } from "lucide-react";
export const Footer = () => {
    return <footer className="bg-[#CAA78B] w-full h-[20rem] mt-20">
        <h2 className="text-center pt-10 pb-10 text-3xl font-semibold">This is the footer of our page</h2>
        <div className="w-full flex items-center justify-center gap-x-10">
            <div className="flex flex-col gap-y-8 items-center">
                <TruckIcon className="h-10 w-10 text-[#FEF9F5]"/>
                <h3>delivery</h3>
                <p>Your satisfaction is paramount</p>
            </div>
            <div className="flex flex-col gap-y-8 items-center">
                <WalletIcon className="h-10 w-10 text-[#FEF9F5]"/>
                <h3>Payment</h3>
                <p>Your satisfaction is paramount</p>
            </div>
            <div className="flex flex-col gap-y-8 items-center">
                <PackageIcon className="h-10 w-10 text-[#FEF9F5]"/>
                <h3>Packaging</h3>
                <p>Your package is confidential</p>
            </div>
        </div>
    </footer>
}