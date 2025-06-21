

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './TourCompanyDetail.module.css';
import Breadcrumbs from '../../components/ui/Breadcrumbs/Breadcrumbs';
import tourCompaniesData from '@/data/tour-companies';

const TourCompanyDetail = ({slug}) => {
  const tourCompany = tourCompaniesData.find(d => d.slug === slug);
   const segments = [
   
    { label: 'Tour Companies', url: '/tour-companies' },
    { label: tourCompany.name },
  ];
  if (!tourCompany) {
    return (
      <div className={styles.pageContainer}>
        <Breadcrumbs segments={segments} />
        <h1>Tour Company Not Found</h1>
        <p>The tour company you are looking for does not exist.</p>
        <Link href="/tour-companies">
          Back to Tour Companies
        </Link>
      </div>
    );
  }

  // return <h2>{JSON.stringify(destination)}</h2>; 
  return (
     <div className={styles.pageContainer}>
      <Breadcrumbs segments={segments} />
      <header className={styles.destinationHeader}>
        <h1 className={styles.destinationTitle}>{tourCompany.name}</h1>
      </header>

      <div className={styles.destinationImageWrapper}>
        <Image
          src={tourCompany.image_url}
          alt={tourCompany.name}
          layout="fill"
          objectFit="cover"
          className={styles.destinationImage}
        />
      </div>

      <article className={styles.destinationContent}>
        <p>{tourCompany.description}</p>
      </article>

      <footer className={styles.destinationFooter}>
        <Link href="/tour-companies">
          Back to Tour Companies
        </Link>
      </footer>
    </div>
  )
}

export default TourCompanyDetail

