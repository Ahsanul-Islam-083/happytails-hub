

"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative w-full min-h-[60vh] flex items-center overflow-hidden bg-[#121C1E]">
            
            <Image 
                src="/hero.gif"
                alt="Happy Tails Hero Background"
                fill
                priority
                unoptimized 
                className="object-cover z-0"
            />

            
            <div className="absolute inset-0 bg-black/50 z-10" />

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-xl text-left"
                >
                    <h1 className="font-extrabold text-5xl md:text-7xl leading-tight text-white mb-6 antialiased">
                        Welcome to<br/>
                        <span className="text-[#45acac]">Happy</span><span className="text-[#e2b86b]">Tails</span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-slate-100 mb-10 max-w-lg leading-relaxed antialiased">
                        Every pet deserves a loving family. Join us today to browse available animals and find your new best friend.
                    </p>

                    <Link href="/all-pets">
                        <Button 
                            className="bg-[#45acac] hover:bg-[#368d8d] text-white font-semibold text-lg rounded-full px-12 py-7 shadow-lg shadow-[#45acac]/30 transition-all hover:scale-105"
                        >
                            Adopt Now
                        </Button>
                    </Link>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;