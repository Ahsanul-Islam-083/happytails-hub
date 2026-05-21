"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, Filter, X } from "lucide-react";

const SearchFilterBar = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Auto-fill state from URL if they already searched
    const [search, setSearch] = useState(searchParams.get("search") || "");
    const [category, setCategory] = useState(searchParams.get("category") || "");

    const handleSearch = (e) => {
        e.preventDefault();
        updateURL(search, category);
    };

    const handleCategoryChange = (e) => {
        const newCategory = e.target.value;
        setCategory(newCategory);
        updateURL(search, newCategory);
    };

    const clearFilters = () => {
        setSearch("");
        setCategory("");
        router.push("/all-pets");
    };

    const updateURL = (searchTerm, categoryTerm) => {
        const params = new URLSearchParams();
        if (searchTerm) params.set("search", searchTerm);
        if (categoryTerm) params.set("category", categoryTerm);
        
        // Pushes to URL which forces the Server Component to re-fetch!
        router.push(`/all-pets?${params.toString()}`);
    };

    return (
        <div className="w-full max-w-4xl mx-auto mb-12 bg-white dark:bg-[#121c1e] p-4 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
                
                {/* Search Input */}
                <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search pets by name..."
                        className="w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-[#0b1213] border border-slate-200 dark:border-slate-800 rounded-2xl text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#45acac]/50 focus:border-[#45acac] transition-all"
                    />
                </div>

                {/* Category Filter Dropdown */}
                <div className="relative md:w-64">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Filter className="h-5 w-5 text-slate-400" />
                    </div>
                    <select
                        value={category}
                        onChange={handleCategoryChange}
                        className="w-full pl-11 pr-10 py-3.5 bg-slate-50 dark:bg-[#0b1213] border border-slate-200 dark:border-slate-800 rounded-2xl text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#45acac]/50 focus:border-[#45acac] appearance-none cursor-pointer transition-all"
                    >
                        <option value="">All Categories</option>
                        <option value="Dog">Dogs</option>
                        <option value="Cat">Cats</option>
                        <option value="Rabbit">Rabbits</option>
                        <option value="Bird">Birds</option>
                    </select>
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                    <button
                        type="submit"
                        className="flex-1 md:flex-none px-8 py-3.5 bg-[#45acac] hover:bg-[#3ba0a0] text-white font-bold rounded-2xl shadow-md shadow-[#45acac]/20 transition-all active:scale-95"
                    >
                        Search
                    </button>
                    {(search || category) && (
                        <button
                            type="button"
                            onClick={clearFilters}
                            className="px-4 py-3.5 bg-rose-100 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-2xl hover:bg-rose-200 dark:hover:bg-rose-500/20 transition-all active:scale-95"
                            title="Clear Filters"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default SearchFilterBar;
