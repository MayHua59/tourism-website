// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import styles from './ArticleDetail.module.css';
// import Breadcrumbs from '../../components/ui/Breadcrumbs/Breadcrumbs';

// const ArticleDetailPage = ({ article }) => {
//   if (!article) {
//     return (
//       <div className={styles.pageContainer}>
//         <h1>Article Not Found</h1>
//         <p>The article you are looking for does not exist.</p>
//         <Link href="/articles">
//           Back to Articles
//         </Link>
//       </div>
//     );
//   }

//   const segments = [
    
//     { label: 'Articles', url: '/articles' },
//     { label: article.name },
//   ];

//   return (
//     <div className={styles.pageContainer}>
//       <Breadcrumbs segments={segments} />
//       <header className={styles.articleHeader}>
//         <h1 className={styles.articleTitle}>{article.name}</h1>
//       </header>

//       {article.image_url && (
//         <div className={styles.articleImageWrapper}>
//           <Image
//             src={article.image_url}
//             alt={article.name}
//             layout="fill"
//             objectFit="cover"
//             className={styles.articleImage}
//           />
//         </div>
//       )}

//       <article className={styles.articleContent}>
//         {article.description}
//       </article>

//       <footer className={styles.articleFooter}>
//         <Link href="/articles">
//           Back to Articles
//         </Link>
//       </footer>
//     </div>
//   );
// };

// export default ArticleDetailPage;

// *** with API ***//
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ArticleDetail.module.css';
import Breadcrumbs from '../../components/ui/Breadcrumbs/Breadcrumbs';
import Loading from '../../components/ui/Loading/Loading';

const ArticleDetailPage = ({ slug }) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchArticle = async () => {
      const apiUrl = `/api/v1/articles/${slug}`;  
      console.log("Fetching article from:", apiUrl);  
      try {
        const response = await fetch(`/api/v1/articles/${slug}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch article: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setArticle(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching article:', error);
        setError('Failed to load article');
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className={styles.pageContainer}>
        <Loading message="Loading article..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.pageContainer}>
        <h1>Error</h1>
        <p>{error}</p>
        <Link href="/articles">
          Back to Articles
        </Link>
      </div>
    );
  }

  if (!article) {
    return (
      <div className={styles.pageContainer}>
        <h1>Article Not Found</h1>
        <p>The article you are looking for does not exist.</p>
        <Link href="/articles">
          Back to Articles
        </Link>
      </div>
    );
  }

  const segments = [
    
    { label: 'Articles', url: '/articles' },
    { label: article.name },
  ];

  return (
    <div className={styles.pageContainer}>
      <Breadcrumbs segments={segments} />
      <header className={styles.articleHeader}>
        <h1 className={styles.articleTitle}>{article.name}</h1>
      </header>

      {article.image_url && (
        <div className={styles.articleImageWrapper}>
          <Image
            src={article.image_url}
            alt={article.name}
            layout="fill"
            objectFit="cover"
            className={styles.articleImage}
            
          />
        </div>
      )}

      <article className={styles.articleContent}>
        {article.description}
      </article>

      <footer className={styles.articleFooter}>
        <Link href="/articles">
          Back to Articles
        </Link>
      </footer>
    </div>
  );
};

export default ArticleDetailPage;