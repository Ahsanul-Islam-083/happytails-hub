
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Eye, DollarSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DeleteAlert from "./DeleteAlert";
import EditModal from "./EditModal";
import ListingModal from "./ListingModal";

const ListingPetCard = ({ pet, idx, user, token }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            className="group bg-white dark:bg-[#162224] border border-slate-100 dark:border-slate-800/60 hover:border-slate-300 dark:hover:border-slate-700/50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row h-auto min-h-44 text-slate-800 dark:text-slate-100 w-full"
        >
            
            <div className="relative aspect-video md:aspect-square w-full md:w-44 shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-900">
                <Image
                    src={pet?.imageUrl || "https://img.freepik.com/free-photo/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.jpg?semt=ais_hybrid&w=740&q=80"}
                    alt={pet?.petName || "Pet Image"}
                    fill
                    priority={idx < 4}
                    sizes="(max-width: 768px) 100vw, 176px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

             
                <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-200 bg-emerald-50 dark:bg-emerald-500/10 backdrop-blur-md px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-500/20 tracking-wider uppercase shadow-sm">
                        {pet?.status || "Available"}
                    </span>
                </div>
            </div>

            
            <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 min-w-0 text-left gap-4">
                
             
                <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-[#45acac] transition-colors duration-200 truncate">
                            {pet?.petName}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-1 truncate">
                            🐾 {pet?.species} • {pet?.breed} • {pet?.age} {pet?.age === 1 ? "year" : "years"} old
                        </p>
                    </div>

                 
                    <div className="flex items-center text-[#e2b86b] dark:text-[#45acac] shrink-0 bg-[#45acac]/10 dark:bg-[#e2b86b]/5 px-2.5 py-1 rounded-xl border border-slate-100 dark:border-slate-800/40 text-sm font-bold">
                        <DollarSign size={14} className="-mr-0.5" />
                        <span>{pet?.adoptionFee === 0 ? "Free" : pet?.adoptionFee}</span>
                    </div>
                </div>

               
                <div className="pt-3 md:pt-2 border-t md:border-0 border-slate-100 dark:border-slate-800/60 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 w-full">

                 
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      
                        <Link href={`/all-pets/${pet?._id}`} className="flex-1 sm:flex-initial sm:min-w-24">
                            <Button
                                size="sm"
                                variant="flat"
                                className="w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl h-9 font-semibold"
                            >
                                <Eye size={14} className="mr-1.5" />
                                View
                            </Button>
                        </Link>

                        
                        <div className="flex-1 sm:flex-initial">
                            <ListingModal pet={pet} token={token} />
                        </div>
                    </div>

                  
                    <div className="flex items-center justify-start lg:justify-end gap-2 pt-2 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800/60 lg:pl-3.5 shrink-0">
                        <EditModal pet={pet} user={user} />
                        <DeleteAlert />
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default ListingPetCard;