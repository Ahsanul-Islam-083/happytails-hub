// "use client";

// import { useState, useEffect } from "react";

// import { Menu, X, User, LogOut, LayoutDashboard } from "lucide-react";
// import Link from "next/link";
// import { Button, Avatar } from "@heroui/react";
// import Image from "next/image";

// export const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);
//     useEffect(() => {
//         const handleScroll = () => setScrolled(window.scrollY > 10);
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return (
//         <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-orange-50/70 backdrop-blur-md shadow-sm py-2" : "bg-orange-50/20 py-4"
//             }`}>
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between h-16 items-center">
//                     <div className="flex items-center">
//                         <Link href="/" className="flex items-center gap-2 group">
//                             <div className="p-2 bg-orange-100/20 rounded-full group-hover:rotate-12 transition-transform">

//                                 <Avatar>
//                                     <Avatar.Image alt="John Doe" src='/mainLogo.png' />
//                                     <Avatar.Fallback>HT</Avatar.Fallback>
//                                 </Avatar>
//                             </div>
//                             <span className="font-extrabold text-2xl tracking-tight text-slate-900">
//                                 <span className="text-teal-700/70">Happy</span>
//                                 <span className="text-yellow-600/60">Tails</span>
//                             </span>
//                         </Link>
//                     </div>

//                     <div className="hidden md:flex gap-8 items-center">
//                         <Link href="/" className="font-medium text-slate-700 hover:text-teal-700/70 transition-colors">Home</Link>
//                         <Link href="/all-pets" className="font-medium text-slate-700 hover:text-teal-700/70 transition-colors">All Pets</Link>
//                     </div>

//                     <div className="hidden md:flex items-center gap-4">

//                         {/* {
//                             !isPending && !session ? <>
//                                 <Link href="/login" className="font-medium text-slate-700 hover:text-blue-600 transition-colors">Login</Link>
//                                 <Link href="/register">

//                                     <Button color="primary" className="font-bold rounded-full px-8 shadow-lg shadow-blue-600/20">
//                                         Join Free
//                                     </Button>
//                                 </Link>
//                             </> : <div className="relative group">
//                                 <button className="flex items-center gap-3 p-1 rounded-full hover:bg-muted transition-colors border border-transparent hover:border-border">
//                                     <Image
//                                         alt="user"
//                                         width={40}
//                                         height={40}
//                                         src={user?.image || "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"}
//                                         className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-600/10"
//                                     />
//                                     <div className="text-left hidden lg:block">
//                                         <p className="text-sm font-bold truncate max-w-25">{user?.name || 'User'}</p>
//                                         <p className="text-[10px] text-slate-500">Student</p>
//                                     </div>
//                                 </button>
//                                 <div className="absolute right-0 top-12 w-56 bg-white border border-slate-200 rounded-2xl shadow-2xl hidden group-hover:flex flex-col py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
//                                     <div className="px-4 py-3 border-b border-slate-100">
//                                         <p className="font-bold text-sm">Welcome back!</p>
//                                         <p className="text-xs truncate text-slate-500">{user?.email}</p>
//                                     </div>
//                                     <Link href="/dashboard" className="px-4 py-2 text-sm hover:bg-muted flex items-center gap-3 transition-colors">
//                                         <LayoutDashboard className="w-4 h-4" /> Dashboard
//                                     </Link>
//                                     <Link href="/settings" className="px-4 py-2 text-sm hover:bg-muted flex items-center gap-3 transition-colors">
//                                         <User className="w-4 h-4" /> Settings
//                                     </Link>


//                                     <button onClick={handleLogout}
//                                         className="px-4 py-2 text-sm text-red-500 hover:bg-red-50 flex items-center gap-3 transition-colors text-left">
//                                         <LogOut className="w-4 h-4" /> Log Out
//                                     </button>
//                                 </div>
//                             </div>
//                         } */}

//                         <div className="relative group">
//                             <button className="flex items-center gap-3 p-1 rounded-full hover:bg-yellow-50 transition-colors border border-transparent hover:border-border">
//                                 <Image
//                                     alt="user"
//                                     width={40}
//                                     height={40}
//                                     src={ "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"}
//                                     className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-600/10"
//                                 />
//                                 <div className="text-left hidden lg:block">
//                                     <p className="text-sm font-bold truncate max-w-25">{ 'User'}</p>

//                                 </div>
//                             </button>
//                             <div className="absolute right-0 top-12 w-56 bg-white border border-slate-200 rounded-2xl shadow-2xl hidden group-hover:flex flex-col py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
//                                 <div className="px-4 py-3 border-b border-slate-100">
//                                     <p className="font-bold text-sm">Welcome back!</p>
//                                     <p className="text-xs truncate text-slate-500">@gmail.com</p>
//                                 </div>
//                                 <Link href="/dashboard" className="px-4 py-2 text-sm hover:bg-yellow-50 flex items-center gap-3 transition-colors">
//                                     <LayoutDashboard className="w-4 h-4" /> Dashboard
//                                 </Link>
//                                 <Link href="/settings" className="px-4 py-2 text-sm hover:bg-muted flex items-center gap-3 transition-colors">
//                                     <User className="w-4 h-4" /> Settings
//                                 </Link>


//                                 <button 
//                                 // onClick={handleLogout}
//                                     className="px-4 py-2 text-sm text-red-500 hover:bg-red-50 flex items-center gap-3 transition-colors text-left">
//                                     <LogOut className="w-4 h-4" /> Log Out
//                                 </button>
//                             </div>
//                         </div>

//                     </div>

//                     <div className="md:hidden flex items-center">
//                         <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-lg hover:bg-muted transition-colors">
//                             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile menu */}
//             {isMenuOpen && (
//                 <div className="md:hidden px-4 pt-2 pb-6 space-y-2 bg-white border-b border-slate-200 animate-in slide-in-from-top duration-300">
//                     <Link href="/" className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl">Home</Link>
//                     <Link href="/courses" className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl">All Pets</Link>

//                     <div className="pt-4 border-t border-border mt-4">

//                         {
//                             !isPending && !session ? <div className="grid grid-cols-2 gap-4">
//                                 <Link href="/login">
//                                     <Button href="/login" variant="bordered" className="rounded-xl">Login</Button>
//                                 </Link>
//                                 <Link href="/register">
//                                     <Button href="/register" color="primary" className="rounded-xl">Join Free</Button>
//                                 </Link>
//                             </div>
//                                 : <div className="flex flex-col items-center gap-2">
//                                     <Image
//                                         width={40}
//                                         height={40}
//                                         alt='user'
//                                         src={ "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"}
//                                         className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-600/10"
//                                     />
//                                     <p className="px-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Welcome, abul</p>
//                                     <button 
//                                     //onClick={handleLogout}
//                                         className="block w-full p-2 text-base font-medium text-red-500 hover:bg-red-50 text-center border border-blue-600 rounded-xl">Log Out</button>
//                                 </div>
//                         }

//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// }

"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, User, LogOut, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { Button, Avatar } from "@heroui/react";
import Image from "next/image";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname(); // Hook to get the current route

    // Dummy auth state for UI purposes - replace with your actual auth logic (e.g., useSession)
    const isAuthenticated = true;
    const user = { name: "Abul", email: "abul@gmail.com", image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400" };

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Define navigation links for easy mapping and active state checking
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "All Pets", href: "/all-pets" },
    ];

    return (
        <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-slate-50/80 backdrop-blur-md shadow-sm " : "bg-orange-50/20 "
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* LOGO & TITLE */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="p-2 bg-[#45acac]/10 rounded-full group-hover:rotate-12 transition-transform">
                                <Avatar>
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

                    {/* DESKTOP NAVIGATION */}
                    <div className="hidden md:flex gap-8 items-center">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`relative font-medium transition-colors hover:text-[#45acac] ${isActive
                                            ? "text-[#45acac] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-[#e2b86b] after:rounded-full"
                                            : "text-slate-600"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* DESKTOP AUTH / USER MENU */}
                    <div className="hidden md:flex items-center gap-4">
                        {!isAuthenticated ? (
                            <div className="flex gap-4">
                                <Link href="/login">
                                    <Button variant="light" className="font-medium text-[#45acac]">Login</Button>
                                </Link>
                                <Link href="/register">
                                    <Button className="bg-[#45acac] text-white font-medium rounded-full px-6 hover:bg-[#368d8d]">
                                        Join Free
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                            <div className="relative group">
                                <button className="flex items-center gap-3 p-1 rounded-full hover:bg-[#45acac]/10 transition-colors border border-transparent hover:border-[#45acac]/20">
                                    <Image
                                        alt="user"
                                        width={40}
                                        height={40}
                                        src={user.image}
                                        className="w-10 h-10 rounded-full object-cover ring-2 ring-[#45acac]/20"
                                    />
                                    <div className="text-left hidden lg:block pr-2">
                                        <p className="text-sm font-bold truncate max-w-25 text-slate-800">{user.name}</p>
                                    </div>
                                </button>

                                {/* Dropdown Menu */}
                                <div className="absolute right-0 top-12 w-56 bg-white border border-slate-100 rounded-2xl shadow-xl hidden group-hover:flex flex-col py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                    <div className="px-4 py-3 border-b border-slate-50">
                                        <p className="font-bold text-sm text-slate-800">Welcome back!</p>
                                        <p className="text-xs truncate text-slate-500">{user.email}</p>
                                    </div>
                                    <Link href="/dashboard" className="px-4 py-2 text-sm text-slate-700 hover:bg-[#45acac]/10 hover:text-[#45acac] flex items-center gap-3 transition-colors">
                                        <LayoutDashboard className="w-4 h-4" /> Dashboard
                                    </Link>
                                    <Link href="/settings" className="px-4 py-2 text-sm text-slate-700 hover:bg-[#45acac]/10 hover:text-[#45acac] flex items-center gap-3 transition-colors">
                                        <User className="w-4 h-4" /> Settings
                                    </Link>
                                    <button className="px-4 py-2 w-full text-sm text-red-500 hover:bg-red-50 flex items-center gap-3 transition-colors text-left mt-1 border-t border-slate-50">
                                        <LogOut className="w-4 h-4" /> Log Out
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* MOBILE MENU TOGGLE */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg text-slate-600 hover:bg-[#45acac]/10 hover:text-[#45acac] transition-colors"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU OVERLAY */}
            {isMenuOpen && (
                <div className="md:hidden px-4 pt-2 pb-6 space-y-2 bg-white border-b border-slate-100 shadow-lg animate-in slide-in-from-top duration-300">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-4 py-3 text-base font-medium rounded-xl transition-colors ${isActive
                                        ? "bg-[#45acac]/10 text-[#45acac]"
                                        : "text-slate-700 hover:bg-slate-50"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}

                    <div className="pt-4 border-t border-slate-100 mt-4">
                        {!isAuthenticated ? (
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
                                <Image
                                    width={50}
                                    height={50}
                                    alt='user'
                                    src={user.image}
                                    className="w-12 h-12 rounded-full object-cover ring-2 ring-[#45acac]/20"
                                />
                                <div className="text-center">
                                    <p className="text-sm font-bold text-slate-900">{user.name}</p>
                                    <p className="text-xs text-slate-500">{user.email}</p>
                                </div>
                                <button className="w-full mt-2 p-2 text-sm font-medium text-red-500 hover:bg-red-50 text-center border border-red-100 rounded-xl transition-colors">
                                    Log Out
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}