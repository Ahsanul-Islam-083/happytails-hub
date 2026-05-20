

import React from "react";
import FeaturedCard from "./FeaturedCard"; 


const FeaturedPets = async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/featuredPets`);
  const featuredList = await res.json();

 
 

  return (
    
    <section className="bg-white dark:bg-[#0b1213] py-16 px-4 md:px-8 lg:px-12 w-full text-left transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Component Title Section */}
        <div className="text-center mb-12">

          
         
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-3">
            Featured <span className="text-[#45acac]">Pets</span>
          </h2>
          
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xl mx-auto font-medium">
            Browse through some of our lovely companions waiting for a warm place to call home.
          </p>
        </div>

        {/* Responsive Grid containing your custom isolated JavaScript FeaturedCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredList.map((pet, idx) => (
            <FeaturedCard key={idx} pet={pet} idx={idx} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default FeaturedPets;