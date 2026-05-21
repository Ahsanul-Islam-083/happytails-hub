const MyListingsSkeleton = () => {
  return (
    <div className="flex flex-col gap-8">

      {/* Heading */}
      <div className="border-b border-slate-200 dark:border-slate-800/80 pb-4">
        <div className="h-9 w-48 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
      </div>

      {/* Stats row */}
      <div className="flex flex-col md:flex-row gap-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex-1 border border-[#e2b86b]/30 rounded-2xl py-8 flex flex-col items-center gap-3 animate-pulse">
            <div className="h-7 w-10 bg-slate-200 dark:bg-slate-700 rounded" />
            <div className="h-4 w-24 bg-slate-100 dark:bg-slate-800 rounded" />
          </div>
        ))}
      </div>

      {/* Listing cards */}
      <div className="flex flex-col gap-5">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-4 bg-white dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800 rounded-2xl p-4">
            <div className="w-20 h-20 rounded-xl bg-slate-200 dark:bg-slate-700 animate-pulse shrink-0" />
            <div className="flex-1 flex flex-col gap-2">
              <div className="h-4 w-2/5 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
              <div className="h-3 w-1/4 bg-slate-100 dark:bg-slate-800 rounded animate-pulse" />
              <div className="flex gap-2">
                <div className="h-5 w-16 rounded-full bg-slate-100 dark:bg-slate-800 animate-pulse" />
                <div className="h-5 w-14 rounded-full bg-slate-100 dark:bg-slate-800 animate-pulse" />
              </div>
            </div>
            <div className="flex gap-2 shrink-0">
              <div className="h-9 w-20 rounded-xl bg-slate-100 dark:bg-slate-800 animate-pulse" />
              <div className="h-9 w-20 rounded-xl bg-slate-100 dark:bg-slate-800 animate-pulse" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default MyListingsSkeleton;