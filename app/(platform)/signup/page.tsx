"use client";

import { useState  } from "react";
import {SignupForm} from "@/app/(platform)/signup/_components/signup-form";
export default function SignUpPage(){
    const [showForm, setShowForm] = useState(true);
    return <div>{
        showForm && <SignupForm showForm={showForm} setShowForm={setShowForm} />
    }</div>
}