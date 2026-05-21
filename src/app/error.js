"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { AlertCircle, RefreshCw, Home } from "lucide-react";

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an analytics or error tracking service if needed
        console.error("HappyTails Runtime Error Captured:", error);
    }, [error]);

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#0b0f19] flex items-center justify-center px-4 py-12 transition-colors duration-300 text-center">
            <div className="max-w-md w-full flex flex-col items-center">
                
                {/* Error Graphic Frame */}
                <div className="relative mb-8 w-full flex justify-center">
                    <div className="absolute inset-0 bg-rose-500/5 dark:bg-rose-500/10 rounded-full blur-3xl scale-75 pointer-events-none" />
                    
                    <div className="relative bg-white dark:bg-[#121C1E] border border-slate-200/60 dark:border-slate-800/60 shadow-xl rounded-full w-44 h-44 flex items-center justify-center">
                        <div className="relative flex flex-col items-center text-rose-500">
                            <AlertCircle size={52} className="animate-pulse" />
                            <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 dark:text-slate-500 mt-2">
                                System Snag
                            </span>
                        </div>
                    </div>
                </div>

                {/* Friendly Context Message */}
                <div>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
                        Oops, Something Tangled!
                    </h1>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed mb-8">
                        Our digital leashes got a bit tangled up. An unexpected hiccup occurred, but we can try untangling it right away!
                    </p>
                </div>

                {/* Action Triggers */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
                    
                    {/* Primary Trigger: Attempt Re-render Segment */}
                    <Button
                        onClick={() => reset()}
                        className="flex-1 bg-[#45acac] hover:bg-[#3d9898] text-white font-bold rounded-xl h-11 text-sm shadow-md transition-all flex items-center justify-center gap-2"
                    >
                        <RefreshCw size={16} />
                        Try Again
                    </Button>

                    {/* Secondary Trigger: Safe Escape Home Route */}
                    <Link href="/" className="flex-1">
                        <Button
                            variant="flat"
                            className="w-full bg-slate-200/60 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-xl h-11 text-sm transition-all flex items-center justify-center gap-2"
                        >
                            <Home size={16} />
                            Go to Home
                        </Button>
                    </Link>
                </div>

            </div>
        </main>
    );
}