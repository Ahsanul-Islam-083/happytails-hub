"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Form, TextField, Label, Input, Button } from "@heroui/react";
import { Heart, CalendarDays, MessageSquare, User, Mail, Check } from "lucide-react";
import toast from "react-hot-toast";

const AdoptionSection = ({ pet, user, token }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccessMsg("");

        const formData = new FormData(e.currentTarget);
        const applicationData = {
            petId: pet?._id,
            petName: pet?.petName,
            ownerEmail: pet?.ownerEmail,
            userName: user?.name,
            userEmail: user?.email,                    
            pickupDate: formData.get("pickupDate"),
            message: formData.get("message"),
            requestDate: new Date().toISOString().split("T")[0]
        };

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/adopt`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(applicationData)
            });
            const data = await response.json();
            if (data.insertedId) {
                
                toast.success('Adoption request submitted!');
                setSuccessMsg(`Your application to adopt ${pet?.petName || "this pet"} was sent successfully!`);
                // e.target.reset();
                
            } else {
                toast.error("Failed to insert request");
            }
            // console.log(applicationData);
            
        } catch (error) {
            // console.error("Adoption Submission Error:", error);
            toast.error('Failed to submit request. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full">
            {/* Toast Alert Dialog Banner Hook */}
            <AnimatePresence>
                {successMsg && (
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: -10 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: -10 }}
                        className="mb-4 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-sm"
                    >
                        <Check size={18} className="text-emerald-500 shrink-0" />
                        <span>{successMsg}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Form Master Data Frame Card */}
            <div className="bg-white dark:bg-[#121C1E] border border-slate-200/60 dark:border-slate-800/60 rounded-3xl p-6 shadow-xl relative overflow-hidden transition-colors duration-300">

                {/* Section Header */}
                <div className="mb-4 pl-2 border-b border-slate-100 dark:border-slate-800/60 pb-3.5">
                    <h2 className="flex items-center gap-2 md:text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                        <Heart className="text-[#45acac] fill-current" size={14} />  Give <span className="text-[#45acac]">{pet?.petName}</span>A Forever Home
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                        Submit your adoption interest details below. The owner will review your application and reach out.
                    </p>
                </div>

                <Form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>

                    {/* Row 1: Context Pet Name Target (Disabled/Read-only Field) */}
                    <TextField isReadOnly name="petName" className="w-full">
                        <Label className="text-slate-600 dark:text-slate-300 text-[11px] font-bold uppercase tracking-wider mb-1 block">
                            Pet Name
                        </Label>
                        <div className="relative flex items-center">

                            <Input
                                value={pet?.petName || ""}
                                className="w-full bg-slate-50/80 dark:bg-[#161f20] font-semibold text-[#45acac]"
                            />
                        </div>
                    </TextField>

                    {/* Row 2: User Name & User Email Matrix */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        <TextField isReadOnly name="userName">
                            <Label className="text-slate-600 dark:text-slate-300 text-[11px] font-bold uppercase tracking-wider mb-1 block">
                                Your Name
                            </Label>
                            <div className="relative flex items-center">
                                <User size={14} className="absolute left-3.5 text-slate-400 dark:text-slate-500" />
                                <Input
                                    value={user?.name || ""}
                                    placeholder="Applicant Name"
                                    className="w-full pl-10 bg-slate-50/80 dark:bg-[#161f20]"
                                />
                            </div>
                        </TextField>

                        <TextField isReadOnly name="userEmail" type="email">
                            <Label className="text-slate-600 dark:text-slate-300 text-[11px] font-bold uppercase tracking-wider mb-1 block">
                                Your Email Address
                            </Label>
                            <div className="relative flex items-center">
                                <Mail size={14} className="absolute left-3.5 text-slate-400 dark:text-slate-500" />
                                <Input
                                    value={user?.email || ""}
                                    placeholder="applicant@email.com"
                                    className="w-full pl-10 bg-slate-50/80 dark:bg-[#161f20]"
                                />
                            </div>
                        </TextField>
                    </div>

                    {/* Row 3: Pickup Target Date Selector Field */}
                    <TextField isRequired name="pickupDate" type="date" className="w-full">
                        <Label className="text-slate-600 dark:text-slate-300 text-[11px] font-bold uppercase tracking-wider mb-1 block">
                            Proposed Pickup Date
                        </Label>
                        <div className="relative flex items-center">
                            <CalendarDays size={14} className="absolute left-3.5 text-slate-400 dark:text-slate-500 z-10 pointer-events-none" />
                            <Input
                                required
                                className="w-full pl-10 text-slate-800 dark:text-slate-200"
                            />
                        </div>
                    </TextField>

                    {/* Row 4: Textarea Message Box Application Block */}
                    <div className="flex flex-col w-full">
                        <label className="text-slate-600 dark:text-slate-300 text-[11px] font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                            <MessageSquare size={13} className="text-slate-400" />
                            Message for the Owner
                        </label>
                        <textarea
                            required
                            name="message"
                            rows={4}
                            placeholder={`Share why you'd love to adopt ${pet?.petName || "this pet"}...`}
                            className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-[#1f2937] border border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:border-[#45acac] transition-all resize-none placeholder:text-slate-400 dark:placeholder:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700/30"
                        />
                    </div>

                    {/* Action Submit Control Layout Panel */}
                    <div className="pt-2 w-full">
                        <Button
                            type="submit"
                            isLoading={isSubmitting}
                            className="w-full bg-[#45acac] text-white font-bold h-11 rounded-xl shadow-md hover:shadow-xl dark:shadow-none transition-all duration-200 hover:-translate-y-0.5 text-sm"
                        >
                            {!isSubmitting && <Heart size={15} className="mr-1.5 fill-current" />}
                            Adopt {pet?.petName ? pet.petName : "Pet"}
                        </Button>
                    </div>

                </Form>
            </div>
        </div>
    );
};

export default AdoptionSection;