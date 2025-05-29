import ArticleSection from "@/components/ArticleSection";
import Carousel from "../components/Carousel";
import HeroSection from "../components/HeroSection";
import DestinationByRegion from "@/components/DestinationByRegion";
import Image from "next/image";
import EventsSection from "@/components/EventSection";
import CultureSection from "@/components/CultureSection";

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
