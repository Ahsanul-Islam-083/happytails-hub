

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardList, PlusCircle, FolderHeart, LogOut, X, LayoutDashboard } from "lucide-react";
import { Button, Separator } from "@heroui/react";
import { FiSidebar } from "react-icons/fi";
import { signOut } from "@/lib/auth-client";

// Kept raw configuration map datasets safely isolated outside the component mount tree context
const menuItems = [
  { name: "My Requests", href: "/my-requests", icon: ClipboardList },
  { name: "Add Pet", href: "/add-pet", icon: PlusCircle },
  { name: "My Listings", href: "/my-listings", icon: FolderHeart },
];

const DashboardLayout = ({ children }) => {
    const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

        const handleSignout = async () => {
          await signOut();
          router.push('/')
      }

  return (
    <div className="flex min-h-screen bg-[#f8f3e9] dark:bg-[#162224] text-slate-800 dark:text-slate-100 antialiased selection:bg-[#45acac]/30 transition-colors duration-300">
      
      {/* =========================================================================
          DESKTOP SIDEBAR
          ========================================================================= */}
      <aside className="hidden md:flex w-64 bg-[#f8f3e9] dark:bg-[#162224] border-r border-slate-200 dark:border-slate-800/60 flex-col justify-between p-4 sticky top-0 h-screen z-20 transition-colors duration-300">
        <div className="w-full">
          <div className="px-3 py-4 mb-4">
            <span className="text-md font-semibold tracking-widest text-slate-400 dark:text-slate-500 uppercase select-none flex items-center gap-2">
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </span>
          </div>
          <Separator className="dark:bg-slate-700 mb-4" />
          
          {/* FIXED: Render loop inlined natively directly onto the desktop viewport channel context tree */}
          <nav className="flex flex-col gap-1.5 w-full">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link key={item.href} href={item.href} className="w-full relative block">
                  <div
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors relative z-10 ${
                      isActive 
                        ? "text-white font-semibold" 
                        : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                    }`}
                  >
                    <Icon size={18} className={isActive ? "text-white" : "text-slate-400 dark:text-slate-500"} />
                    <span>{item.name}</span>

                    {isActive && (
                      <motion.div
                        layoutId="dashboardActiveIndicator"
                        className="absolute inset-0 bg-[#45acac] rounded-xl -z-10 shadow-md"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800/80 pt-4 w-full mb-2">
          <Button 
          onClick={handleSignout}
            variant="light" 
            className="w-full justify-start text-red-500 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-500/5 dark:hover:bg-red-500/10 rounded-xl px-4 py-3 text-sm font-semibold transition-colors group"
          >
            <LogOut size={18} className="mr-3 text-red-500 group-hover:translate-x-0.5 transition-transform" />
            Logout
          </Button>
        </div>
      </aside>

      {/* =========================================================================
          MOBILE COLLAPSIBLE SLIDE PANELS DRAWER LAYER SYSTEM
          ========================================================================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 md:hidden"
            />

            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
              className="fixed top-0 left-0 bottom-0 w-72 bg-[#f8f3e9] dark:bg-[#162224] border-r border-slate-200 dark:border-slate-800/60 p-5 flex flex-col justify-between z-50 md:hidden shadow-2xl"
            >
              <div className="w-full">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-md font-semibold tracking-widest text-slate-400 dark:text-slate-500 uppercase flex items-center gap-2">
                    <LayoutDashboard className="w-4 h-4" />
                    Dashboard
                  </span>
                  <Button 
                    isIconOnly 
                    variant="light" 
                    radius="full"
                    onClick={() => setIsOpen(false)}
                    className="text-slate-500 dark:text-slate-400"
                  >
                    <X size={20} />
                  </Button>
                </div>
                <Separator className="dark:bg-slate-700 mb-4" />
                
                {/* FIXED: Render loop inlined here cleanly for mobile viewports, automatically closing drawer on tap links */}
                <nav className="flex flex-col gap-1.5 w-full">
                  {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                      <Link 
                        key={item.href} 
                        href={item.href} 
                        className="w-full relative block"
                        onClick={() => setIsOpen(false)}
                      >
                        <div
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors relative z-10 ${
                            isActive 
                              ? "text-white font-semibold" 
                              : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                          }`}
                        >
                          <Icon size={18} className={isActive ? "text-white" : "text-slate-400 dark:text-slate-500"} />
                          <span>{item.name}</span>

                          {isActive && (
                            <motion.div
                              layoutId="dashboardActiveIndicatorMobile"
                              className="absolute inset-0 bg-[#45acac] rounded-xl -z-10 shadow-md"
                              transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="border-t border-slate-200 dark:border-slate-800/80 pt-4 w-full">
                <Button 
                onClick={handleSignout}
                  variant="light" 
                  className="w-full justify-start text-red-500 rounded-xl px-4 py-3 text-sm font-semibold"
                >
                  <LogOut size={18} className="mr-3" />
                  Logout
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* =========================================================================
          DYNAMIC CONTENT ROUTE PORTAL FRAME VIEWPORT INTERFACE
          ========================================================================= */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#f8f3e9] dark:bg-[#121C1E] transition-colors duration-300">
        
        <header className="h-16 bg-white dark:bg-[#121C1E] border-b border-slate-200/60 dark:border-slate-800/60 flex items-center px-6 md:hidden gap-2 w-full transition-colors duration-300 sticky top-0 z-30">
          <Button 
            isIconOnly 
            variant="light" 
            onClick={() => setIsOpen(true)}
            className="text-slate-500 dark:text-slate-400"
          >
            <FiSidebar />
          </Button>
          <h1 className="font-extrabold text-lg bg-gradient-to-r from-[#45acac] to-[#e2b86b] bg-clip-text text-transparent">
            Pet Dashboard
          </h1>
        </header>

        <main className="flex-1 p-6 md:p-10 overflow-y-auto max-w-[1600px] w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;