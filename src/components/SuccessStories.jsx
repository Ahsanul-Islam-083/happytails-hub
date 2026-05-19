// "use client";

// import Image from "next/image";
// import { Quote } from "lucide-react";
// import { FaPaw } from "react-icons/fa6";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import { Separator } from "@heroui/react";

// // Array of Success Stories Objects for Mapping
// const storiesData = [
//   {
//     id: 1,
//     name: "Maria Silveira",
//     role: "Adopter of Max (Golden Retriever)",
//     image: "/client1.png", 
//     quote: "Adopting Max completely changed our lives. The process was incredibly seamless, and the post-adoption support from Happy Tails helped him transition into our home perfectly. He brings pure joy to our family every single day!",
//   },
//   {
//     id: 2,
//     name: "David Chen",
//     role: "Adopter of Luna & Milo (Tabby Cats)",
//     image: "/client2.jpg",
//     quote: "I was looking for a companion, but ended up adopting bonded siblings! Happy Tails made sure they stayed together. Luna and Milo are healthy, vaccinated, and settled into their new favorite sunspots immediately.",
//   },
//   {
//     id: 3,
//     name: "Sarah Jenkins",
//     role: "Adopter of Bella (Beagle Mix)",
//     image: "/client3.jpg",
//     quote: "Bella was timid at the shelter, but the detailed pet profile accurately described her true sweet personality. Watching her bloom into a confident, playful pup has been the most rewarding experience of my life.",
//   },
// ];

// const SuccessStories = () => {
//   return (
//     <section className="relative py-24 bg-[#f8f3e9] text-white overflow-hidden">
      
//       {/* Subtle Background Pattern Elements */}
//       <div className="absolute inset-0 opacity-20 pointer-events-none select-none">
//         <div className="absolute top-12 left-12 text-6xl rotate-12">🐾</div>
//         <div className="absolute bottom-16 right-16 text-7xl -rotate-12">❤️</div>
//         <div className="absolute top-1/3 right-12 text-5xl rotate-45">🦴</div>
//         <div className="absolute bottom-1/3 left-20 text-6xl -rotate-45">🐾</div>
//       </div>

//       <div className="max-w-4xl mx-auto px-6 relative z-10">
        
//         {/* Section Header */}
//         <div className="flex flex-col items-center text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-[#45acac]">
//             Success Stories
//           </h2>
//           <div className="flex items-center gap-4 w-full max-w-xs justify-center mt-4">
            
//             <Separator/>
//             <FaPaw className="text-[#e2b86b] text-lg animate-pulse" />
            
//             <Separator/>
//           </div>
//         </div>

//         {/* Swiper Container with extra bottom margin to give dots breathing room */}
//         <div className="relative mb-12">
//           <Swiper
//             modules={[Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             loop={true}
//             autoplay={{
//               delay: 5000,
//             }}
//             pagination={{
//               el: ".custom-swiper-pagination", // Redirects pagination layout outside the card container
//               clickable: true,
//               renderBullet: (index, className) => {
//                 // Generates clean, accessible Tailwind bullets matching your theme color
//                 return `<span class="${className} inline-block w-3 h-3 rounded-full cursor-pointer transition-all duration-300 mx-1.5"></span>`;
//               }
//             }}
//             className="w-full"
//           >
//             {storiesData.map((story) => (
//               <SwiperSlide key={story.id}>
//                 {/* The Yellow-Bordered Content Box */}
//                 <div className="border-2 border-slate-900/60 rounded-2xl p-8 md:p-12 bg-cyan-900/40 backdrop-blur-sm shadow-xl text-center flex flex-col items-center max-w-3xl mx-auto transition-all duration-300">
                  
//                   {/* Client Avatar Wrapper */}
//                   <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-[#56cece] mb-6 shadow-md">
//                     <Image
//                       src={story.image}
//                       alt={story.name}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>

//                   {/* Testimonial Quote */}
//                   <div className="relative max-w-2xl md:px-4">
//                     <Quote className="absolute -top-4 -left-2 md:-left-6 w-8 h-8 text-slate-50 opacity-30 transform -scale-x-100" />
//                     <p className="text-sm md:text-lg text-slate-200 leading-relaxed italic antialiased">
//                      {story.quote}
//                     </p>
//                   </div>

