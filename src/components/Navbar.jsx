
"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, X, User, LogOut, LayoutDashboard, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { Button, Avatar } from "@heroui/react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { signOut, useSession } from "@/lib/auth-client";

export const Navbar = () => {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    const { setTheme, resolvedTheme } = useTheme();

    const { data: session } = useSession();
    const user = session?.user;
//  console.log(user);
 
      const handleSignout = async () => {
        await signOut();
        router.push('/')
    }

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "All Pets", href: "/all-pets" },
        { name: "My Requests", href: "/my-requests" },
        { name: "Add Pet", href: "/add-pet" },
    ];

    return (
        <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled
            ? "bg-white/80 dark:bg-[#121C1E]/90 backdrop-blur-md shadow-sm border-b border-slate-200/10"
            : "bg-orange-50/20 dark:bg-transparent"
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

               
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="p-2 bg-[#45acac]/10 rounded-full group-hover:rotate-12 transition-transform">
                                <Avatar className="h-8 w-8">
                                    <Avatar.Image className="bg-white" alt="Happy Tails Logo" src="/mainLogo.png" />
                                    <Avatar.Fallback className="bg-[#45acac] text-white">HT</Avatar.Fallback>
                                </Avatar>
                            </div>
                            <span className="font-extrabold text-2xl tracking-tight">
                                <span className="text-[#45acac]">Happy</span>
                                <span className="text-[#e2b86b]">Tails</span>
                            </span>
                        </Link>
                    </div>

                  
                    <div className="hidden md:flex gap-8 items-center">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`relative font-medium transition-colors hover:text-[#45acac] ${isActive
                                        ? "text-[#45acac] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-[#e2b86b] after:rounded-full"
                                        : "text-slate-600 dark:text-slate-300"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                   
                    <div className="hidden md:flex items-center gap-4">
                       
                        {mounted && (
                            <Button
                                isIconOnly
                                variant="light"
                                className="rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                                onPress={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                            >
                                {resolvedTheme === "dark" ? <Sun className="w-5 h-5 text-[#e2b86b]" /> : <Moon className="w-5 h-5" />}
                            </Button>
                        )}

                        {!user ? (
                            <div className="flex gap-4">
                                <Link href="/login">
                                    <Button variant="light" className="font-medium text-[#45acac]">Login</Button>
                                </Link>
                                <Link href="/register">
                                    <Button className="bg-[#45acac] text-white font-medium rounded-full px-6 hover:bg-[#368d8d]">
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                            <div className="relative group">
                                <button className="flex items-center gap-3 p-1 rounded-full hover:bg-[#45acac]/10 transition-colors border border-transparent hover:border-[#45acac]/20">
                                    <Avatar>
                                        <Avatar.Image referrerPolicy='no-referrer' alt={user?.name} src={user?.image} />
                                        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                                    </Avatar>
                                    <div className="text-left hidden lg:block pr-2">
                                        <p className="text-sm font-bold truncate max-w-25 text-slate-800 dark:text-slate-100">{user?.name.split(' ')[0]}</p>
                                    </div>
                                </button>

                                <div className="absolute right-0 top-12 w-56 bg-white dark:bg-[#121C1E] border border-slate-100 dark:border-slate-800 rounded-2xl shadow-xl hidden group-hover:flex flex-col py-2 z-50 transition-all">
                                    <div className="px-4 py-3 border-b border-slate-50 dark:border-slate-800">
                                        <p className="font-bold text-sm text-slate-800 dark:text-slate-100">Welcome back!</p>
                                        <p className="text-xs truncate text-slate-500 dark:text-slate-400">{user?.email}</p>
                                    </div>
                                    <Link href="/add-pet" className="px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-[#45acac]/10 hover:text-[#45acac] flex items-center gap-3 transition-colors">
                                        <LayoutDashboard className="w-4 h-4" /> Dashboard
                                    </Link>
                                    <button
                                        onClick={handleSignout}
                                     className="px-4 py-2 w-full text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 flex items-center gap-3 transition-colors text-left mt-1 border-t border-slate-50 dark:border-slate-800">
                                        <LogOut className="w-4 h-4" /> Log Out
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    
                    <div className="md:hidden flex items-center gap-2">
                        {mounted && (
                            <Button
                                isIconOnly
                                variant="light"
                                className="rounded-full"
                                onPress={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                            >
                                {resolvedTheme === "dark" ? <Sun className="w-5 h-5 text-[#e2b86b]" /> : <Moon className="w-5 h-5" />}
                            </Button>
                        )}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-[#45acac]/10 hover:text-[#45acac] transition-colors"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden px-4 pt-2 pb-6 space-y-2 bg-white dark:bg-[#121C1E] border-b border-slate-100 dark:border-slate-800 shadow-lg"
                    >
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block px-4 py-3 text-base font-medium rounded-xl transition-colors ${isActive
                                        ? "bg-[#45acac]/10 text-[#45acac]"
                                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}

                        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-4">
                            {!user ? (
                                <div className="grid grid-cols-2 gap-4 px-2">
                                    <Link href="/login" className="w-full">
                                        <Button variant="bordered" className="w-full rounded-xl border-[#45acac] text-[#45acac]">Login</Button>
                                    </Link>
                                    <Link href="/register" className="w-full">
                                        <Button className="w-full rounded-xl bg-[#45acac] text-white">Join Free</Button>
                                    </Link>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center gap-3 pt-2">
                                    <Avatar>
                                        <Avatar.Image referrerPolicy='no-referrer' alt={user?.name} src={user?.image} />
                                        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                                    </Avatar>
                                    <div className="text-center">
                                        <p className="text-sm font-bold text-slate-900 dark:text-slate-100">{user?.name}</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">{user?.email}</p>
                                    </div>
                                    <Link href="/add-pet" className="w-full px-4 py-2 border text-sm text-slate-700 dark:text-slate-300 hover:bg-[#45acac]/10 hover:text-[#45acac] flex justify-center rounded-xl items-center gap-3 transition-colors">
                                        <LayoutDashboard className="w-4 h-4" /> Dashboard
                                    </Link>
                                    <button
                                     onClick={handleSignout}
                                     className="w-full flex justify-center items-center px-4 py-2 gap-0.5 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 text-center border border-red-100 dark:border-red-900/30 rounded-xl transition-colors">
                                        <LogOut className="w-4 h-4" />
                                        Log Out
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};