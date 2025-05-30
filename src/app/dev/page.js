import ArticleSection from "@/components/ArticleSection";
import Carousel from "@/components/Carousel";
// import HeroSection from "@/components/HeroSection";
import HeroSectionDev from "@/components/HeroSectionDev";
import DestinationByRegion from "@/components/DestinationByRegion";
import EventsSection from "@/components/EventSection";
import CultureSection from "@/components/CultureSection";

export default function Home() {
  return (
    <div>
      <HeroSectionDev/>
      <Carousel/>
      <DestinationByRegion/>
      <ArticleSection/>
      <EventsSection/>
      <CultureSection/>
    </div>
  );
}
