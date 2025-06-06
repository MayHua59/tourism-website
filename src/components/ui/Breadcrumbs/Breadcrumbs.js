import React from 'react';
import Link from 'next/link';
import styles from './Breadcrumbs.module.css'; 

const Breadcrumbs = ({ segments }) => {
  return (
    <nav className={styles.breadcrumbs}>
      <Link href="/" className={styles.breadcrumbLink}>
        Home
      </Link>
      {segments.map((segment, index) => (
        <React.Fragment key={index}>
          <span className={styles.breadcrumbSeparator}>&gt;</span>
          {segment.url ? (
            <Link href={segment.url} className={styles.breadcrumbLink}>
              {segment.label}
            </Link>
          ) : (
            <span className={styles.breadcrumbCurrent}>{segment.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;