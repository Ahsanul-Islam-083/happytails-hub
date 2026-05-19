"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClipboardList, PlusCircle, Heart, LogOut } from "lucide-react";

const links = [
    { href: "/my-requests", label: "My Requests", icon: ClipboardList },
    { href: "/add-pet", label: "Add Pet", icon: PlusCircle },
    { href: "/my-listings", label: "My Listings", icon: Heart },
];

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="fixed top-0 left-0 h-screen w-[200px] bg-[#13151f] flex flex-col px-3 py-6">
            <p className="text-xs text-slate-500 font-bold mb-4 px-2">MENU</p>

            <nav className="flex flex-col gap-1 flex-1">
                {links.map(({ href, label, icon: Icon }) => {
                    const active = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all ${active
                                    ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/30"
                                    : "text-slate-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <Icon className="w-4 h-4" />
                            {label}
                        </Link>
                    );
                })}
            </nav>

            {/* Logout at bottom */}
            <button className="flex items-center gap-3 px-3 py-2.5 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-all">
                <LogOut className="w-4 h-4" /> Logout
            </button>
        </aside>
    );
};

export default Sidebar;