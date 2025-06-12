// "use client";

// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import styles from './ArticleCategoryList.module.css';  

// const ArticleCategoryListPage = ({ categories }) => {
//   if (!categories || categories.length === 0) {
//     return <p className={styles.noCategories}>No article categories found.</p>;
//   }

//   return (
//     <div className={styles.categoryListPageContainer}>
//       <h1 className={styles.pageTitle}>Article Categories</h1>
//       <div className={styles.categoriesGrid}>
//         {categories.map(category => (
//           <Link key={category.id} href={`/article-categories/${category.slug}`} className={styles.categoryCardLink}>
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
//                 <span className={styles.viewCategoryButton}>View Articles &rarr;</span>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ArticleCategoryListPage;

//*** with API ***/
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ArticleCategoryList.module.css';
import Loading from '../../components/ui/Loading/Loading';

const ArticleCategoryListPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticleCategories = async () => {
      try {
        const response = await fetch('/api/v1/article-categories'); 
        if (!response.ok) {
          throw new Error(`Failed to fetch article categories: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching article categories:', error);
        setError('Failed to load article categories');
        setLoading(false);
      }
    };

    fetchArticleCategories();
  }, []);

  if (loading) {
    return (
      <div className={styles.categoryListPageContainer}>
        <Loading message="Loading article categories..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.categoryListPageContainer}>
        <h1 className={styles.pageTitle}>Article Categories</h1>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!categories || categories.length === 0) {
    return (
      <div className={styles.categoryListPageContainer}>
        <h1 className={styles.pageTitle}>Article Categories</h1>
        <p className={styles.noCategories}>No article categories found.</p>
      </div>
    );
  }

  return (
    <div className={styles.categoryListPageContainer}>
      <h1 className={styles.pageTitle}>Article Categories</h1>
      <div className={styles.categoriesGrid}>
        {categories.map(category => (
          <Link key={category.id} href={`/article-categories/${category.slug}`} className={styles.categoryCardLink}>
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
                <span className={styles.viewCategoryButton}>View Articles &rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticleCategoryListPage;