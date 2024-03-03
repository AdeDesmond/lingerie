"use client"
import {SyncLoader} from "react-spinners";
import {EyeIcon, EyeOffIcon} from "lucide-react";
import {Popover} from "@/app/(admin)/post-product/_components/popover";
import {FormEvent, useState} from "react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {fetchSignUpUser} from "@/lib/fetch-user";
interface SignupFormProps {
    showForm:boolean,
    setShowForm:(show:boolean) => void
}
export const SignupForm = ({showForm, setShowForm}:SignupFormProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [isCreating, setIsCreating] = useState(false);

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsCreating(true);
        const signupdata = new FormData();
        signupdata.append("name", name)
        signupdata.append("email", email)
        signupdata.append("password", password)
        signupdata.append("passwordConfirm", passwordConfirm)
        //Todo sent to the backend
        const res = await fetchSignUpUser(signupdata);
        if(res.message === "success"){
            setIsCreating(false)
            setName("")
            setEmail("")
            setPassword("")
            setPasswordConfirm("")
        }
    }
    const handleShowPassword = () => {
        setShowPassword((show) => !show);
    }
    return <Popover showForm={showForm} setShowForm={setShowForm}>
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md ">
            <h2 className="text-center font-bold">Welcome to join the community</h2>
            <label>Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="w-full border rounded-md outline-none focus:ring focus:ring-slate-900 focus:ring-offset-0 transition h-8"/>
            <label>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full border rounded-md outline-none focus:ring focus:ring-slate-900 focus:ring-offset-0 transition h-8"/>
            <label>Password</label>
            <div className="relative">
                <input value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? "text" : "password"} className="w-full border rounded-md outline-none focus:ring focus:ring-slate-900 focus:ring-offset-0 transition h-8"/>
                <button onClick={handleShowPassword} type="button" className="absolute top-2 right-2">
                    {
                        showPassword ?  <EyeIcon className="text-muted-foreground w-4 h-4" /> :  <EyeOffIcon className="text-muted-foreground w-4 h-4" />
                    }
                </button>
            </div>
            <label>Password Confirm</label>
            <div className="relative">
                <input value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} type={showPassword ? "text" : "password"}
                       className="w-full border rounded-md outline-none focus:ring focus:ring-slate-900 focus:ring-offset-0 transition h-8"/>
                <button onClick={handleShowPassword} type="button" className="absolute top-2 right-2">
                    {
                        showPassword ? <EyeIcon className="text-muted-foreground w-4 h-4" /> : <EyeOffIcon className="text-muted-foreground h-4 w-4" />
                    }
                </button>
            </div>

            <Button disabled={isCreating}  className="mt-2 mb-8 disabled:cursor-wait " size="sm">
                {isCreating ? <SyncLoader color="#0ea5e9" className="" size={7}  /> : "Sign up"}
            </Button>
            <div>
                <p className="text-muted-foreground text-xs">if you already have an account <Link href={"/signin"} className="font-semibold underline">
                    login
                </Link></p>
            </div>
        </form>
    </Popover>
}
//bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800