import ArticleSection from "../home-components/ArticleSection/ArticleSection";
import Carousel from "../home-components/CarouselSection/CarouselSection";
import HeroSection from "../home-components/HeroSection/HeroSection";
import DestinationByRegion from "../home-components/DestinationByRegion/DestinationByRegion";
import EventsSection from "../home-components/EventSection/EventSection";
import CultureSection from "../home-components/CultureSection/CultureSection";
import HotelSection from "../home-components/HotelSection/HotelSection";
import TransportationSection from "../home-components/TransportationSection/TransportationSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <DestinationByRegion/>
      <Carousel/>
      <ArticleSection/>
      <EventsSection/>
      <CultureSection/>
      <HotelSection/>
      <TransportationSection/>
    </div>
  );
}
