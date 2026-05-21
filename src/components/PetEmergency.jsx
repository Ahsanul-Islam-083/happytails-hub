"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Separator } from "@heroui/react";
import { AlertCircle } from "lucide-react"; // Matching your icon set

const emergencyCards = [
  {
    id: 1,
    title: "Report a stray dog",
    subtitle: "call us @",
    actionText: "022 335 3334 (toll free)",
    image: "/emr1.jpg",
  },
  {
    id: 2,
    title: "Want to join us?",
    subtitle: "call us @",
    actionText: "petcare@team.com",
    image: "/emr2.jpg",
  },
  {
    id: 3,
    title: "Report animal harassment",
    subtitle: "24x7",
    actionText: "Emergency Care",
    image: "/emr3.jpg",
  },
];

const PetEmergency = () => {
  return (
    <section className="py-24 bg-[#f8f3e9] dark:bg-[#162224] transition-colors relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
       
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400 block mb-2">
            — Get Involved —
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-[#45acac]">
            Emergency & Support
          </h2>
          <div className="flex items-center gap-4 w-full max-w-xs justify-center mt-3">
            <Separator className="dark:bg-slate-700 bg-slate-300" />
            <AlertCircle className="text-[#e2b86b] w-5 h-5 animate-pulse" />
            <Separator className="dark:bg-slate-700 bg-slate-300" />
          </div>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {emergencyCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md group cursor-pointer"
            >
              
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover brightness-95 transition-transform duration-500 group-hover:scale-105"
              />

            
              <div className="absolute inset-0 bg-black/30 dark:bg-black/40 z-10 transition-colors" />

              
              <div className="absolute inset-0 bg-black/40 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

             
              <div className="absolute inset-4 border border-white/0 rounded-xl pointer-events-none transition-all duration-300 group-hover:border-white/70 scale-95 group-hover:scale-100 z-30" />

            
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white z-40 select-none">
                <h3 className="text-xl sm:text-2xl font-bold tracking-wide mb-3 drop-shadow-sm font-sans">
                  {card.title}
                </h3>
                
                <p className="text-xs italic text-slate-200/90 font-medium tracking-wide">
                  {card.subtitle}
                </p>
                
                <p className="text-sm sm:text-base font-semibold text-[#ffeac2] dark:text-[#e2b86b] mt-1 tracking-normal drop-shadow-sm">
                  {card.actionText}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PetEmergency;