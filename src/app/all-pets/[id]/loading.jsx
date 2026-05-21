const PetDetailsSkeleton = () => {
  return (
    <main className="min-h-screen bg-[#f1f5f9] dark:bg-[#0b0f19] py-8 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Back button */}
        <div className="h-5 w-32 bg-slate-200 dark:bg-slate-800 rounded-md animate-pulse mb-6" />

        <div className="flex flex-col gap-6 w-full">

          {/* Banner image */}
          <div className="w-full h-65 sm:h-85 md:h-105 rounded-3xl bg-slate-200 dark:bg-slate-800 animate-pulse" />

          {/* Two-column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Left: Pet info */}
            <div className="bg-white dark:bg-[#121C1E] border border-slate-200/60 dark:border-slate-800/60 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col gap-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <div className="h-5 w-28 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
                  <div className="h-8 w-44 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
                </div>
                <div className="h-9 w-20 bg-slate-200 dark:bg-slate-700 rounded-xl animate-pulse" />
              </div>

              <div className="h-4 w-28 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-16 bg-slate-100 dark:bg-slate-900/40 rounded-xl animate-pulse" />
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <div className="h-3 w-20 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
                <div className="h-24 bg-slate-100 dark:bg-slate-900/40 rounded-xl animate-pulse" />
              </div>

              <div className="flex gap-2">
                <div className="h-7 w-32 bg-slate-100 dark:bg-slate-900 rounded-lg animate-pulse" />
                <div className="h-7 w-36 bg-slate-100 dark:bg-slate-900 rounded-lg animate-pulse" />
              </div>
            </div>

            {/* Right: Action panel */}
            <div className="bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-3xl p-8 shadow-xl flex flex-col items-center justify-center gap-5 min-h-[300px]">
              <div className="h-16 w-16 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse" />
              <div className="h-6 w-48 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
              <div className="flex flex-col gap-2 items-center w-full">
                <div className="h-3 w-4/5 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
                <div className="h-3 w-3/5 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
              </div>
              <div className="flex gap-3 mt-2">
                <div className="h-10 w-28 rounded-xl bg-slate-200 dark:bg-slate-700 animate-pulse" />
                <div className="h-10 w-28 rounded-xl bg-slate-200 dark:bg-slate-700 animate-pulse" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default PetDetailsSkeleton;