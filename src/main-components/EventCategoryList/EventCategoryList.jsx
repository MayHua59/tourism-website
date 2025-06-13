// "use client";

// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import  eventCategoriesData  from '../../data/event-categories';
// import styles from './EventCategoryList.module.css';
// import EventCategoryCard from '../../components/ui/EventCategoryCard/EventCategoryCard';

// const EventCategoryListPage = () => {
//   if (!eventCategoriesData || eventCategoriesData.length === 0) {
//     return (
//       <div className={styles.pageContainer}>
//         <h1 className={styles.pageTitle}>Event Categories</h1>
//         <p className={styles.noItemsText}>No event categories found. Please check back later.</p>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.pageContainer}>
//       <header className={styles.header}>
//         <h1 className={styles.pageTitle}>Myanmar&rsquo;s Event Categories</h1>
//         <p className={styles.pageSubtitle}>
//           From vibrant festivals to solemn ceremonies, explore the types of events Myanmar offers.
//         </p>
//       </header>

//       <div className={styles.itemGrid}>
//         {eventCategoriesData.map(category => (
//           <EventCategoryCard key={category.id} category={category} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventCategoryListPage;

// // ******* with API ***********//
// // "use client";

// // import React from 'react';
// // import Link from 'next/link';
// // import Image from 'next/image';
// // import styles from './EventCategoryList.module.css'; 

// // const EventCategoryListPage = ({ categories }) => {
// //   if (!categories || categories.length === 0) {
// //     return (
// //       <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
// //         <h1 className={styles.pageTitle}>Event Categories</h1>
// //         <p className={styles.noItemsText}>No event categories found at the moment. Please check back later!</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className={styles.pageContainer}>
// //       <h1 className={styles.pageTitle}>Explore Events by Category</h1>
// //       <p className={styles.pageSubtitle}>Find events based on your interests.</p>
// //       <div className={styles.categoriesGrid}>
// //         {categories.map(category => (
// //           <Link key={category.id} href={`/event-categories/${category.slug}`} className={styles.categoryCardLink}>
// //             <div className={styles.categoryCard}>
// //               {category.image_url && (
// //                 <div className={styles.categoryImageWrapper}>
// //                   <Image
// //                     src={category.image_url}
// //                     alt={`Image for ${category.name}`}
// //                     layout="fill"
// //                     objectFit="cover"
// //                     className={styles.categoryImage}
// //                   />
// //                 </div>
// //               )}
// //               <div className={styles.categoryInfo}>
// //                 <h2 className={styles.categoryName}>{category.name}</h2>
// //                 {category.description && (
// //                   <p className={styles.categoryDescription}>
// //                     {category.description.substring(0, 100)}
// //                     {category.description.length > 100 ? '...' : ''}
// //                   </p>
// //                 )}
// //                 <span className={styles.viewCategoryButton}>View Events &rarr;</span>
// //               </div>
// //             </div>
// //           </Link>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default EventCategoryListPage;

//*** with API ***/
// "use client";

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import styles from './EventCategoryList.module.css';
// import EventCategoryCard from '../../components/ui/EventCategoryCard/EventCategoryCard';
// import Loading from '../../components/ui/Loading/Loading'; 

// const EventCategoryListPage = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchEventCategories = async () => {
//       try {
//         const response = await fetch('/api/v1/event-categories'); 
//         if (!response.ok) {
//           throw new Error(`Failed to fetch event categories: ${response.status} ${response.statusText}`);
//         }
//         const data = await response.json();
//         setCategories(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching event categories:', error);
//         setError('Failed to load event categories');
//         setLoading(false);
//       }
//     };

//     fetchEventCategories();
//   }, []);

//   if (loading) {
//     return (
//       <div className={styles.pageContainer}>
//         <Loading message="Loading event categories..." />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className={styles.pageContainer}>
//         <h1 className={styles.pageTitle}>Event Categories</h1>
//         <p>Error: {error}</p>
//       </div>
//     );
//   }

//   if (!categories || categories.length === 0) {
//     return (
//       <div className={styles.pageContainer}>
//         <h1 className={styles.pageTitle}>Event Categories</h1>
//         <p className={styles.noItemsText}>No event categories found. Please check back later.</p>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.pageContainer}>
//       <header className={styles.header}>
//         <h1 className={styles.pageTitle}>Myanmar&rsquo;s Event Categories</h1>
//         <p className={styles.pageSubtitle}>
//           From vibrant festivals to solemn ceremonies, explore the types of events Myanmar offers.
//         </p>
//       </header>

//       <div className={styles.itemGrid}>
//         {categories.map(category => (
//           <EventCategoryCard key={category.id} category={category} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventCategoryListPage;

//*** with Pagination ***/
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './EventCategoryList.module.css';
import EventCategoryCard from '../../components/ui/EventCategoryCard/EventCategoryCard';
import Loading from '../../components/ui/Loading/Loading';
import Pagination from '../../components/ui/Pagination/Pagination';

const EventCategoryListPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(2);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchEventCategories = async () => {
      try {
        console.log(`Fetching page ${currentPage} with ${perPage} items per page`);
        const response = await fetch(`/api/v1/event-categories?page=${currentPage}&per_page=${perPage}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch event categories: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log("API Data:", data);
        setCategories(data.data);
        setTotalItems(data.total);
        setTotalPages(data.last_page);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching event categories:', error);
        setError('Failed to load event categories');
        setLoading(false);
      }
    };

    fetchEventCategories();
  }, [currentPage, perPage]);

  const handlePageChange = (newPage) => {
    console.log("New Page:", newPage);
    setCurrentPage(newPage);
  };

  const handlePerPageChange = (newPerPage) => {
    console.log("New Per Page:", newPerPage);
    setPerPage(newPerPage);
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <div className={styles.pageContainer}>
        <Loading message="Loading event categories..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>Event Categories</h1>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!categories || categories.length === 0) {
    return (
      <div className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>Event Categories</h1>
        <p className={styles.noItemsText}>No event categories found. Please check back later.</p>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Myanmar&rsquo;s Event Categories</h1>
        <p className={styles.pageSubtitle}>
          From vibrant festivals to solemn ceremonies, explore the types of events Myanmar offers.
        </p>
      </header>

      <div className={styles.itemGrid}>
        {categories.map(category => (
          <EventCategoryCard key={category.id} category={category} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        perPage={perPage}
        onPageChange={handlePageChange}
        onPerPageChange={handlePerPageChange}
      />
    </div>
  );
};

export default EventCategoryListPage;