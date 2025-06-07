import ArticleSection from "@/home-components/ArticleSection/ArticleSection";
import Carousel from "@/home-components/CarouselSection/CarouselSection";
// import HeroSection from "@/components/HeroSection";
// import HeroSectionDev from "@/components/HeroSectionDev";
import DestinationByRegion from "@/home-components/DestinationByRegion/DestinationByRegion";
import EventsSection from "@/home-components/EventSection/EventSection";
import CultureSection from "@/home-components/CultureSection/CultureSection";
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
