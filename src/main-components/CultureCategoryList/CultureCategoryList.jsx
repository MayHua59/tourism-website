// "use client";

// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import  cultureCategoriesData  from '../../data/culture-categories';
// import styles from './CultureCategoryList.module.css';

// const CultureCategoryListPage = () => {
//   if (!cultureCategoriesData || cultureCategoriesData.length === 0) {
//     return (
//       <div className={styles.pageContainer}>
//         <h1 className={styles.pageTitle}>Culture Categories</h1>
//         <p className={styles.noItemsText}>No culture categories found. Please check back later.</p>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.pageContainer}>
//       <header className={styles.header}>
//         <h1 className={styles.pageTitle}>Discover Myanmar's Culture</h1>
//         <p className={styles.pageSubtitle}>
//           Explore the rich tapestry of traditions, arts, and lifestyles that define Myanmar.
//         </p>
//       </header>

//       <div className={styles.itemGrid}>
//         {cultureCategoriesData.map(category => (
//           <Link key={category.id} href={`/culture-categories/${category.slug}`} className={styles.categoryLink}>
//             <div className={styles.interactiveCard}>
//               <div className={styles.imageWrapper}>
//                 {category.image_url && (
//                   <Image
//                     src={category.image_url}
//                     alt={`Image for ${category.name}`}
//                     className={styles.categoryImage}
//                     fill
//                     objectFit="cover"
//                     priority={category.id <= 3}
//                   />
//                 )}
//               </div>
//               <div className={styles.categoryContent}>
//                 <h2 className={styles.categoryName}>{category.name}</h2>
//                 <p className={styles.categoryDescription}>
//                   {category.description ? category.description.substring(0, 100) + (category.description.length > 100 ? '...' : '') : 'No description available.'}
//                 </p>
//                 <span className={styles.viewMore}>Explore &rarr;</span>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CultureCategoryListPage;

//*** with API ***/
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CultureCategoryList.module.css';
import Loading from '../../components/ui/Loading/Loading'; 

const CultureCategoryListPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCultureCategories = async () => {
      try {
        const response = await fetch('/api/v1/culture-categories');
        if (!response.ok) {
          throw new Error(`Failed to fetch culture categories: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching culture categories:', error);
        setError('Failed to load culture categories');
        setLoading(false);
      }
    };

    fetchCultureCategories();
  }, []);

  if (loading) {
    return (
      <div className={styles.pageContainer}>
        <Loading message="Loading culture categories..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>Culture Categories</h1>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!categories || categories.length === 0) {
    return (
      <div className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>Culture Categories</h1>
        <p className={styles.noItemsText}>No culture categories found. Please check back later.</p>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Discover Myanmar's Culture</h1>
        <p className={styles.pageSubtitle}>
          Explore the rich tapestry of traditions, arts, and lifestyles that define Myanmar.
        </p>
      </header>

      <div className={styles.itemGrid}>
        {categories.map(category => (
          <Link key={category.id} href={`/culture-categories/${category.slug}`} className={styles.categoryLink}>
            <div className={styles.interactiveCard}>
              <div className={styles.imageWrapper}>
                {category.image_url && (
                  <Image
                    src={category.image_url}
                    alt={`Image for ${category.name}`}
                    className={styles.categoryImage}
                    fill
                    objectFit="cover"
                    priority={category.id <= 3}
                  />
                )}
              </div>
              <div className={styles.categoryContent}>
                <h2 className={styles.categoryName}>{category.name}</h2>
                <p className={styles.categoryDescription}>
                  {category.description ? category.description.substring(0, 100) + (category.description.length > 100 ? '...' : '') : 'No description available.'}
                </p>
                <span className={styles.viewMore}>Explore &rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CultureCategoryListPage;