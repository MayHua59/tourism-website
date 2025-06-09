import { getRegionById } from '../../utils/getItem'; 
import Image from 'next/image';
import Link from 'next/link';
import regionsData from '../../data/regions';
import styles from './RegionDetailPage.module.css'

import React from 'react'

const RegionDetailPage = ({regionId}) => {
  const region = getRegionById(regionsData, regionId);
  if(!region){
    <div className={styles.notFoundContainer}>
        <h1 className={styles.notFoundTitle}>Region Not Found</h1>
        <p>Sorry, we couldn't find details for the region "{regionId}".</p>
        <Link href="/" className={styles.notFoundLink}>
          &larr; Back to Home
        </Link>
      </div>
  }
  return (
     <div className={styles.pageContainer}>
      {/* Hero Section for the Region */}
      <section className={styles.heroSection}>
        {region.spotlightImage && (
          <Image
            src={region.spotlightImage}
            alt={`${region.name} spotlight`}
            layout="fill"
            className={styles.heroImage}
            priority
          />
        )}
        <div className={styles.heroOverlay}>
          <h1 className={styles.regionName}>{region.name}</h1>
          {region.tagline && <p className={styles.regionTagline}>{region.tagline}</p>}
        </div>
      </section>

      {/* Cities in this Region Section */}
      {region.cities && region.cities.length > 0 && (
        <section className={styles.citiesSection}>
          <h2 className={styles.citiesSectionTitle}>Discover Cities in {region.name}</h2>
          <div className={styles.citiesGrid}>
            {region.cities.map((city) => (
              <Link key={city.id} href={city.url || `/destinations/${city.id}`} passHref>
                <div className={styles.cityCard}> {/* Use <a> if not using passHref with a div */}
                  <div className={styles.cityImageContainer}>
                    <Image
                      src={city.image}
                      alt={city.name}
                      layout="fill"
                      className={styles.cityImage}
                    />
                  </div>
                  <div className={styles.cityCardContent}>
                    <h3 className={styles.cityName}>{city.name}</h3>
                    <p className={styles.cityDescription}>{city.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className={styles.backLinkContainer}>
        <Link href="/" className={styles.backLink}>
          &larr; Back to All Destinations or Home
        </Link>
      </div>
    </div>
  )
}

export default RegionDetailPage


