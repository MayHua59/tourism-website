// // "use client";

// // import React from 'react';
// // import Link from 'next/link';
// // import Image from 'next/image';
// // import styles from './CultureDetail.module.css'; 

// // // const formatDate = (dateString) => { ... };

// // const CultureDetailPage = ({ cultureItemData }) => {
  
// //   const item = cultureItemData;

// //   if (!item) {
    
// //     return (
// //       <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
// //         <h1>Culture Item Data Missing</h1>
// //         <Link href="/culture-items" className={styles.backLink}> 
// //           &larr; Back to Culture Items
// //         </Link>
// //       </div>
// //     );
// //   }

// //   // Handle long description (e.g., if it's HTML)
// //   // let longDescriptionContent;
// //   // if (item.long_description) {
// //   //   // Assuming HTML content for long_description
// //   //   longDescriptionContent = <div dangerouslySetInnerHTML={{ __html: item.long_description }} />;
// //   //   // If plain text with newlines:
// //   //   // longDescriptionContent = item.long_description.split('\n').map((para, index) => <p key={index}>{para}</p>);
// //   // } else if (item.description) {
// //   //   // Fallback to short description if long one isn't available
// //   //   longDescriptionContent = <p>{item.description}</p>;
// //   // } else {
// //   //   longDescriptionContent = <p>No detailed description available for this item.</p>;
// //   // }

// //   return (
// //     <div className={styles.pageContainer}>
// //       <header className={styles.itemHeader}>
// //         {item.image_url && (
// //           <div className={styles.itemImageWrapper}>
// //             <Image
// //               src={item.image_url}
// //               alt={`Image for ${item.name}`}
// //               layout="fill"
// //               objectFit="cover"
// //               priority
// //             />
// //           </div>
// //         )}
// //         <div className={styles.itemHeaderText}>
// //           <h1 className={styles.itemName}>{item.name}</h1>
// //           {item.category && (
// //             <Link href={`/culture-categories/${item.category.slug || item.category.id}`} className={styles.categoryLink}>
// //               Part of: {item.category.name}
// //             </Link>
// //           )}
// //         </div>
// //       </header>

// //       <nav className={styles.breadcrumbs}>
// //         <Link href="/">Home</Link> &gt;
// //         <Link href="/culture-categories">Culture Categories</Link>
// //         {item.category && (
// //           <>
// //             &gt; <Link href={`/culture-categories/${item.category.slug || item.category.id}`}>{item.category.name}</Link>
// //           </>
// //         )}
// //         &gt; <span>{item.name}</span>
// //       </nav>

// //       <article className={styles.itemContent}>
// //         {item.description && !item.long_description && ( 
// //             <p className={styles.shortDescription}>{item.description}</p>
// //         )}

// //         {item.significance && (
// //           <section className={styles.detailSection}>
// //             <h2>Significance</h2>
// //             <p>{item.significance}</p>
// //           </section>
// //         )}

// //         {item.history && (
// //           <section className={styles.detailSection}>
// //             <h2>History</h2>
// //             <p>{item.history}</p>
// //           </section>
// //         )}

// //         <section className={styles.detailSection}>
// //           <h2>Details</h2>
// //           {longDescriptionContent}
// //         </section>

// //         {item.images && item.images.length > 0 && (
// //           <section className={styles.gallerySection}>
// //             <h2>Gallery</h2>
// //             <div className={styles.galleryGrid}>
// //               {item.images.map((img, index) => (
// //                 <div key={index} className={styles.galleryImageContainer}>
// //                   <Image src={img.url} alt={img.caption || `Image ${index + 1} for ${item.name}`} layout="responsive" width={300} height={200} objectFit="cover" />
// //                   {img.caption && <p className={styles.galleryCaption}>{img.caption}</p>}
// //                 </div>
// //               ))}
// //             </div>
// //           </section>
// //         )}

        
// //       </article>

// //       <div style={{ textAlign: 'center', marginTop: '40px' }}>
// //         {item.category ? (
// //           <Link href={`/culture-categories/${item.category.slug || item.category.id}`} className={styles.backLink}>
// //             &larr; Back to {item.category.name}
// //           </Link>
// //         ) : (
// //           <Link href="/culture-categories" className={styles.backLink}>
// //             &larr; Back to Culture Categories
// //           </Link>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CultureDetailPage; 

// // *** start Section with Static Data **//


// "use client";

// import React from 'react';
// import Image from 'next/image';
// import styles from './CultureDetail.module.css';
// import { FaCheckCircle, FaStar, FaMapMarkerAlt } from 'react-icons/fa'; 
// import Breadcrumbs from '../../components/ui/Breadcrumbs/Breadcrumbs'; 

// const CultureDetail = ({ culture, cities, townships, villages }) => {
//   if (!culture) {
//     return <div className={styles.noCulture}>Culture not found</div>;
//   }

//   const getCityName = (cityId) => {
//     const city = cities && cities.find((c) => c.id === cityId);
//     return city ? city.name : 'N/A';
//   };

//   const getTownshipName = (townshipId) => {
//     const township = townships && townships.find((t) => t.id === townshipId);
//     return township ? township.name : 'N/A';
//   };

//   const getVillageName = (villageId) => {
//     const village = villages && villages.find((v) => v.id === villageId);
//     return village ? village.name : 'N/A';
//   };

  
//   const breadcrumbSegments = [
//     { label: 'Cultures', url: '/cultures' }, 
//     { label: culture.name }, 
//   ];

