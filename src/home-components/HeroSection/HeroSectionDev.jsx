import React from 'react';
import styles from '../components/HeroSection.module.css'; // Adjust path if HeroSection is in a different directory
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'; 

// This is a regular React component that receives props
const HeroSection = ({ heroData }) => {
   const videoRef = useRef(null); 
    useEffect(() => {
    if (heroData && heroData.video_url && videoRef.current) {
      // Attempt to load and play the video
      // The `load()` call can be helpful to ensure the new source is picked up if it changes,
      // though in this gssp case, the component remounts with new props anyway.
      videoRef.current.load();
      videoRef.current.play().catch(playError => {
        console.warn("Video autoplay was prevented:", playError);
        // You might want to display a play button or other UI indication here
      });
    }
  }, [heroData]);
  if (!heroData || !heroData.video_url || !heroData.image_url) {
    return <div className={styles.noDataContainer}>No hero data available.</div>;
  }

  return (
    <div className={styles.videoContainer}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.video}
        poster={heroData.image_url} // Use image_url from API as poster
      >
        <source
          src={heroData.video_url} // Use video_url from API
          type="video/mp4"
        />
        <Image
          width={1920}
          height={1080}
          src={heroData.image_url}
          alt={heroData.name || "Fallback Image"}
          className={styles.fallbackImage}
        />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
};

// This function runs on the server for every request
export async function getServerSideProps() {
  let heroData = null;
  let error = null;

  try {
    const response = await fetch('http://localhost:8000/api/v1/home');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    heroData = await response.json();
    console.log("Hero data fetched on server:", heroData);
  } catch (err) {
    console.error("Error fetching hero data on server:", err);
    error = err.message;
  }

  // The props object will be passed to the HeroSection component
  return {
    props: {
      heroData,
      error // You might pass error to display on client, or handle 500 page
    },
  };
}

export default HeroSection;