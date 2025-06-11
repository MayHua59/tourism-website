// 'use client';

// import React from 'react';
// import  articlesData  from '../../data/articles';
// import ArticleCard from '../../components/ui/ArticleCard/ArticleCard';
// import styles from './ArticleList.module.css';

// const ArticleListPage = () => {
//   return (
//     <div className={styles.pageContainer}>
//       <header className={styles.header}>
//         <h1 className={styles.pageTitle}>Travel Articles & Guides</h1>
//         <p className={styles.pageSubtitle}>
//           Discover insights, tips, and stories about traveling in Myanmar.
//         </p>
//       </header>

//       <div className={styles.articlesGrid}>
//         {articlesData.map(article => (
//           <ArticleCard key={article.id} article={article} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ArticleListPage;

//*** with API ***/
'use client';

import React, { useState, useEffect } from 'react';
import ArticleCard from '../../components/ui/ArticleCard/ArticleCard';
import styles from './ArticleList.module.css';
import Loading from '../../components/ui/Loading/Loading'; 

const ArticleListPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/v1/articles'); // Your API endpoint
        if (!response.ok) {
          throw new Error(`Failed to fetch articles: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setArticles(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setError('Failed to load articles');
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

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
    </div>
  );
};

export default ArticleListPage;