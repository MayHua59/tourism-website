'use client'

import React, { useEffect, useRef } from 'react'; 
import styles from './HeroSection.module.css';


const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // This effect runs when the component mounts
    if (videoRef.current) {
      videoRef.current.load(); // Ensure video is loaded
      videoRef.current.play().catch(error => {
        // Autoplay was prevented.
        console.warn("Video autoplay was prevented:", error);
        
      });
    }
  }, []); 

  return (
    <div className={styles.videoContainer}>
      <video
        ref={videoRef} 
        autoPlay 
        loop
        muted 
        playsInline // Important for inline playback on iOS
        className={styles.video}
        poster="/myanmar.png" // Path relative to the 'public' folder
        // Add a key if you ever change the video source dynamically,
        
      >
        
        <source
          src="/myanmar.mov" 
          type="video/mp4" 
        />
        
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
};

export default HeroSection;