"use client";

import FeaturedCard from "@/components/FeaturedCard";
import React from "react"; // Adjust this path based on your folder structure

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
    description: "Buddy is a playful and energetic golden boy who loves fetch, swimming, and cuddles. He is great with kids and other dogs. House-trained and very friendly with strangers.",
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
    description: "Luna is a calm and affectionate Persian who loves lazy afternoons on the couch. She enjoys being brushed and will purr all day long. Ideal for a quiet home.",
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
    description: "Mango is a cheerful little cockatiel who whistles tunes all day. He loves sitting on shoulders and mimicking sounds. Perfect for first-time bird owners looking for a lively companion.",
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
    description: "Coco is an adorable floppy-eared bunny who loves fresh veggies and hopping around. She is gentle, curious, and gets along well with calm children. Litter trained and easy to handle.",
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
    description: "Rocky is a loyal and intelligent German Shepherd who knows basic commands. He is protective yet gentle with family members. Needs an active owner who enjoys daily walks and outdoor activities.",
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
    description: "Bella is a fluffy and sociable Maine Coon who greets everyone at the door. She loves interactive toys and playing fetch like a dog. Great with other cats and adapts quickly to new environments.",
  },
  {
    petName: "Peanut",
    species: "Rabbit",
    breed: "Lionhead",
    age: 1,
    gender: "Male",
    imageUrl: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=500",
    healthStatus: "Special Needs",
    vaccinationStatus: "Partially Vaccinated",
    location: "Denver, CO",
    adoptionFee: 10,
    description: "Peanut has a minor leg condition but lives a happy and comfortable life. He loves attention and being hand-fed treats. Looking for a patient and caring owner who can give him extra love.",
  },
  {
    petName: "Kiwi",
    species: "Bird",
    breed: "Budgerigar",
    age: 1,
    gender: "Female",
    imageUrl: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=500",
    healthStatus: "Healthy",
    vaccinationStatus: "Not Vaccinated",
    location: "Miami, FL",
    adoptionFee: 15,
    description: "Kiwi is a tiny bundle of energy who chirps happily from morning to evening. She enjoys mirrors, swings, and interacting with her owner. A wonderful starter pet for families or solo owners.",
  },
];
const AllPetsPage = () => {
  // Take exactly 6 pets from the data array
//   const featuredList = petsData.slice(0, 6);

  return (
    /* FIXED: Switched from hardcoded bg-[#0b0f19] to responsive light/dark background tokens */
    <section className="bg-white dark:bg-[#0b1213] py-16 px-4 md:px-8 lg:px-12 w-full text-left transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Component Title Section */}
        <div className="text-center mb-12">

          
          {/* FIXED: Heading scales cleanly from dark slate to brilliant crisp white */}
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-3">
            All <span className="text-[#45acac]">Pets</span>
          </h2>
          
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xl mx-auto font-medium">
             Every pet here is looking for a loving home — find your perfect companion today.
          </p>
        </div>

        {/* Responsive Grid containing your custom isolated JavaScript FeaturedCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {petsData.map((pet, idx) => (
            <FeaturedCard key={idx} pet={pet} idx={idx} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default AllPetsPage;