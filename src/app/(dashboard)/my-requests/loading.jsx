"use client";

import React from "react";

// Individual Request Card Skeleton
const RequestCardSkeleton = () => {
  return (
    <div className="bg-white dark:bg-[#121C1E] border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-5 shadow-md relative overflow-hidden flex flex-col justify-between min-h-60 animate-pulse select-none">
      
      {/* Background Radial Light Effect Flare */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 dark:bg-slate-800/40 rounded-full blur-2xl pointer-events-none" />

      <div>
        {/* Profile Identity Row Placeholder */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            {/* Visual Monogram Square */}
            <div className="hidden w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-800/80 md:flex items-center justify-center shrink-0" />
            <div className="min-w-0 flex-1 space-y-2">
              <div className="h-2.5 w-20 bg-slate-200 dark:bg-slate-800 rounded-sm" />
              <div className="h-4 w-[45%] bg-slate-200 dark:bg-slate-800 rounded-md" />
            </div>
          </div>
          {/* Status Badge Tag Shape */}
          <div className="h-6 w-20 bg-slate-200 dark:bg-slate-800 rounded-md shrink-0" />
        </div>

        {/* Specification Parameter Container Box */}
        <div className="space-y-3 mb-5 bg-slate-50 dark:bg-slate-900/40 border border-slate-100/70 dark:border-slate-800/30 p-3 rounded-xl">
          <div className="flex items-center justify-between">
            <div className="h-3 w-24 bg-slate-200 dark:bg-slate-800 rounded-md" />
            <div className="h-3 w-16 bg-slate-200 dark:bg-slate-800 rounded-md" />
          </div>
          <div className="flex items-center justify-between">
            <div className="h-3 w-28 bg-slate-200 dark:bg-slate-800 rounded-md" />
            <div className="h-3 w-20 bg-slate-200 dark:bg-slate-800 rounded-md" />
          </div>
        </div>

        {/* Optional User Message Block */}
        <div className="h-9 w-full bg-slate-50 dark:bg-slate-900/40 border border-slate-100/70 dark:border-slate-800/30 rounded-xl" />
      </div>

      {/* Action Trigger Buttons Footer Grid */}
      <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-slate-100 dark:border-slate-800/50 w-full">
        <div className="h-9 bg-slate-200 dark:bg-slate-800 rounded-xl w-full" />
        <div className="h-9 bg-slate-200 dark:bg-slate-800 rounded-xl w-full" />
      </div>
    </div>
  );
};

// Main Routing State Export Wrapper
export default function MyRequestsLoading() {
  return (
    <div className="w-full">
      {/* Title Header Section Structure Placeholder */}
      <div className="my-4 border-b border-slate-200 dark:border-slate-800/80 pb-3.5 animate-pulse">
        <div className="h-9 w-52 bg-slate-200 dark:bg-slate-800 rounded-lg" />
      </div>

      {/* Stacked Vertical List Content Array Layout */}
      <div className="space-y-2">
        {[1, 2, 3].map((index) => (
          <RequestCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}