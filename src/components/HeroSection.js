import React from 'react';
import styles from './HeroSection.module.css';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className={styles.videoContainer}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.video}
        poster="./myanmar.png"
      >
        <source
          src="./myanmar.mov"
          type="video/mp4"
        />
        {/* Fallback if video fails */}
        {/* <Image
          width={1920}
          height={1080}
          src="myanmar.png"
          alt="Fallback Image"
          className={styles.fallbackImage}
        /> */}
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
};

export default HeroSection;