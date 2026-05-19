"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button, Separator } from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Calendar, User, MessageSquare, PawPrint } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const blogData = [
  {
    id: 1,
    title: "What are the most nutritious cat foods?",
    excerpt: "Aliquam erat volutpat. In id fermentum augue, ut pellentesque leo. Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id...",
    image: "/blog1.jpg",
    date: { day: "12", month: "MAY" },
    author: "Lauren Smith",
    comments: 23,
  },
  {
    id: 2,
    title: "How to train a dog not to jump on you",
    excerpt: "Aliquam erat volutpat. In id fermentum augue, ut pellentesque leo. Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id...",
    image: "/blog2.jpg",
    date: { day: "28", month: "JUNE" },
    author: "Jones Doe",
    comments: 5,
  },
  {
    id: 3,
    title: "How do you get rid of cat allergies?",
    excerpt: "Aliquam erat volutpat. In id fermentum augue, ut pellentesque leo. Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id...",
    image: "/blog3.jpg",
    date: { day: "02", month: "JULY" },
    author: "Lauren Smith",
    comments: 10,
  },
];

const BlogPosts = () => {
  return (
    <section className="py-24 bg-[#121C1E]/5 dark:bg-[#162224] transition-colors relative">
      
      {/* Background Banner Image Layer */}
      <div className="absolute top-0 inset-x-0 h-[420px] z-0">
        <Image 
          src="/blogBg.jpg" 
          alt="Dogs running background"
          fill
          className="object-cover object-center brightness-[0.25] dark:brightness-[0.18]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center text-white mb-16">
          <span className="text-xs font-bold tracking-widest uppercase opacity-80 block mb-2">
            — Keep Updated —
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
            Latest Blog Posts
          </h2>
          <div className="flex items-center gap-3 justify-center mt-3 text-[#45acac]">
            <div className="w-8 h-[1px] bg-current opacity-50" />
            <PawPrint className="w-4 h-4 fill-current" />
            <div className="w-8 h-[1px] bg-current opacity-50" />
          </div>
        </div>

        {/* Carousel / Responsive Grid */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: ".blog-pagination" }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full pb-14"
        >
          {blogData.map((post, idx) => (
            <SwiperSlide key={post.id}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white dark:bg-[#121C1E] border border-slate-100 dark:border-slate-800/60 rounded-none shadow-xl flex flex-col h-full overflow-hidden group"
              >
                {/* Image Section with Ribbon */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Floating Date Badge */}
                  <div className="absolute bottom-0 left-4 bg-[#c22e61] text-white text-center py-2 px-3 z-10 leading-tight">
                    <p className="text-lg font-bold">{post.date.day}</p>
                    <p className="text-[10px] font-bold tracking-wider">{post.date.month}</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-1 text-left">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 leading-snug group-hover:text-[#45acac] transition-colors min-h-[56px] line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 leading-relaxed line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <Separator className="my-5 bg-slate-100 dark:bg-slate-800" />

                  {/* Meta Footer */}
                  <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-500 font-medium mb-5">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#45acac]" />
                      Posted by <span className="text-[#45acac] hover:underline cursor-pointer">{post.author}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5 text-[#45acac]" />
                      {post.comments}
                    </span>
                  </div>

                  {/* Read More Action */}
                  <Link href={`/blog/${post.id}`} className="w-full">
                                    <Button 
                  className="w-full bg-[#45acac] hover:bg-[#368d8d] text-white  px-8 py-6 rounded-full shadow-md shadow-[#45acac]/20 transition-all hover:scale-105"
                >
                  Read More
                </Button>
                  </Link>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Bullet Container */}
        <div className="blog-pagination flex justify-center gap-1.5 mt-4" />

      </div>
    </section>
  );
};

export default BlogPosts;