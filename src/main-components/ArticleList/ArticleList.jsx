// // 'use client';

// // import React from 'react';
// // import  articlesData  from '../../data/articles';
// // import ArticleCard from '../../components/ui/ArticleCard/ArticleCard';
// // import styles from './ArticleList.module.css';

// // const ArticleListPage = () => {
// //   return (
// //     <div className={styles.pageContainer}>
// //       <header className={styles.header}>
// //         <h1 className={styles.pageTitle}>Travel Articles & Guides</h1>
// //         <p className={styles.pageSubtitle}>
// //           Discover insights, tips, and stories about traveling in Myanmar.
// //         </p>
// //       </header>

// //       <div className={styles.articlesGrid}>
// //         {articlesData.map(article => (
// //           <ArticleCard key={article.id} article={article} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ArticleListPage;

// //*** with API ***/
// 'use client';

// import React, { useState, useEffect } from 'react';
// import ArticleCard from '../../components/ui/ArticleCard/ArticleCard';
// import styles from './ArticleList.module.css';
// import Loading from '../../components/ui/Loading/Loading'; 

// const ArticleListPage = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         const response = await fetch('/api/v1/articles'); // Your API endpoint
//         if (!response.ok) {
//           throw new Error(`Failed to fetch articles: ${response.status} ${response.statusText}`);
//         }
//         const data = await response.json();
//         setArticles(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching articles:', error);
//         setError('Failed to load articles');
//         setLoading(false);
//       }
//     };

//     fetchArticles();
//   }, []);

//   if (loading) {
//     return (
//       <div className={styles.pageContainer}>
//         <Loading message="Loading articles..." />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className={styles.pageContainer}>
//         <header className={styles.header}>
//           <h1 className={styles.pageTitle}>Travel Articles & Guides</h1>
//         </header>
//         <p>Error: {error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.pageContainer}>
//       <header className={styles.header}>
//         <h1 className={styles.pageTitle}>Travel Articles & Guides</h1>
//         <p className={styles.pageSubtitle}>
//           Discover insights, tips, and stories about traveling in Myanmar.
//         </p>
//       </header>

//       <div className={styles.articlesGrid}>
//         {articles.map(article => (
//           <ArticleCard key={article.id} article={article} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ArticleListPage;

//** with Pagination ***/
'use client';

import React, { useState, useEffect } from 'react';
import ArticleCard from '../../components/ui/ArticleCard/ArticleCard';
import styles from './ArticleList.module.css';
import Loading from '../../components/ui/Loading/Loading';
import Pagination from '../../components/ui/Pagination/Pagination';

const ArticleListPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(2); 
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        console.log(`Fetching page ${currentPage} with ${perPage} items per page`);
        const response = await fetch(`/api/v1/articles?page=${currentPage}&per_page=${perPage}`); 
        if (!response.ok) {
          throw new Error(`Failed to fetch articles: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log("API Data:", data);
        setArticles(data.data); 
        setTotalItems(data.total); 
        setTotalPages(data.last_page); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setError('Failed to load articles');
        setLoading(false);
      }
    };

    fetchArticles();
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
        <Loading message="Loading articles..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.pageTitle}>Travel Articles & Guides</h1>
        </header>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Travel Articles & Guides</h1>
        <p className={styles.pageSubtitle}>
          Discover insights, tips, and stories about traveling in Myanmar.
        </p>
      </header>

      <div className={styles.articlesGrid}>
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
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

export default ArticleListPage;