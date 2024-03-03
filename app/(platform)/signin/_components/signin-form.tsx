"use client";
import {useRouter} from "next/navigation";
import {SyncLoader} from "react-spinners";
import {Popover} from "@/app/(admin)/post-product/_components/popover";
import {EyeIcon, EyeOffIcon} from "lucide-react";
import {FormEvent, useState} from "react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {fetchLoginUser} from "@/lib/fetch-user";

interface SigninFormProps {
    showForm:boolean,
    setShowForm:(show:boolean) => void;
}
export const SignInForm = ({showForm, setShowForm}:SigninFormProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const handleShowPassword = () => {
        setShowPassword((show) => !show);
    }

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLogin(true)
        const formData = new FormData;
        formData.append("email", email)
        formData.append("password", password)
        const res = await fetchLoginUser(formData);
        if(res.message === "success"){
            setIsLogin(false)
            setEmail("")
            setPassword("")
            router.push("/profile")
        }
        setIsLogin(false)
    }
    return <Popover showForm={showForm} setShowForm={setShowForm}>
        <form onSubmit={handleSubmit} className="flex flex-col bg-white w-[30rem] p-4 rounded-md">
            <label>email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border rounded-md outline-none focus:ring focus:ring-slate-900 focus:ring-offset-0 transition h-8"/>
            <label>password</label>
            <div className="relative">
                <input value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? "text" : "password"}
                       className="w-full border rounded-md outline-none focus:ring focus:ring-slate-900 focus:ring-offset-0 transition h-8"/>
                <button onClick={handleShowPassword} type="button" className="absolute top-2 right-2">
                    {
                        showPassword ? <EyeIcon className="text-muted-foreground w-4 h-4"/> :
                            <EyeOffIcon className="text-muted-foreground w-4 h-4"/>
                    }
                </button>
            </div>

            <Button className="mt-2 mb-8 " size="sm">
                {isLogin ? <SyncLoader color="#0ea5e9" className="" size={7}  /> : "Login"}
            </Button>
            <div>
                <p className="text-muted-foreground text-xs">Don&apos;t have an account <Link href={"/signup"} className="font-semibold underline">
                    sign-up
                </Link></p>
            </div>
        </form>
    </Popover>
}