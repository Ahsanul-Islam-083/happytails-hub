// import Image from "next/image";
// import { Button, Separator } from "@heroui/react";
// import Link from "next/link";

// const WhyAdopt = () => {
//   return (
//     <section className="py-20 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 md:px-16">
        
//         {/* Section Header */}
//         <div className="flex flex-col items-center text-center mb-16">
//           <span className="text-[#45acac] font-bold tracking-widest text-4xl md:text-5xl uppercase mb-2">
//             Adoption
//           </span>
//           <div className="flex items-center gap-4 w-full max-w-md justify-center">
            
//             <Separator/>
//             <div className="text-[#e2b86b] text-xl">🐾</div>
//             <Separator/>
            
//           </div>
//         </div>

//         {/* Main Split Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
//           {/* Left Side: GIF Asset - FIXED WIDTH AND HEIGHT SCALING */}
//           <div className="lg:col-span-5 flex justify-center relative w-full">
//             {/* Subtle brand color accent glow behind the image background */}
//             <div className="absolute w-72 h-72 bg-[#45acac]/10 rounded-full blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            
//             {/* Wrapper box with controlled aspect ratio and responsive widths */}
//             <div className="relative w-full max-w-sm md:max-w-md lg:max-w-full aspect-square sm:aspect-4/3 lg:aspect-square rounded-2xl overflow-hidden shadow-md">
//               <Image
//                 src="/adopt-info-pet.gif" // Double-check your file name matches exactly
//                 alt="Why Adopt Pets"
//                 fill
//                 unoptimized // Keeps the GIF animating flawlessly
//                 className="w-full h-full object-cover" 
//                 priority
//               />
//             </div>
//           </div>

//           {/* Right Side: Content Block */}
//           <div className="lg:col-span-7 space-y-6">
//             <h2 className="text-3xl md:text-4xl font-semibold text-[#121C1E] tracking-tight leading-tight">
//               Why Adopt Pets?
//             </h2>
            
//             <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
//               <p>
//                 Adopting a pet means giving a deserving animal a second chance at life. Millions of wonderful, loving companions end up in shelters every year through no fault of their own, waiting for a family to welcome them home.
//               </p>
              
//               <ul className="space-y-3 pt-2">
//                 <li className="flex items-start gap-3">
//                   <span className="text-[#45acac] mt-1">✔</span>
//                   <span><strong>Save a Life:</strong> When you adopt, you break the cycle of pet overpopulation and rescue an animal in need.</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="text-[#45acac] mt-1">✔</span>
//                   <span><strong>Unconditional Love:</strong> Shelter pets are incredibly resilient and often form an unbreakable bond of gratitude with their rescuers.</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="text-[#45acac] mt-1">✔</span>
//                   <span><strong>Healthy & Vetted:</strong> Most adoptable animals come fully vaccinated, microchipped, and spayed or neutered, making the transition seamless.</span>
//                 </li>
//               </ul>
//             </div>

//             {/* CTA Button Link Layer */}
//             <div className="pt-4">
//               <Link href="/adoption-process">
//                 <Button 
//                   className="bg-[#45acac] hover:bg-[#368d8d] text-white font-bold px-8 py-6 rounded-full shadow-md shadow-[#45acac]/20 transition-all hover:scale-105"
//                 >
//                   Learn More Process
//                 </Button>
//               </Link>
//             </div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default WhyAdopt;

"use client";

import Image from "next/image";
import { Button, Separator } from "@heroui/react";
import Link from "next/link";
import { motion } from "framer-motion";

const WhyAdopt = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#162224] text-slate-800 dark:text-slate-100 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[#45acac] font-bold tracking-widest text-4xl md:text-5xl uppercase mb-2">
            Adoption
          </span>
          <div className="flex items-center gap-4 w-full max-w-md justify-center">
            <Separator className="dark:bg-slate-700" />
            <div className="text-[#e2b86b] text-xl">🐾</div>
            <Separator className="dark:bg-slate-700" />
          </div>
        </div>

        {/* Main Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: GIF Asset */}
          <div className="lg:col-span-5 flex justify-center relative w-full">
            <div className="absolute w-72 h-72 bg-[#45acac]/10 rounded-full blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative w-full max-w-sm md:max-w-md lg:max-w-full aspect-square sm:aspect-4/3 lg:aspect-square rounded-2xl overflow-hidden shadow-md"
            >
              <Image
                src="/adopt-info-pet.gif"
                alt="Why Adopt Pets"
                fill
                unoptimized
                className="w-full h-full object-cover" 
                priority
              />
            </motion.div>
          </div>

          {/* Right Side: Content Block */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-[#121C1E] dark:text-white tracking-tight leading-tight">
              Why Adopt Pets?
            </h2>
            
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed">
              <p>
                Adopting a pet means giving a deserving animal a second chance at life. Millions of wonderful, loving companions end up in shelters every year through no fault of their own, waiting for a family to welcome them home.
              </p>
              
              <ul className="space-y-3 pt-2">
                <li className="flex items-start gap-3">
                  <span className="text-[#45acac] mt-1">✔</span>
                  <span><strong>Save a Life:</strong> When you adopt, you break the cycle of pet overpopulation and rescue an animal in need.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#45acac] mt-1">✔</span>
                  <span><strong>Unconditional Love:</strong> Shelter pets are incredibly resilient and often form an unbreakable bond of gratitude with their rescuers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#45acac] mt-1">✔</span>
                  <span><strong>Healthy & Vetted:</strong> Most adoptable animals come fully vaccinated, microchipped, and spayed or neutered, making the transition seamless.</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/adoption-process">
                <Button 
                  className="bg-[#45acac] hover:bg-[#368d8d] text-white font-bold px-8 py-6 rounded-full shadow-md shadow-[#45acac]/20 transition-all hover:scale-105"
                >
                  Learn More Process
                </Button>
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default WhyAdopt;