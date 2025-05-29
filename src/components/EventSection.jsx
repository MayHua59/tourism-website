'use client';
import { eventsData } from '../data/events';
import EventCard from './EventCard';
import styles from './EventSection.module.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar'; // If you want a scrollbar
import 'swiper/css/autoplay'; // If you want autoplay

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Corrected import path for modules

const EventsSection = () => {
  if (!eventsData || eventsData.length === 0) {
    return null;
  }

  // Optional: Sort events by date
  const sortedEvents = [...eventsData].sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <section className={`${styles.eventsSectionContainer} container`}>
      <h2 className={styles.sectionTitle}>Upcoming Events & Festivals</h2>
      <div className={styles.swiperContainer}> {/* Optional: A wrapper for custom styling if needed */}
        <Swiper
          // Install Swiper modules
          modules={[Navigation, Pagination, Autoplay]} // Add Autoplay if you use it
          spaceBetween={30} // Gap between slides
          slidesPerView={1} // Default for mobile
          navigation // Enables navigation arrows
          pagination={{ clickable: true }} // Enables clickable pagination dots
          loop={sortedEvents.length > 3} // Loop if more than 3 items (or your slidesPerView for desktop)
          autoplay={{ // Optional: Autoplay configuration
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className={styles.mySwiper} // Custom class for styling Swiper elements
        >
          {sortedEvents.map((event) => (
            <SwiperSlide key={event.id || event.name} className={styles.swiperSlide}>
              <EventCard event={event} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Optional: "View All Events" button can remain outside the Swiper instance */}
    </section>
  );
};

export default EventsSection;