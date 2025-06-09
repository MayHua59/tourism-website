'use client'
import React from 'react';
import styles from './TransportationSection.module.css';
import Link from 'next/link';
import { FaPlane, FaBus, FaTrain, FaShip, FaCar } from 'react-icons/fa'; 

const TransportationSection = () => {
  return (
    <div className={styles.transportationSection}>
      <h2 className={styles.sectionTitle}>Travel Myanmar with Ease</h2>
      <p className={styles.introText}>
        Discover Myanmar's diverse landscapes and rich culture with our comprehensive transportation guide. From swift domestic flights to scenic river cruises and comfortable overland journeys, we help you connect to every corner of this enchanting nation.
      </p>

      <div className={styles.transportModes}>
        <div className={styles.transportMode}>
          <FaPlane className={styles.transportIcon} />
          <h3>By Air</h3>
          <p>Swift connections to all major destinations like Bagan, Inle Lake, and Ngapali Beach. Ideal for maximizing sightseeing time.</p>
        </div>

        <div className={styles.transportMode}>
          <FaBus className={styles.transportIcon} />
          <h3>VIP Buses</h3>
          <p>Modern, comfortable coaches link cities like Yangon, Mandalay, and Kalaw. An economical and popular choice.</p>
        </div>

        <div className={styles.transportMode}>
          <FaTrain className={styles.transportIcon} />
          <h3>Trains</h3>
          <p>Embark on a unique journey through stunning landscapes. Experience local life at a slower, more authentic pace.</p>
        </div>

        <div className={styles.transportMode}>
          <FaShip className={styles.transportIcon} />
          <h3>River Cruises</h3>
          <p>Float along the Ayeyarwady River from Mandalay to Bagan, or explore the serene Inle Lake by boat. A truly memorable experience.</p>
        </div>

       
         <div className={styles.transportMode}>
          <FaCar className={styles.transportIcon} />
          <h3>Private Cars</h3>
          <p>Enjoy flexibility and comfort with a dedicated driver for personalized itineraries.</p>
        </div> 
      </div>

       <div className={styles.viewAllContainer}>
        <Link href="/transportations" className={styles.viewAllButton}>
          Explore All Transportation
        </Link>
      </div>
    </div>
  );
};

export default TransportationSection;