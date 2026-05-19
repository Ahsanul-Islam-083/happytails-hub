"use client";

import { RouterProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/navigation";

export function Providers({ children }) {
  const router = useRouter();

  return (
    // 1. Theme provider handles dark/light transitions globally
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {/* 2. RouterProvider hooks HeroUI components directly into Next.js navigation */}
      <RouterProvider navigate={router.push}>
        {children}
      </RouterProvider>
    </NextThemesProvider>
  );
}