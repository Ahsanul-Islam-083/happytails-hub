// 

"use client";

import React from "react";
import Link from "next/link";
import { Calendar, Clock, Eye, Trash2, ShieldQuestion, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@heroui/react";
import CancelAdoption from "./CancelAdoption";

const AdoptionRequestCard = ({ request, token, id }) => {

    // 1. Setup default state configurations for "Pending"
    let statusText = "Pending";
    let statusBg = "bg-[#e2b86b]/10 dark:bg-[#e2b86b]/20 border-[#e2b86b]/30";
    let statusTextStyle = "text-[#d4a343] dark:text-[#e2b86b]";
    let statusIcon = <Clock size={12} className="animate-spin animation-duration-[3s]" />;

    const normalizedStatus = request?.status?.toLowerCase();

    // 2. Fallback evaluations using standard if/else structural blocks
    if (normalizedStatus === "approved") {
        statusText = "Approved";
        statusBg = "bg-emerald-500/10 dark:bg-emerald-500/20 border-emerald-500/30";
        statusTextStyle = "text-emerald-600 dark:text-emerald-400";
        statusIcon = <CheckCircle2 size={12} className="fill-current" />;
    } else if (normalizedStatus === "rejected") {
        statusText = "Rejected";
        statusBg = "bg-rose-500/10 dark:bg-rose-500/20 border-rose-500/30";
        statusTextStyle = "text-rose-600 dark:text-rose-400";
        statusIcon = <XCircle size={12} className="fill-current" />;
    }

    // 3. Date string converter formatter utility
    const formatDate = (dateString) => {
        if (!dateString) return "Not Scheduled";
        return new Date(dateString).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
        });
    };

    // Extract the first initial for the visual avatar token placeholder
    const petInitial = request?.petName ? request.petName.charAt(0).toUpperCase() : "🐾";

    return (
        <div className="bg-white dark:bg-[#121C1E] border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group text-left flex flex-col justify-between min-h-60">

            {/* Corner Abstract Background Flare Layout */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#45acac]/5 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

            <div>
                {/* Top Profile Summary Header Panel */}
                <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3 min-w-0">
                        {/* Dynamic Monogram Initial Avatar Component */}
                        <div className="hidden w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 text-[#45acac] font-black md:flex items-center justify-center shrink-0 shadow-sm text-sm">
                            {petInitial}
                        </div>
                        <div className="min-w-0">
                            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-0.5">
                                Adoption Target
                            </span>
                            <h4 className="text-lg font-black tracking-tight text-slate-800 dark:text-white truncate">
                                {request?.petName || "Unknown Pet"}
                            </h4>
                        </div>
                    </div>

                    {/* Status Badge Controlled Component */}
                    <span className={`flex items-center gap-1 text-[10px] font-extrabold tracking-wider px-2.5 py-1 rounded-md border ${statusBg} ${statusTextStyle} uppercase shrink-0`}>
                        {statusIcon}
                        <span>{statusText}</span>
                    </span>
                </div>

                {/* Core Data Parameter Specification Grid */}
                <div className="space-y-2.5 mb-5 bg-slate-50/50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800/40 p-3 rounded-xl">
                    {/* Data Row 1: Request Date Submission Parameter */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                        <ShieldQuestion size={14} className="text-slate-400 shrink-0" />
                        <span>Applied On:</span>
                        <span className="text-slate-700 dark:text-slate-200 ml-auto font-bold">
                            {formatDate(request?.requestDate)}
                        </span>
                    </div>

                    {/* Data Row 2: Target Expected Pickup Schedule Date */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                        <Calendar size={14} className="text-[#45acac] shrink-0" />
                        <span>Proposed Pickup:</span>
                        <span className="text-slate-700 dark:text-slate-200 ml-auto font-bold">
                            {formatDate(request?.pickupDate)}
                        </span>
                    </div>
                </div>

                {/* Mini Message Inline Text Block Preview */}
                {request?.message && (
                    <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium italic line-clamp-1 mb-5 px-1 bg-slate-50/50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800/40 p-3 rounded-xl">
                        &ldquo;{request.message}&rdquo;
                    </p>
                )}
            </div>


            {/* Bottom Action Footer Panel Grid Wrapper */}
            <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-slate-100 dark:border-slate-800/50 w-full">


                <Link href={`/all-pets/${request?.petId}`} className="w-full">
                    <Button
                        size="sm"
                        className="w-full bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/50 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-bold rounded-xl text-xs gap-1.5 h-9 transition-colors"
                    >
                        <Eye size={13} />
                        View Pet
                    </Button>
                </Link>

                {/* Conditional Cancel Logic */}
                {normalizedStatus === "approved" ? (
                    <Button
                        disabled
                        size="sm"
                        className="w-full bg-slate-100 dark:bg-slate-900/40 text-slate-400 dark:text-[#45acac] border border-slate-200/20 dark:border-slate-700/20 font-bold rounded-xl text-xs h-9 cursor-not-allowed"
                    >
                        Already Approved
                    </Button>
                ) : (
                    <CancelAdoption id={id} token={token} />
                )}
            </div>
        </div>
    );
};

export default AdoptionRequestCard;