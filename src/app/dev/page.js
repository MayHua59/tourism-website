import ArticleSection from "@/components/ArticleSection";
import Carousel from "@/components/Carousel";
// import HeroSection from "@/components/HeroSection";
// import HeroSectionDev from "@/components/HeroSectionDev";
import DestinationByRegion from "@/components/DestinationByRegion";
import EventsSection from "@/components/EventSection";
import CultureSection from "@/components/CultureSection";
// import HeroSection from "../components/HeroSection";

// Let's used server-side rendering for the HeroSection
import HeroSection from '@/app/components/HeroSection'; // Adjust path if needed
import { Suspense } from "react";
import HeroSectionSkeleton from "../components/HeroSectionSkeleton";

export default function Home() {
  return (
    <div>
        <Suspense fallback={<HeroSectionSkeleton />}>
          <HeroSection />
        </Suspense>

      {/* <HeroSection/> */}
      <Carousel/>
      <DestinationByRegion/>
      <ArticleSection/>
      <EventsSection/>
      <CultureSection/>
    </div>
  );
}
