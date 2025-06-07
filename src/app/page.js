import ArticleSection from "../home-components/ArticleSection/ArticleSection";
import Carousel from "../home-components/CarouselSection/CarouselSection";
import HeroSection from "../home-components/HeroSection/HeroSection";
import DestinationByRegion from "../home-components/DestinationByRegion/DestinationByRegion";
import Image from "next/image";
import EventsSection from "../home-components/EventSection/EventSection";
import CultureSection from "../home-components/CultureSection/CultureSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Carousel/>
      <DestinationByRegion/>
      <ArticleSection/>
      <EventsSection/>
      <CultureSection/>
    </div>
  );
}
