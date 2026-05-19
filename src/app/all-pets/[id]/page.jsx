"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@heroui/react";
import {
    MapPin,
    DollarSign,
    Heart,
    ArrowLeft,
    ShieldCheck,
    Activity,
    Calendar,
    User2
} from "lucide-react";
import Link from "next/link";

const PetDetails = () => {

    // Fallback data configuration if page is loaded directly without parameters
    const pet = {
        petName: "Lovely Companion",
        species: "Pet",
        breed: "Mixed Breed",
        age: "N/A",
        gender: "Not Specified",
        imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500",
        healthStatus: "Healthy",
        vaccinationStatus: "Fully Vaccinated",
        location: "Available Nearby",
        adoptionFee: 10,
        description: "This friendly animal is searching for a loving family and cozy warm household setup. Please reach out to arrange an introductory meetup session.",
    };


    return (
        <main className="min-h-screen bg-[#f1f5f9] dark:bg-[#0b0f19] py-12 px-4 md:px-8 lg:px-12 transition-colors duration-300 text-left">
            <div className="max-w-6xl mx-auto">

                {/* Back Navigation Trigger Bar Link */}
                <Link href="/all-pets">
                    <button
                        className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-[#45acac] dark:hover:text-[#45acac] mb-8 transition-colors group"
                    >
                        <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
                        Back to All Pets
                    </button>
                </Link>
                

                {/* Master Profile Container Layout */}
                <div className="bg-white dark:bg-[#121C1E] border border-slate-200/60 dark:border-slate-800/60 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">

                    {/* LEFT CONTAINER: High-Resolution Visual Aspect Mask Showcase */}
                    <div className="relative lg:col-span-5 min-h-87.5 sm:min-h-112.5 lg:min-h-full bg-slate-900">
                        <Image
                            src={pet.imageUrl}
                            alt={pet.petName}
                            fill
                            priority
                            className="object-cover"
                        />
                        {/* Ambient vignette background mask gradient overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950/50 via-transparent to-transparent md:hidden" />
                    </div>

                    {/* RIGHT CONTAINER: Core Content & Technical Parameters Listing Specification */}
                    <div className="p-6 sm:p-8 lg:p-12 lg:col-span-7 flex flex-col justify-between">
                        <div>
                            {/* Header Details Segment Tagline Info */}
                            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                <div>
                                    <span className="text-[11px] font-extrabold text-[#e2b86b] bg-[#e2b86b]/10 px-3 py-1 rounded-md border border-[#e2b86b]/20 tracking-wider uppercase">
                                        🐾 {pet.species} Component Profile
                                    </span>
                                    <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white mt-3">
                                        {pet.petName}
                                    </h1>
                                </div>

                                {/* Cost Specification Layout Badge */}
                                <div className="flex items-center text-[#e2b86b] dark:text-[#45acac] font-black text-xl bg-[#45acac]/10 dark:bg-[#e2b86b]/5 px-4 py-2 rounded-xl border border-slate-200 dark:border-[#e2b86b]/10 shadow-sm">
                                    <DollarSign size={18} className="-mr-0.5 shrink-0" />
                                    <span>{pet.adoptionFee === 0 ? "Free" : `${pet.adoptionFee}`}</span>
                                </div>
                            </div>

                            {/* Geo-Location Index */}
                            <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 dark:text-slate-400 mb-8">
                                <MapPin size={16} className="text-[#45acac] shrink-0" />
                                <span>{pet.location}</span>
                            </div>

                            {/* TECHNICAL PARAMETERS MATRIX DATA GRID */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/40 p-3.5 rounded-xl flex items-center gap-3">
                                    <Activity size={18} className="text-[#45acac]" />
                                    <div>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Breed / Type</p>
                                        <p className="text-sm text-slate-800 dark:text-slate-200 font-extrabold truncate">{pet.breed}</p>
                                    </div>
                                </div>

                                <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/40 p-3.5 rounded-xl flex items-center gap-3">
                                    <Calendar size={18} className="text-[#e2b86b]" />
                                    <div>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Age Parameter</p>
                                        <p className="text-sm text-slate-800 dark:text-slate-200 font-extrabold">{pet.age} {Number(pet.age) === 1 ? "Year" : "Years"}</p>
                                    </div>
                                </div>

                                <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/40 p-3.5 rounded-xl flex items-center gap-3">
                                    <User2 size={18} className="text-pink-400" />
                                    <div>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Gender Orientation</p>
                                        <p className="text-sm text-slate-800 dark:text-slate-200 font-extrabold">{pet.gender}</p>
                                    </div>
                                </div>

                                <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/40 p-3.5 rounded-xl flex items-center gap-3">
                                    <ShieldCheck size={18} className="text-emerald-400" />
                                    <div>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Medical Status</p>
                                        <p className="text-sm text-slate-800 dark:text-slate-200 font-extrabold truncate">{pet.healthStatus}</p>
                                    </div>
                                </div>
                            </div>

                            {/* BIO / DESCRIPTION STATEMENT PARAGRAPH BLOCK */}
                            <div className="mb-8">
                                <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2.5">
                                    About {pet.petName}
                                </h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed bg-slate-50/50 dark:bg-slate-900/20 border border-slate-100 dark:border-slate-800/20 p-4 rounded-xl">
                                    {pet.description}
                                </p>
                            </div>

                            {/* ADDITIONAL METADATA CHIPS FLAG ROW */}
                            <div className="flex flex-wrap gap-2.5 mb-8">
                                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-lg">
                                    🛡️ Health: <strong className="text-slate-800 dark:text-slate-200 ml-0.5">{pet.healthStatus}</strong>
                                </span>
                                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-lg">
                                    💉 Clinical: <strong className="text-slate-800 dark:text-slate-200 ml-0.5">{pet.vaccinationStatus}</strong>
                                </span>
                            </div>
                        </div>

                        {/* LOWER INTERACTIVE CALL TO ACTION CONTROL BUTTON */}
                        <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80">
                            <Button
                                size="lg"
                                className="w-full bg-[#e2b86b] text-white font-extrabold rounded-2xl shadow-xl transition-all hover:brightness-110 active:scale-[0.99] h-12 text-sm tracking-wide uppercase"
                            >
                                <Heart size={16} className="mr-2 fill-current" />
                                Initiate Adoption Process
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default PetDetails;