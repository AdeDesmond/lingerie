"use client";


import {Popover} from "@/app/(admin)/post-product/_components/popover";
import {EyeIcon, EyeOffIcon} from "lucide-react";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import Link from "next/link";

interface SigninFormProps {
    showForm:boolean,
    setShowForm:(show:boolean) => void;
}
export const SignInForm = ({showForm, setShowForm}:SigninFormProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword((show) => !show);
    }
    return <Popover showForm={showForm} setShowForm={setShowForm}>
        <form className="flex flex-col bg-white w-[30rem] p-4 rounded-md">
            <label>email</label>
            <input className="w-full border rounded-md outline-none focus:ring focus:ring-slate-900 focus:ring-offset-0 transition h-8"/>
            <label>password</label>
            <div className="relative">
                <input type={showPassword ? "text" : "password"}
                       className="w-full border rounded-md outline-none focus:ring focus:ring-slate-900 focus:ring-offset-0 transition h-8"/>
                <button onClick={handleShowPassword} type="button" className="absolute top-2 right-2">
                    {
                        showPassword ? <EyeIcon className="text-muted-foreground w-4 h-4"/> :
                            <EyeOffIcon className="text-muted-foreground w-4 h-4"/>
                    }
                </button>
            </div>

            <Button className="mt-2 mb-8 " size="sm">Login</Button>
            <div>
                <p className="text-muted-foreground text-xs">Don&apos;t have an account <Link href={"/signup"} className="font-semibold underline">
                    sign-up
                </Link></p>
            </div>
        </form>
    </Popover>
}