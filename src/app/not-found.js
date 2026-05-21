"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Home, Compass } from "lucide-react";
import { LuPawPrint } from "react-icons/lu";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#0b0f19] flex items-center justify-center px-4 py-12 transition-colors duration-300 text-center">
            <div className="max-w-md w-full flex flex-col items-center">
                
                {/* Visual Graphic Representation Frame */}
                <div className="relative mb-8 w-full flex justify-center">
                    {/* Background Soft Glow Circles */}
                    <div className="absolute inset-0 bg-[#45acac]/5 dark:bg-[#45acac]/10 rounded-full blur-3xl scale-75 pointer-events-none" />
                    
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="relative bg-white dark:bg-[#121C1E] border border-slate-200/60 dark:border-slate-800/60 shadow-xl rounded-full w-48 h-48 flex items-center justify-center setup-illustration-box"
                    >
                        {/* 404 text backdrop overlay */}
                        <span className="absolute text-7xl font-black select-none text-slate-100 dark:text-slate-900/60 z-0 tracking-tighter">
                            404
                        </span>
                        
                        {/* Center Visual Callout Mascot Icon */}
                        <div className="relative z-10 flex flex-col items-center text-[#e2b86b]">
                            <LuPawPrint size={56} className="transform -rotate-12 animate-bounce" />
                            <span className="text-[10px] uppercase font-black tracking-widest text-[#45acac] mt-2">
                                Lost Track!
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* Friendly Context Identity Message Container */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                >
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
                        Awn, Leaf Empty Handed!
                    </h1>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed mb-8">
                        It looks like this path wandered out of the play yard. The listing might have changed locations, or been adopted into a forever home already!
                    </p>
                </motion.div>

                {/* Interactive Action Navigation Triggers */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.4 }}
                    className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full"
                >
                    {/* Primary Escaping Target Root URL Link */}
                    <Link href="/" className="flex-1">
                        <Button
                            className="w-full bg-[#45acac] hover:bg-[#3d9898] text-white font-bold rounded-xl h-11 text-sm shadow-md transition-all flex items-center justify-center gap-2"
                        >
                            <Home size={16} />
                            Back to Home
                        </Button>
                    </Link>

                    {/* Secondary Discover Link Target URL */}
                    <Link href="/all-pets" className="flex-1">
                        <Button
                            variant="flat"
                            className="w-full bg-slate-200/60 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-xl h-11 text-sm transition-all flex items-center justify-center gap-2"
                        >
                            <Compass size={16} />
                            Explore Pets
                        </Button>
                    </Link>
                </motion.div>

            </div>
        </main>
    );
}