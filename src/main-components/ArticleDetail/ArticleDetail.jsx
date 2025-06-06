'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ArticleDetail.module.css';
import Breadcrumbs from '../../components/ui/Breadcrumbs/Breadcrumbs';

const ArticleDetailPage = ({ article }) => {
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