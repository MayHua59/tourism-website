import React from 'react';
import styles from './HeroSection.module.css'

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
        <div className={styles.videoBackground}>
            <video autoPlay loop muted playsInline poster='path/to/your-poster-image.jpg'>
<source src="path/to/your-video.mp4" type="video/mp4" />
            </video>

        </div>

    </section>
  )
}

export default HeroSection