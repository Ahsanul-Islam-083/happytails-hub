import Link from "next/link";
import Image from "next/image";
import { Send } from "lucide-react"; // Keeping standard utility icon
import { FaXTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#121C1E] mt-20 text-slate-400 px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Brand Header Section */}
        <div className="mb-12">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="p-1.5 bg-[#45acac]/10 rounded-full group-hover:rotate-12 transition-transform">
              <Image 
                src="/mainLogo.png" 
                alt="Happy Tails Logo" 
                width={48} 
                height={48} 
                className="w-12 h-12 object-contain"
              />
            </div>
            <span className="font-extrabold text-5xl md:text-6xl tracking-tight">
              <span className="text-[#45acac]">Happy</span>
              <span className="text-[#e2b86b]">Tails</span>
            </span>
          </Link>
          <p className="mt-6 max-w-xl text-slate-400 text-lg">
            Connecting loving families with their perfect furry companions. Every pet deserves a happy home.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Newsletter */}
          <div>
            <h3 className="text-[#e2b86b] font-bold mb-4 tracking-wider text-sm uppercase">Newsletter</h3>
            <p className="mb-4 text-sm text-slate-400">
              Subscribe for heartwarming adoption stories and pet care tips.
            </p>
            <div className="flex items-center bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden focus-within:border-[#45acac] transition-colors">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent outline-none flex-1 text-sm px-4 py-3 text-slate-200 placeholder:text-slate-500"
              />
              <button className="bg-[#45acac] hover:bg-[#368d8d] px-4 py-3 text-white transition-colors flex items-center justify-center">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#e2b86b] font-bold mb-4 tracking-wider text-sm uppercase">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-[#45acac] transition-colors">Home</Link></li>
              <li><Link href="/all-pets" className="hover:text-[#45acac] transition-colors">All Pets</Link></li>
              <li><Link href="/" className="hover:text-[#45acac] transition-colors">Adoption Process</Link></li>
              <li><Link href="/" className="hover:text-[#45acac] transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-[#e2b86b] font-bold mb-4 tracking-wider text-sm uppercase">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-[#45acac] transition-colors">Help Center</Link></li>
              <li><Link href="/" className="hover:text-[#45acac] transition-colors">Pet Care FAQ</Link></li>
              <li><Link href="/" className="hover:text-[#45acac] transition-colors">Terms of Service</Link></li>
              <li><Link href="/" className="hover:text-[#45acac] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#e2b86b] font-bold mb-4 tracking-wider text-sm uppercase">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-[#45acac] text-lg">📞</span> 
                <span className="hover:text-white transition-colors cursor-pointer">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#45acac] text-lg">✉️</span> 
                <span className="hover:text-white transition-colors cursor-pointer">hello@happytails.com</span>
              </li>
              <li className="flex items-center gap-3 items-start">
                <span className="text-[#45acac] text-lg">📍</span> 
                <span>123 Rescue Lane,<br/>Pet City, PC 90210</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800/80 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Happy Tails. All rights reserved.
          </p>

          {/* Social Links from React-Icons */}
          <div className="flex gap-6 text-slate-400 items-center">
            <Link href="/" className="hover:text-[#45acac] hover:scale-110 transition-all">
              <FaXTwitter className="w-5 h-5" />
            </Link>
            <Link href="/" className="hover:text-[#e2b86b] hover:scale-110 transition-all">
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link href="/" className="hover:text-[#45acac] hover:scale-110 transition-all">
              <FaFacebookF className="w-4 h-4" />
            </Link>
            <Link href="/" className="hover:text-[#45acac] hover:scale-110 transition-all">
              <FaLinkedinIn className="w-5 h-5" />
            </Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;