"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './DestinationCategoryList.module.css'; 

const DestinationCategoryListPage = ({ categories }) => {
  if (!categories || categories.length === 0) {
    return (
      <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
        <h1 className={styles.pageTitle}>Destination Categories</h1>
        <p className={styles.noItemsText}>No destination categories found at the moment. Please check back later!</p>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Explore Destination Categories</h1>
      <p className={styles.pageSubtitle}>Find destinations based on your interests and travel style.</p>
      <div className={styles.categoriesGrid}>
        {categories.map(category => (
          <Link key={category.id} href={`/destination-categories/${category.slug}`} className={styles.categoryCardLink}>
            <div className={styles.categoryCard}>
              {category.image_url && (
                <div className={styles.categoryImageWrapper}>
                  <Image
                    src={category.image_url}
                    alt={`Image for ${category.name}`}
                    layout="fill"
                    objectFit="cover"
                    className={styles.categoryImage}
                  />
                </div>
              )}
              <div className={styles.categoryInfo}>
                <h2 className={styles.categoryName}>{category.name}</h2>
                {category.description && (
                  <p className={styles.categoryDescription}>
                    {category.description.substring(0, 100)}
                    {category.description.length > 100 ? '...' : ''}
                  </p>
                )}
                <span className={styles.viewDetailsButton}>View Destinations &rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DestinationCategoryListPage;

//*** with API ***/
// "use client";

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import styles from './DestinationCategoryList.module.css';
// import Loading from '../../components/ui/Loading/Loading';

// const DestinationCategoryListPage = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchDestinationCategories = async () => {
//       try {
//         const response = await fetch('/api/v1/destination-categories'); 
//         if (!response.ok) {
//           throw new Error(`Failed to fetch destination categories: ${response.status} ${response.statusText}`);
//         }
//         const data = await response.json();
//         setCategories(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching destination categories:', error);
//         setError('Failed to load destination categories');
//         setLoading(false);
//       }
//     };

//     fetchDestinationCategories();
//   }, []);

//   if (loading) {
//     return (
//       <div className={styles.pageContainer}>
//         <Loading message="Loading destination categories..." />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
//         <h1 className={styles.pageTitle}>Destination Categories</h1>
//         <p>Error: {error}</p>
//       </div>
//     );
//   }

//   if (!categories || categories.length === 0) {
//     return (
//       <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
//         <h1 className={styles.pageTitle}>Destination Categories</h1>
//         <p className={styles.noItemsText}>No destination categories found at the moment. Please check back later!</p>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.pageContainer}>
//       <h1 className={styles.pageTitle}>Explore Destination Categories</h1>
//       <p className={styles.pageSubtitle}>Find destinations based on your interests and travel style.</p>
//       <div className={styles.categoriesGrid}>
//         {categories.map(category => (
//           <Link key={category.id} href={`/destination-categories/${category.slug}`} className={styles.categoryCardLink}>
//             <div className={styles.categoryCard}>
//               {category.image_url && (
//                 <div className={styles.categoryImageWrapper}>
//                   <Image
//                     src={category.image_url}
//                     alt={`Image for ${category.name}`}
//                     layout="fill"
//                     objectFit="cover"
//                     className={styles.categoryImage}
//                   />
//                 </div>
//               )}
//               <div className={styles.categoryInfo}>
//                 <h2 className={styles.categoryName}>{category.name}</h2>
//                 {category.description && (
//                   <p className={styles.categoryDescription}>
//                     {category.description.substring(0, 100)}
//                     {category.description.length > 100 ? '...' : ''}
//                   </p>
//                 )}
//                 <span className={styles.viewDetailsButton}>View Destinations &rarr;</span>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DestinationCategoryListPage;

//*** with Pagination ***/
// "use client";

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import styles from './DestinationCategoryList.module.css';
// import Loading from '../../components/ui/Loading/Loading';
// import Pagination from '../../components/ui/Pagination/Pagination';

// const DestinationCategoryListPage = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [perPage, setPerPage] = useState(6);
//     const [totalItems, setTotalItems] = useState(0);
//     const [totalPages, setTotalPages] = useState(0);

//   useEffect(() => {
//     const fetchDestinationCategories = async () => {
//       try {
//         console.log(`Fetching page ${currentPage} with ${perPage} items per page`);
//         const response = await fetch(`/api/v1/destination-categories?page=${currentPage}&per_page=${perPage}`); 
//         if (!response.ok) {
//           throw new Error(`Failed to fetch destination categories: ${response.status} ${response.statusText}`);
//         }
//         const data = await response.json();
//           console.log("API Data:", data);
//           setCategories(data.data);
//           setTotalItems(data.total);
//           setTotalPages(data.last_page);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching destination categories:', error);
//         setError('Failed to load destination categories');
//         setLoading(false);
//       }
//     };

//     fetchDestinationCategories();
//   }, [currentPage, perPage]);

//     const handlePageChange = (newPage) => {
//         console.log("New Page:", newPage);
//         setCurrentPage(newPage);
//     };

//     const handlePerPageChange = (newPerPage) => {
//         console.log("New Per Page:", newPerPage);
//         setPerPage(newPerPage);
//         setCurrentPage(1);
//     };

//   if (loading) {
//     return (
//       <div className={styles.pageContainer}>
//         <Loading message="Loading destination categories..." />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
//         <h1 className={styles.pageTitle}>Destination Categories</h1>
//         <p>Error: {error}</p>
//       </div>
//     );
//   }

//   if (!categories || categories.length === 0) {
//     return (
//       <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
//         <h1 className={styles.pageTitle}>Destination Categories</h1>
//         <p className={styles.noItemsText}>No destination categories found at the moment. Please check back later!</p>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.pageContainer}>
//       <h1 className={styles.pageTitle}>Explore Destination Categories</h1>
//       <p className={styles.pageSubtitle}>Find destinations based on your interests and travel style.</p>
//       <div className={styles.categoriesGrid}>
//         {categories.map(category => (
//           <Link key={category.id} href={`/destination-categories/${category.slug}`} className={styles.categoryCardLink}>
//             <div className={styles.categoryCard}>
//               {category.image_url && (
//                 <div className={styles.categoryImageWrapper}>
//                   <Image
//                     src={category.image_url}
//                     alt={`Image for ${category.name}`}
//                     layout="fill"
//                     objectFit="cover"
//                     className={styles.categoryImage}
//                   />
//                 </div>
//               )}
//               <div className={styles.categoryInfo}>
//                 <h2 className={styles.categoryName}>{category.name}</h2>
//                 {category.description && (
//                   <p className={styles.categoryDescription}>
//                     {category.description.substring(0, 100)}
//                     {category.description.length > 100 ? '...' : ''}
//                   </p>
//                 )}
//                 <span className={styles.viewDetailsButton}>View Destinations &rarr;</span>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//         <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             totalItems={totalItems}
//             perPage={perPage}
//             onPageChange={handlePageChange}
//             onPerPageChange={handlePerPageChange}
//         />
//     </div>
//   );
// };

// export default DestinationCategoryListPage;