const AllPetsSkeleton = () => {
  return (
    <section className="bg-white dark:bg-[#0b1213] py-16 px-4 md:px-8 lg:px-12 w-full">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-44 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
          <div className="h-4 w-80 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
        </div>

        {/* Search + filter bar */}
        <div className="flex gap-3">
          <div className="h-10 flex-1 bg-slate-100 dark:bg-slate-800 rounded-xl animate-pulse" />
          <div className="h-10 w-32 bg-slate-100 dark:bg-slate-800 rounded-xl animate-pulse" />
        </div>

        {/* Pet cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/30">
              <div className="h-52 bg-slate-200 dark:bg-slate-800 animate-pulse" />
              <div className="p-4 flex flex-col gap-3">
                <div className="h-5 w-3/5 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
                <div className="h-3 w-2/5 bg-slate-100 dark:bg-slate-800 rounded animate-pulse" />
                <div className="flex gap-2">
                  <div className="h-6 w-16 rounded-full bg-slate-100 dark:bg-slate-800 animate-pulse" />
                  <div className="h-6 w-14 rounded-full bg-slate-100 dark:bg-slate-800 animate-pulse" />
                </div>
                <div className="h-9 w-full rounded-xl bg-slate-100 dark:bg-slate-800 animate-pulse mt-1" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AllPetsSkeleton;