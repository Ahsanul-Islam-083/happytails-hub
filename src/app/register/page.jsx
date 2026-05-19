"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Eye, EyeOff } from "lucide-react";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import toast from "react-hot-toast";
// import { error } from "better-auth/api";
import { signUp } from "@/lib/auth-client";

export default function GetStarted() {
    const router = useRouter();
    const [showPass, setShowPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);

    // Real-time tracking for password match verification
    const [passwordVal, setPasswordVal] = useState("");
    const [formError, setFormError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setFormError("");
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // Final security checkpoint check
        if (data.password !== data.confirmPassword) {
            setFormError("Passwords do not match. Please verify.");
            setIsSubmitting(false);
            return;
        }

        try {
            // Simulate backend registration call 
            await new Promise((resolve) => setTimeout(resolve, 1500));
            // console.log(data,"data");
            const { data: signUpData, error: signUpError } = await signUp.email({
                email: data.email,
                password: data.password,
                name: data.name,
                photoUrl: data.photoUrl,
            })

            toast.success("Account created successfully! 🐾");
            // Success Redirect
            // router.push("/");
            console.log({ signUpData, signUpError });
        } catch (err) {
            toast.error("Registration failed. Email might already be taken.");
            setFormError("Registration failed. Email might already be taken.");
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f8f3e9] dark:bg-[#121C1E] py-12 px-4 transition-colors duration-300">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-md bg-white dark:bg-[#162224] p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800/50 text-left"
            >
                {/* Title branding */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold uppercase tracking-tight text-slate-800 dark:text-white">
                        Get <span className="text-[#45acac]">Started</span>

                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                        Create your profile to start your journey
                    </p>
                </div>

                {/* Form-level Error Message Box */}
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

                    {/* Name Field */}
                    <TextField isRequired name="name" type="text">
                        <Label className="text-slate-700 dark:text-slate-300 font-semibold text-sm">Full Name</Label>
                        <Input placeholder="Enter your full name" className="mt-1" />
                        <FieldError className="text-xs text-danger mt-1" />
                    </TextField>

                    {/* Email Field */}
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

                    {/* Photo URL Field */}
                    <TextField isRequired name="photoUrl" type="url">
                        <Label className="text-slate-700 dark:text-slate-300 font-semibold text-sm">Photo URL</Label>
                        <Input placeholder="https://example.com/your-avatar.jpg" className="mt-1" />
                        <FieldError className="text-xs text-danger mt-1" />
                    </TextField>

                    {/* Password Field */}
                    <TextField
                        isRequired
                        name="password"
                        type={showPass ? "text" : "password"}
                        onChange={(value) => setPasswordVal(value)}
                        className="w-full"
                        validate={(value) => {
                            if (value.length < 6) return "Password must be at least 6 characters";
                            if (!/[A-Z]/.test(value)) return "Must include at least one uppercase letter";
                            if (!/[a-z]/.test(value)) return "Must include at least one lowercase letter";
                            return null;
                        }}
                    >
                        <Label className="text-slate-700 dark:text-slate-300 font-semibold text-sm">Password</Label>

                        {/* relative wrapper tightly contains the absolute eye icon */}
                        <div className="relative w-full mt-1 flex items-center">
                            <Input placeholder="Create a strong password" className="w-full pr-12" />
                            <button
                                type="button"
                                onClick={() => setShowPass(!showPass)}
                                className="absolute right-4 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors z-30"
                                style={{ top: "50%", transform: "translateY(-50%)" }}
                            >
                                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>

                        <Description className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
                            At least 6 characters with 1 uppercase & 1 lowercase letter
                        </Description>
                        <FieldError className="text-xs text-danger mt-1" />
                    </TextField>

                    {/* Confirm Password Field */}
                    <TextField
                        isRequired
                        name="confirmPassword"
                        type={showConfirmPass ? "text" : "password"}
                        className="w-full"
                        validate={(value) => {
                            if (value !== passwordVal) {
                                return "Passwords do not match";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-slate-700 dark:text-slate-300 font-semibold text-sm">Confirm Password</Label>

                        {/* relative wrapper tightly contains the absolute eye icon */}
                        <div className="relative w-full mt-1 flex items-center">
                            <Input placeholder="Re-enter your password" className="w-full pr-12" />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPass(!showConfirmPass)}
                                className="absolute right-4 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors z-30"
                                style={{ top: "50%", transform: "translateY(-50%)" }}
                            >
                                {showConfirmPass ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                        <FieldError className="text-xs text-danger mt-1" />
                    </TextField>

                    {/* Action Buttons */}
                    <Button
                        type="submit"
                        isLoading={isSubmitting}
                        className="w-full bg-[#45acac] hover:bg-[#389191] text-white font-bold py-6 rounded-xl shadow-md transition-all mt-2"
                    >
                        {!isSubmitting && <Check size={18} className="mr-1" />}
                        Register Account
                    </Button>

                    {/* Redirect to Login */}
                    <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-4">
                        Already have an account?{" "}
                        <Link href="/login" className="text-[#e2b86b] hover:underline font-semibold transition-colors">
                            Login here
                        </Link>
                    </p>

                </Form>
            </motion.div>
        </div>
    );
}