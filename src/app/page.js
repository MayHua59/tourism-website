import ArticleSection from "@/components/ArticleSection";
import Carousel from "../components/Carousel";
import HeroSection from "../components/HeroSection";
import DestinationByRegion from "@/components/DestinationByRegion";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Carousel/>
      <DestinationByRegion/>
      <ArticleSection/>
    </div>
  );
}
