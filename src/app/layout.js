
import { Fredoka } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
});

export const metadata = {
  title: "Happy Tails",
  description: "A pet adoption Website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fredoka.className} h-full`}
      suppressHydrationWarning 
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <Providers>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}