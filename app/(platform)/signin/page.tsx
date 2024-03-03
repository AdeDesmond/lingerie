"use client";

import {useState} from "react";
import {SignInForm} from "@/app/(platform)/signin/_components/signin-form";

export default function SignInPage(){
    const [showForm, setShowForm] = useState(true)
    return <div>
        {
            showForm && <SignInForm showForm={showForm} setShowForm={setShowForm}  />
        }
    </div>
}