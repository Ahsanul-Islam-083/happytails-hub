"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { LogIn, Eye, EyeOff } from "lucide-react";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { authClient, signIn } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function Login() {
    const router = useRouter();
    const [showPass, setShowPass] = useState(false);
    const [formError, setFormError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setFormError("");
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
          
            await new Promise((resolve) => setTimeout(resolve, 1200));

            const { data: loginData, error: loginError } = await signIn.email({
                email: data.email,
                password: data.password,
            });

       
          
            toast.success("Logged in successfully! 🐾");
            
            router.push("/");
        } catch (err) {
            setFormError("Invalid email address or password combination.");
            setIsSubmitting(false);
        }
    };

    const handleGoogleLogin = async() => {
      await authClient.signIn.social({
        provider:"google"
      })
     
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f8f3e9] dark:bg-[#121C1E] py-12 px-4 transition-colors duration-300">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-md bg-white dark:bg-[#162224] p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800/50 text-left"
            >
               
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold uppercase tracking-tight text-slate-800 dark:text-white">
                        Welcome <span className="text-[#45acac]">Back</span>
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                        Sign in to access your dashboard account
                    </p>
                </div>

                
                {formError && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-4 p-3 text-sm bg-danger-50 dark:bg-danger-950/30 text-danger border border-danger-200 dark:border-danger-900/50 rounded-xl font-medium"
                    >
                        {formError}
                    </motion.div>
                )}

                <Form className="flex flex-col gap-5 w-full" onSubmit={onSubmit}>

                  
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-slate-700 dark:text-slate-300 font-semibold text-sm">Email Address</Label>
                        <Input placeholder="john@example.com" className="mt-1" />
                        <FieldError className="text-xs text-danger mt-1" />
                    </TextField>

                   
                    <TextField isRequired name="password" type={showPass ? "text" : "password"} className="w-full">
                        <div className="flex justify-between items-center w-full">
                            <Label className="text-slate-700 dark:text-slate-300 font-semibold text-sm">Password</Label>
                            <p className="text-xs text-[#e2b86b] hover:underline font-medium cursor-pointer">
                                Forgot password?
                            </p>
                        </div>

                       
                        <div className="relative w-full mt-1 flex items-center">
                            <Input placeholder="Enter your password" className="w-full pr-12" />
                            <button
                                type="button"
                                onClick={() => setShowPass(!showPass)}
                                className="absolute right-4 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors z-30"
                                style={{ top: "50%", transform: "translateY(-50%)" }}
                            >
                                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                        <FieldError className="text-xs text-danger mt-1" />
                    </TextField>

                   
                    <Button
                        type="submit"
                        isLoading={isSubmitting}
                        className="w-full bg-[#45acac] hover:bg-[#389191] text-white font-bold py-6 rounded-xl shadow-md transition-all mt-2"
                    >
                        {!isSubmitting && <LogIn size={18} className="mr-1" />}
                        Login
                    </Button>

                   
                    <div className="relative flex py-2 items-center w-full">
                        <div className="grow border-t border-slate-200 dark:border-slate-800"></div>
                        <span className="shrink mx-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Or continue with</span>
                        <div className="grow border-t border-slate-200 dark:border-slate-800"></div>
                    </div>

                   
                    <Button
                        type="button"
                        variant="bordered"
                        onClick={handleGoogleLogin}
                        className="w-full border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-semibold py-6 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                    > 
                        
                        <FcGoogle />
                        Sign in with Google
                    </Button>

                
                    <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-4">
                        New to the platform?{" "}
                        <Link href="/register" className="text-[#e2b86b] hover:underline font-semibold transition-colors">
                            Create an account
                        </Link>
                    </p>

                </Form>
            </motion.div>
        </div>
    );
}