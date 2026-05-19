import BlogPosts from "@/components/BlogPosts";
import FeaturedPets from "@/components/FeaturedPets";
import Hero from "@/components/Hero";
import PetCareTips from "@/components/PetCareTips";
import PetEmergency from "@/components/PetEmergency";
import SuccessStories from "@/components/SuccessStories";
import WhyAdopt from "@/components/WhyAdopt";


export default function Home() {
  return (
    <div className="">
      <Hero/>
      <FeaturedPets/>
      <WhyAdopt/>
      <PetCareTips/>
      <PetEmergency/>
      <BlogPosts/>
      <SuccessStories/>
    </div>
  );
}
