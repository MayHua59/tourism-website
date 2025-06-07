'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import styles from './CarouselSection.module.css';
import  carouselItems  from '../../data/homepage-data/carousel';


const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? carouselItems.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === carouselItems.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }
    // For AutoPlay
    useEffect(()=>{
        const timer = setTimeout(()=>{
            goToNext()
        }, 3000);
        return () => clearTimeout(timer)

    },[currentIndex])
    if (!carouselItems || carouselItems.length === 0){
        return null;
    }
    const currentSlide = carouselItems[currentIndex]
  return (
     <div className={styles.carouselContainer}>
      <div className={styles.slide}>
        <Link href={currentSlide.url} passHref>
          <div className={styles.imageContainer}>
            <Image
              src={currentSlide.image_url}
              alt={currentSlide.caption || 'Carousel image'}
              layout="fill"
              objectFit="cover"
              priority={currentIndex === 0} // Prioritize loading the first image
            />
          </div>
          {currentSlide.caption && (
            <div className={styles.caption}>
              <p>{currentSlide.caption}</p>
            </div>
          )}
        </Link>
      </div>

      <button onClick={goToPrevious} className={`${styles.arrow} ${styles.leftArrow}`}>
        &#10094; {/* Left arrow unicode */}
      </button>
      <button onClick={goToNext} className={`${styles.arrow} ${styles.rightArrow}`}>
        &#10095; {/* Right arrow unicode */}
      </button>

      <div className={styles.dotsContainer}>
        {carouselItems.map((slide, slideIndex) => (
          <div
            key={slide.id || slideIndex}
            className={`${styles.dot} ${currentIndex === slideIndex ? styles.activeDot : ''}`}
            onClick={() => goToSlide(slideIndex)}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Carousel

