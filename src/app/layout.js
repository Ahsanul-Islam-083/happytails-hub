import { Fredoka } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      className={`${fredoka.className} h-full `}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        <main className="flex-1">
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  );
}
