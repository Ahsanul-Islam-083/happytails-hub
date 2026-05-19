import Hero from "@/components/Hero";
import PetCareTips from "@/components/PetCareTips";
import SuccessStories from "@/components/SuccessStories";
import WhyAdopt from "@/components/WhyAdopt";


export default function Home() {
  return (
    <div className="">
      <Hero/>
      <WhyAdopt/>
      <SuccessStories/>
      <PetCareTips/>
    </div>
  );
}