//   return (
//     <div className={styles.cultureDetailContainer}>
//       {/* Breadcrumbs */}
//       <Breadcrumbs segments={breadcrumbSegments} />

//       {/* Hero Section */}
//       <section className={styles.heroSection}>
//         <Image
//           src={culture.image_url}
//           alt={culture.name}
//           width={1200}
//           height={600}
//           className={styles.heroImage}
//           priority
//         />
//         <h1 className={styles.heroTitle}>{culture.name}</h1>
//       </section>

//       {/* Description Section */}
//       <section className={styles.descriptionSection}>
//         <h2 className={styles.sectionTitle}>About {culture.name}</h2>
//         <p className={styles.cultureDescription}>{culture.description}</p>
//       </section>

//       {/* Additional Details Section */}
//       <section className={styles.detailsSection}>
//         <h2 className={styles.sectionTitle}>Additional Details</h2>
//         <ul className={styles.detailsList}>
//           <li>
//             <FaCheckCircle className={styles.activeIcon} />
//             <strong>Is Active:</strong> {culture.is_active ? 'Yes' : 'No'}
//           </li>
//           {culture.city_id && (
//             <li>
//               <FaMapMarkerAlt />
//               <strong>City:</strong> {getCityName(culture.city_id)}
//             </li>
//           )}
//           {culture.township_id && (
//             <li>
//               <FaMapMarkerAlt />
//               <strong>Township:</strong> {getTownshipName(culture.township_id)}
//             </li>
//           )}
//           {culture.village_id && (
//             <li>
//               <FaMapMarkerAlt />
//               <strong>Village:</strong> {getVillageName(culture.village_id)}
//             </li>
//           )}
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default CultureDetail;
// // *** end Section with Static Data **//

//*** with API ***/
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './CultureDetail.module.css';
import { FaCheckCircle, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import Breadcrumbs from '../../components/ui/Breadcrumbs/Breadcrumbs';
import Loading from '../../components/ui/Loading/Loading';

const CultureDetail = ({ slug }) => {
  const [culture, setCulture] = useState(null);
  const [cities, setCities] = useState([]);
  const [townships, setTownships] = useState([]);
  const [villages, setVillages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cultureResponse = await fetch(`/api/v1/cultures/${slug}`);
        if (!cultureResponse.ok) {
          throw new Error(`Failed to fetch culture: ${cultureResponse.status} ${cultureResponse.statusText}`);
        }
        const cultureData = await cultureResponse.json();
        setCulture(cultureData);

        
        const citiesResponse = await fetch('/api/v1/cities');
        if (!citiesResponse.ok) throw new Error('Failed to fetch cities');
        setCities(await citiesResponse.json());

        const townshipsResponse = await fetch('/api/v1/townships');
        if (!townshipsResponse.ok) throw new Error('Failed to fetch townships');
        setTownships(await townshipsResponse.json());

        const villagesResponse = await fetch('/api/v1/villages');
        if (!villagesResponse.ok) throw new Error('Failed to fetch villages');
        setVillages(await villagesResponse.json());

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load culture details');
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className={styles.cultureDetailContainer}>
        <Loading message="Loading culture details..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.cultureDetailContainer}>
        <h1>Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  if (!culture) {
    return <div className={styles.noCulture}>Culture not found</div>;
  }

  const getCityName = (cityId) => {
    const city = cities.find((c) => c.id === cityId);
    return city ? city.name : 'N/A';
  };

  const getTownshipName = (townshipId) => {
    const township = townships.find((t) => t.id === townshipId);
    return township ? township.name : 'N/A';
  };

  const getVillageName = (villageId) => {
    const village = villages.find((v) => v.id === villageId);
    return village ? village.name : 'N/A';
  };

  const breadcrumbSegments = [
    { label: 'Cultures', url: '/cultures' },
    { label: culture.name },
  ];

  return (
    <div className={styles.cultureDetailContainer}>
      {/* Breadcrumbs */}
      <Breadcrumbs segments={breadcrumbSegments} />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <Image
          src={culture.image_url}
          alt={culture.name}
          width={1200}
          height={600}
          className={styles.heroImage}
          priority={true} 
        />
        <h1 className={styles.heroTitle}>{culture.name}</h1>
      </section>

      {/* Description Section */}
      <section className={styles.descriptionSection}>
        <h2 className={styles.sectionTitle}>About {culture.name}</h2>
        <p className={styles.cultureDescription}>{culture.description}</p>
      </section>

      {/* Additional Details Section */}
      <section className={styles.detailsSection}>
        <h2 className={styles.sectionTitle}>Additional Details</h2>
        <ul className={styles.detailsList}>
          <li>
            <FaCheckCircle className={styles.activeIcon} />
            <strong>Is Active:</strong> {culture.is_active ? 'Yes' : 'No'}
          </li>
          {culture.city_id && (
            <li>
              <FaMapMarkerAlt />
              <strong>City:</strong> {getCityName(culture.city_id)}
            </li>
          )}
          {culture.township_id && (
            <li>
              <FaMapMarkerAlt />
              <strong>Township:</strong> {getTownshipName(culture.township_id)}
            </li>
          )}
          {culture.village_id && (
            <li>
              <FaMapMarkerAlt />
              <strong>Village:</strong> {getVillageName(culture.village_id)}
            </li>
          )}
        </ul>
      </section>
    </div>
  );
};

export default CultureDetail;