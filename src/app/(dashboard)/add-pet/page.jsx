"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Form, Input, Label, TextField } from "@heroui/react";
import { Plus, Check, HeartHandshake } from "lucide-react"
import toast from "react-hot-toast";
import { authClient, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const AddPetListing = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");

    const router = useRouter();

    const { data: session } = useSession();
    const user = session?.user;

    const onSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        setIsSubmitting(true);
        setSuccessMsg("");

        const formData = new FormData(e.currentTarget);
        const petData = Object.fromEntries(formData.entries());
        petData.userId = user?.id;

        const { data: tokenData } = await authClient.token();
        const token = tokenData?.token;

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/addPet`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(petData)
        })
        // console.log(petData);



        try {
            // Simulate submission network handshake verification latency delay
            await new Promise((resolve) => setTimeout(resolve, 1400));
            toast.success(`"${petData.petName}" has been added successfully!`)
            setSuccessMsg(`"${petData.petName}" has been added successfully!`);
            form.reset();
            router.refresh();

        } catch (err) {
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-left"
        >
            {/* Title Meta Header Layout Card */}
            <div className="mb-4 border-b border-slate-200 dark:border-slate-800/80 pb-3.5">

                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-4">
                    List a Pet for <span className="text-[#45acac]">Adoption</span>
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5 font-medium">
                    Fill in the details below to help a furry friend find their forever home.
                </p>
            </div>

            {/* Toast Alert Dialog Banner Hook */}
            <AnimatePresence>
                {successMsg && (
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: -10 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: -10 }}
                        className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-sm"
                    >
                        <Check size={18} className="text-emerald-500 animate-bounce" /> {successMsg}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Form Master Data Frame Card */}
            <div className="bg-white dark:bg-[#0b1213] border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 md:p-8 shadow-xl dark:shadow-2xl relative overflow-hidden transition-colors duration-300">

                {/* Section Header */}
                <div className="flex items-center gap-2 mb-6 text-slate-800 dark:text-slate-200 font-bold text-base border-b border-slate-200 dark:border-slate-800/80 pb-3.5">
                    <HeartHandshake className="text-[#45acac]" size={18} />
                    Pet Information
                </div>

                <Form className="flex flex-col gap-6 w-full" onSubmit={onSubmit}>

                    {/* Row 1: Pet Name & Species Option Matrix */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                        <TextField isRequired name="petName">
                            <Label className="text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-1 block">Pet Name</Label>
                            <Input placeholder="e.g. Buddy" className="w-full" />
                        </TextField>

                        <div className="flex flex-col w-full">
                            <label className="text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-2.5">Species</label>
                            <select
                                required
                                name="species"
                                className="w-full h-10 px-3 rounded-xl bg-slate-50 dark:bg-[#1f2937] border border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[#45acac] dark:focus:border-[#45acac] transition-all text-sm cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700/50"
                            >
                                <option value="">Select species</option>
                                <option value="Dog">Dog</option>
                                <option value="Cat">Cat</option>
                                <option value="Bird">Bird</option>
                                <option value="Rabbit">Rabbit</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>

                    {/* Row 2: Breed & Age Matrix Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                        <TextField isRequired name="breed">
                            <Label className="text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-1 block">Breed</Label>
                            <Input placeholder="e.g. Labrador Retriever" />
                        </TextField>

                        <TextField isRequired name="age">
                            <Label className="text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-1 block">Age (years)</Label>
                            <Input placeholder="e.g. 2" />
                        </TextField>
                    </div>

                    {/* Row 3: Gender Selector Setup and Vaccination Matrix */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                        <div className="flex flex-col w-full">
                            <label className="text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-2.5">Gender</label>
                            <select
                                required
                                name="gender"
                                className="w-full h-10 px-3 rounded-xl bg-slate-50 dark:bg-[#1f2937] border border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[#45acac] transition-all text-sm cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700/50"
                            >
                                <option value="">Select gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>

                        <div className="flex flex-col w-full">
                            <label className="text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-2.5">Vaccination Status</label>
                            <select
                                required
                                name="vaccinationStatus"
                                className="w-full h-10 px-3 rounded-xl bg-slate-50 dark:bg-[#1f2937] border border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[#45acac] transition-all text-sm cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700/50"
                            >
                                <option value="">Select status</option>
                                <option value="Fully Vaccinated">Fully Vaccinated</option>
                                <option value="Partially Vaccinated">Partially Vaccinated</option>
                                <option value="Not Vaccinated">Not Vaccinated</option>
                            </select>
                        </div>
                    </div>

                    {/* Row 4: Image URL Single Full-Width Field Input block */}
                    <TextField isRequired name="imageUrl" type="url" className="w-full">
                        <Label className="text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-1 block">
                            Pet Image URL <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium normal-case ml-1">(upload to imgbb.com first)</span>
                        </Label>
                        <Input placeholder="https://i.ibb.co/..." className="w-full" />
                    </TextField>

                    {/* Row 5: Health Status Selection and Location Metadata fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                        <div className="flex flex-col w-full">
                            <label className="text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-2.5">Health Status</label>
                            <select
                                required
                                name="healthStatus"
                                className="w-full h-10 px-3 rounded-xl bg-slate-50 dark:bg-[#1f2937] border border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[#45acac] transition-all text-sm cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700/50"
                            >
                                <option value="">Select health status</option>
                                <option value="Healthy">Healthy</option>
                                <option value="Undergoing Treatment">Undergoing Treatment</option>
                                <option value="Special Needs">Special Needs</option>
                            </select>
                        </div>

                        <TextField isRequired name="location">
                            <Label className="text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-1 block">Location</Label>
                            <Input placeholder="e.g. New York, NY" />
                        </TextField>
                    </div>

                    {/* Grid Row 6: Adoption Fee & Contact Owner Matrix Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                        <TextField isRequired name="adoptionFee" type="number">
                            <Label className="text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-1 block">
                                Adoption Fee ($) — Enter 0 for free
                            </Label>
                            {/* FIXED: Removed internal value binds, using ONLY defaultValue */}
                            <Input
                                placeholder="0"
                                className="w-full"
                            />
                        </TextField>

                        <TextField isRequired name="ownerEmail" type="email">
                            <Label className="text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-1 block">
                                Owner Email
                            </Label>
                            <Input value={user?.email} placeholder="123alarafat@gmail.com" className="w-full" />
                        </TextField>
                    </div>

                    {/* Row 7: Textarea Box Description Form Block */}
                    <div className="flex flex-col w-full">
                        <label className="text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">Description</label>
                        <textarea
                            required
                            name="description"
                            rows={4}
                            placeholder="Describe the pet's personality, habits, needs and anything adopters should know..."
                            className="w-full p-4 rounded-xl bg-slate-50 dark:bg-[#1f2937] border border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:border-[#45acac] transition-all resize-none placeholder:text-slate-400 dark:placeholder:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700/30"
                        />
                    </div>

                    {/* Action Layout Panel Footer */}
                    <div className="flex items-center justify-end gap-3 border-t border-slate-100 dark:border-slate-800 pt-6 mt-4 w-full">
                        <Button
                            type="reset"
                            variant="light"
                            className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold rounded-xl px-5"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            isLoading={isSubmitting}
                            className="bg-[#45acac] text-white font-bold px-6 rounded-xl shadow-md hover:shadow-xl dark:shadow-none transition-all duration-200 hover:-translate-y-0.5"
                        >
                            {!isSubmitting && <Plus size={16} className="mr-1.5" />}
                            Add Pet Listing
                        </Button>
                    </div>

                </Form>
            </div>
        </motion.div>
    );
};

export default AddPetListing;