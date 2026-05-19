"use client";

import React from "react";
import FeaturedCard from "./FeaturedCard"; // Adjust this path based on your folder structure

export const petsData = [
  {
    petName: "Buddy",
    species: "Dog",
    breed: "Labrador Retriever",
    age: 2,
    gender: "Male",
    imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500",
    healthStatus: "Healthy",
    vaccinationStatus: "Fully Vaccinated",
    location: "New York, NY",
    adoptionFee: 50,
  },
  {
    petName: "Luna",
    species: "Cat",
    breed: "Persian",
    age: 3,
    gender: "Female",
    imageUrl: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=500",
    healthStatus: "Healthy",
    vaccinationStatus: "Fully Vaccinated",
    location: "Los Angeles, CA",
    adoptionFee: 30,
  },
  {
    petName: "Mango",
    species: "Bird",
    breed: "Cockatiel",
    age: 1,
    gender: "Male",
    imageUrl: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=500",
    healthStatus: "Healthy",
    vaccinationStatus: "Not Vaccinated",
    location: "Austin, TX",
    adoptionFee: 10,
  },
  {
    petName: "Coco",
    species: "Rabbit",
    breed: "Holland Lop",
    age: 1,
    gender: "Female",
    imageUrl: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500",
    healthStatus: "Healthy",
    vaccinationStatus: "Partially Vaccinated",
    location: "Chicago, IL",
    adoptionFee: 20,
  },
  {
    petName: "Rocky",
    species: "Dog",
    breed: "German Shepherd",
    age: 4,
    gender: "Male",
    imageUrl: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=500",
    healthStatus: "Healthy",
    vaccinationStatus: "Fully Vaccinated",
    location: "Houston, TX",
    adoptionFee: 80,
  },
  {
    petName: "Bella",
    species: "Cat",
    breed: "Maine Coon",
    age: 2,
    gender: "Female",
    imageUrl: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500",
    healthStatus: "Healthy",
    vaccinationStatus: "Fully Vaccinated",
    location: "Seattle, WA",
    adoptionFee: 40,
  },
];

const FeaturedPets = () => {
  // Take exactly 6 pets from the data array
  const featuredList = petsData.slice(0, 6);

  return (
    /* FIXED: Switched from hardcoded bg-[#0b0f19] to responsive light/dark background tokens */
    <section className="bg-white dark:bg-[#0b1213] py-16 px-4 md:px-8 lg:px-12 w-full text-left transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Component Title Section */}
        <div className="text-center mb-12">

          
          {/* FIXED: Heading scales cleanly from dark slate to brilliant crisp white */}
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