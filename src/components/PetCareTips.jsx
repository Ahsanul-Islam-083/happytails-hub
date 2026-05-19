// import Image from "next/image";
// import { Button } from "@heroui/react";
// import Link from "next/link";

// const PetCareTips = () => {
//   return (
//     <section className="py-20 bg-white text-[#121C1E] overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 md:px-16">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
//           {/* Left Side: Image Container with Hover Reveal Card */}
//           <div className="lg:col-span-6 relative group overflow-hidden rounded-2xl shadow-lg bg-white aspect-[4/3] w-full">
//             {/* Main Pet Image from public folder */}
//             <Image
//               src="/cat-care.jpg" // Replace with your image filename inside the public folder
//               alt="Cat sleeping in blanket"
//               fill
//               className="object-cover transition-transform duration-500 group-hover:scale-105"
//               priority
//             />

//             {/* "Shows on Hover" Characteristics Card */}
//             <div className="absolute bottom-0 right-6 w-[80%] sm:w-[60%] bg-[#45acac] text-white p-6 rounded-t-2xl shadow-xl transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10">
//               <h4 className="font-bold text-lg mb-3 tracking-wide">
//                 Characteristics
//               </h4>
//               <ul className="space-y-2 text-sm text-slate-100 font-medium">
//                 <li className="flex items-center gap-2">
//                   <span className="text-[#e2b86b]">●</span> Playful, Calm & Self Grooming
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <span className="text-[#e2b86b]">●</span> Cat's claws are highly adapted for hunting
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <span className="text-[#e2b86b]">●</span> Cats have an excellent sense of hearing
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <span className="text-[#e2b86b]">●</span> Predators of a kind
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Right Side: Informational Content Column */}
//           <div className="lg:col-span-6 relative space-y-6 lg:pl-6">
            
//             {/* Giant stylized background watermark index number */}
//             <div className="absolute -top-12 left-0 text-7xl md:text-8xl font-black text-slate-400/20 select-none pointer-events-none tracking-tighter">
//               01
//             </div>

//             {/* Main Typography Header Details */}
//             <div className="relative z-10 pt-4 border-l-2 border-slate-300 pl-6">
//               <h2 className="text-3xl md:text-4xl font-extrabold text-[#121C1E] tracking-tight">
//                 Pet Care Tips
//               </h2>
//               <p className="text-sm md:text-base text-slate-500 italic mt-1 font-medium">
//                 Things to know before you get a cat
//               </p>
//             </div>

//             {/* Description Text Body */}
//             <p className="text-slate-600 text-base md:text-lg leading-relaxed antialiased max-w-xl">
//               Bringing a new companion home comes with beautiful moments and clear responsibilities. Simply understanding basic behavioral traits, proper grooming routines, and creating interactive play spaces ensures your cat stays physically active and emotionally secure.
//             </p>

//             {/* Hero UI Primary Call to Action Button */}
//             <div className="pt-4">
//               <Link href="/pet-care-guide">
//                 <Button 
//                   className="bg-[#45acac] hover:bg-[#368d8d] text-white font-bold px-8 py-6 rounded-xl shadow-md shadow-[#45acac]/20 transition-all hover:scale-105"
//                 >
//                   Know More
//                 </Button>
//               </Link>
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default PetCareTips;

"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";
import { motion } from "framer-motion";

const PetCareTips = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#121C1E] text-[#121C1E] dark:text-white transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Image Container with Hover Reveal Card */}
          <div className="lg:col-span-6 relative group overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-slate-800 aspect-[4/3] w-full">
            <Image
              src="/cat-care.jpg"
              alt="Cat sleeping in blanket"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />

            {/* "Shows on Hover" Characteristics Card */}
            <div className="absolute bottom-0 right-6 w-[80%] sm:w-[60%] bg-[#45acac] text-white p-6 rounded-t-2xl shadow-xl transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10">
              <h4 className="font-bold text-lg mb-3 tracking-wide">Characteristics</h4>
              <ul className="space-y-2 text-sm text-slate-100 font-medium">
                <li className="flex items-center gap-2"><span className="text-[#e2b86b]">●</span> Playful, Calm & Self Grooming</li>
                <li className="flex items-center gap-2"><span className="text-[#e2b86b]">●</span> Cat's claws are highly adapted for hunting</li>
                <li className="flex items-center gap-2"><span className="text-[#e2b86b]">●</span> Cats have an excellent sense of hearing</li>
                <li className="flex items-center gap-2"><span className="text-[#e2b86b]">●</span> Predators of a kind</li>
              </ul>
            </div>
          </div>

          {/* Right Side: Informational Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 relative space-y-6 lg:pl-6"
          >
            {/* Giant stylized background watermark index number */}
            <div className="absolute -top-12 left-0 text-7xl md:text-8xl font-black text-slate-400/20 dark:text-slate-700/30 select-none pointer-events-none tracking-tighter">
              01
            </div>

            {/* Main Typography Header Details */}
            <div className="relative z-10 pt-4 border-l-2 border-slate-300 dark:border-slate-700 pl-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#121C1E] dark:text-white tracking-tight">
                Pet Care Tips
              </h2>
              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 italic mt-1 font-medium">
                Things to know before you get a cat
              </p>
            </div>

            {/* Description Text Body */}
            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed antialiased max-w-xl">
              Bringing a new companion home comes with beautiful moments and clear responsibilities. Simply understanding basic behavioral traits, proper grooming routines, and creating interactive play spaces ensures your cat stays physically active and emotionally secure.
            </p>

            {/* Primary Call to Action Button */}
            <div className="pt-4">
              <Link href="/pet-care-guide">
                               <Button 
                  className="bg-[#45acac] hover:bg-[#368d8d] text-white px-8 py-6 rounded-full shadow-md shadow-[#45acac]/20 transition-all hover:scale-105"
                >
                  Know More
                </Button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PetCareTips;