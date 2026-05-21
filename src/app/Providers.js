"use client";

import { RouterProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";

export function Providers({ children }) {
  const router = useRouter();

  return (
    
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      
      <RouterProvider navigate={router.push}>
        {children}
        <Toaster/>
      </RouterProvider>
    </NextThemesProvider>
  );
}