

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { MapPin, DollarSign, Eye, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FeaturedCard = ({ pet, idx }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: idx * 0.05 }}
      className="group bg-white dark:bg-[#121C1E] border border-slate-100 dark:border-slate-800/60 hover:border-slate-300 dark:hover:border-slate-700/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full text-slate-800 dark:text-slate-100"
    >
      {/* Card Thumbnail Area */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
        <Image
          src={pet.imageUrl}
          alt={pet.petName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Floating Meta Badges */}
        <div className="absolute top-3 left-3 z-10 flex gap-2">
          <span className="text-[11px] font-bold text-[#e2b86b] bg-white/80 dark:bg-[#e2b86b]/10 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-slate-200 dark:border-[#e2b86b]/20 shadow-sm">
            🐾 {pet.species}
          </span>
        </div>
        <div className="absolute top-3 right-3 z-10">
          <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-200 bg-emerald-50 dark:bg-emerald-500/10 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-500/20 tracking-wider uppercase shadow-sm">
            Available
          </span>
        </div>

        {/* DESKTOP HOVER OVERLAY: Hidden on mobile and tablet viewport layers (hidden md:flex) */}
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[6px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex flex-col items-center justify-center gap-3 p-4 z-20">
          <div className="flex flex-col gap-2.5 w-full max-w-50">
            {/* MATCHED: Your specific custom View Details button properties */}
           <Link href={`/all-pets/qq`}>
            <Button
              size="sm"
              variant="flat"
              className="w-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 rounded-xl border border-slate-700/60 transition-all shadow-md transform translate-y-3 group-hover:translate-y-0 duration-300 delay-[50ms] font-medium"
            >
              <Eye size={14} className="mr-1.5" />
              View Details
            </Button>
           </Link>
            {/* MATCHED: Your beautiful gold Adopt Now button properties */}
            <Button
              size="sm"
              className="w-full bg-[#e2b86b] text-white rounded-xl shadow-lg transition-all hover:brightness-110 transform translate-y-3 group-hover:translate-y-0 duration-300 delay-100"
            >
              <Heart size={14} className="mr-1.5 fill-current" />
              Adopt Now
            </Button>
          </div>
        </div>
      </div>

      {/* Information / Description Metadata Area Layout footer */}
      <div className="p-5 flex flex-col flex-1 justify-between text-left">
        <div>
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-[#45acac] transition-colors duration-200">
            {pet.petName}
          </h3>

          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
            {pet.breed} • {pet.age} {pet.age === 1 ? "year" : "years"} old • {pet.gender}
          </p>
        </div>

        {/* Lower metadata summary metrics line (Location & Fee) */}
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2 text-slate-500 dark:text-slate-400 text-xs font-semibold">
          <div className="flex items-center gap-1 min-w-0">
            <MapPin size={14} className="text-[#45acac] shrink-0" />
            <span className="truncate">{pet.location}</span>
          </div>

          <div className="flex items-center text-[#e2b86b] dark:text-[#45acac] shrink-0 font-bold bg-[#45acac]/10 dark:bg-[#e2b86b]/5 px-2.5 py-1 rounded-lg border border-pink-100 dark:border-pink-500/10">
            <DollarSign size={13} className="-mr-0.5" />
            <span>{pet.adoptionFee === 0 ? "Free Adoption" : `${pet.adoptionFee} Fee`}</span>
          </div>
        </div>

        {/* MOBILE & TABLET LAYOUT BUTTONS: Using your exact styling updates for consistent smaller screen display */}
        <div className="mt-5 flex gap-3 w-full md:hidden">
            <Link href={`/all-pets/qq`} className="flex-1">
              <Button
                size="sm"
                variant="flat"
                className="w-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 rounded-xl border border-slate-700/60 shadow-md h-10 font-medium"
              >
                <Eye size={14} className="mr-1.5" />
                Details
              </Button>
            </Link>
          <Button
            size="sm"
            variant="flat"
            className="flex-1 bg-slate-800/80 hover:bg-slate-700 text-slate-200 rounded-xl border border-slate-700/60 shadow-md h-10 font-medium"
          >
            <Eye size={14} className="mr-1.5" />
            Details
          </Button>
          <Button
            size="sm"
            className="flex-1 bg-[#e2b86b] text-white rounded-xl shadow-lg h-10"
          >
            <Heart size={14} className="mr-1.5 fill-current" />
            Adopt
          </Button>
        </div>

      </div>
    </motion.div>
  );
};

export default FeaturedCard;