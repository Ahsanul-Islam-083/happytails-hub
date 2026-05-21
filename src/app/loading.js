"use client";

import React from "react";
import { motion } from "framer-motion";
import { LuPawPrint } from "react-icons/lu";

export default function Loading() {
    return (
        <div className="min-h-screen w-full bg-slate-50 dark:bg-[#0b0f19] flex flex-col items-center justify-center p-4 transition-colors duration-300">
            <div className="relative flex flex-col items-center">
                
                {/* Animated Paws Sequence */}
                <div className="flex items-center gap-4 mb-6">
                    {[0, 1, 2].map((index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0.2, scale: 0.8, y: 0 }}
                            animate={{ 
                                opacity: [0.2, 1, 0.2], 
                                scale: [0.8, 1.1, 0.8],
                                y: [0, -10, 0] 
                            }}
                            transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                delay: index * 0.2,
                                ease: "easeInOut"
                            }}
                            className={`${
                                index === 1 ? "text-[#e2b86b]" : "text-[#45acac]"
                            }`}
                        >
                            <LuPawPrint size={36} className="transform rotate-12" />
                        </motion.div>
                    ))}
                </div>

                {/* Loading Text */}
                <h3 className="text-xl font-black tracking-tight text-slate-800 dark:text-white mb-1">
                    Fetching Happy Tails...
                </h3>
                <p className="text-sm font-medium text-slate-400 dark:text-slate-500 animate-pulse">
                    Looking for furry friends nearby
                </p>
            </div>
        </div>
    );
}