//                   {/* Client Info Metadata */}
//                   <div className="mt-6 pt-4 border-t border-slate-800/60 w-full max-w-xs">
//                     <h4 className=" text-lg text-[#ffeac2] tracking-wide">
//                       {story.name}
//                     </h4>
//                     <p className="text-xs uppercase tracking-wider text-slate-50 mt-1">
//                       {story.role}
//                     </p>
//                   </div>

//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* 1. Fully Controlled Pagination Element — Permanently Outside Content Borders */}
//         <div className="custom-swiper-pagination flex justify-center items-center h-6" />

//       </div>

//       {/* 2. Light Theme Vibe Color Overrides via global CSS classes */}


//     </section>
//   );
// };

// export default SuccessStories;

"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { FaPaw } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Separator } from "@heroui/react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const storiesData = [
  {
    id: 1,
    name: "Maria Silveira",
    role: "Adopter of Max (Golden Retriever)",
    image: "/client1.png", 
    quote: "Adopting Max completely changed our lives. The process was incredibly seamless, and the post-adoption support from Happy Tails helped him transition into our home perfectly. He brings pure joy to our family every single day!",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Adopter of Luna & Milo (Tabby Cats)",
    image: "/client2.jpg",
    quote: "I was looking for a companion, but ended up adopting bonded siblings! Happy Tails made sure they stayed together. Luna and Milo are healthy, vaccinated, and settled into their new favorite sunspots immediately.",
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    role: "Adopter of Bella (Beagle Mix)",
    image: "/client3.jpg",
    quote: "Bella was timid at the shelter, but the detailed pet profile accurately described her true sweet personality. Watching her bloom into a confident, playful pup has been the most rewarding experience of my life.",
  },
];

const SuccessStories = () => {
  return (
    <section className="relative py-24 bg-[#f8f3e9] dark:bg-[#162224] text-slate-800 dark:text-white transition-colors overflow-hidden">
      
      {/* Subtle Background Pattern Elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none select-none text-slate-500 dark:text-slate-600">
        <div className="absolute top-12 left-12 text-6xl rotate-12">🐾</div>
        <div className="absolute bottom-16 right-16 text-7xl -rotate-12">❤️</div>
        <div className="absolute top-1/3 right-12 text-5xl rotate-45">🦴</div>
        <div className="absolute bottom-1/3 left-20 text-6xl -rotate-45">🐾</div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-[#45acac]">
            Success Stories
          </h2>
          <div className="flex items-center gap-4 w-full max-w-xs justify-center mt-4">
            <Separator className="dark:bg-slate-700" />
            <FaPaw className="text-[#e2b86b] text-lg" />
            <Separator className="dark:bg-slate-700" />
          </div>
        </div>

        {/* Swiper Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-12"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            pagination={{
              el: ".custom-swiper-pagination", 
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} inline-block w-3 h-3 rounded-full cursor-pointer transition-all duration-300 mx-1.5"></span>`;
              }
            }}
            className="w-full"
          >
            {storiesData.map((story) => (
              <SwiperSlide key={story.id}>
                <div className="border-2 border-slate-900/20 dark:border-slate-700/60 rounded-2xl p-8 md:p-12 bg-white/60 dark:bg-cyan-950/20 backdrop-blur-sm shadow-xl text-center flex flex-col items-center max-w-3xl mx-auto">
                  
                  {/* Client Avatar Wrapper */}
                  <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-[#56cece] mb-6 shadow-md">
                    <Image src={story.image} alt={story.name} fill className="object-cover" />
                  </div>

                  {/* Testimonial Quote */}
                  <div className="relative max-w-2xl md:px-4">
                    <Quote className="absolute -top-4 -left-2 md:-left-6 w-8 h-8 text-slate-400 opacity-30 transform -scale-x-100" />
                    <p className="text-sm md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed italic antialiased">
                     {story.quote}
                    </p>
                  </div>

                  {/* Client Info Metadata */}
                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 w-full max-w-xs">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-[#ffeac2] tracking-wide">
                      {story.name}
                    </h4>
                    <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">
                      {story.role}
                    </p>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Swiper Pagination Element */}
        <div className="custom-swiper-pagination flex justify-center items-center h-6" />

      </div>
    </section>
  );
};

export default SuccessStories;