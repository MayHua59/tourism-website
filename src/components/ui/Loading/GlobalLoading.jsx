import React from 'react';
import { BeatLoader } from 'react-spinners';
import styles from './GlobalLoading.module.css';
const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <BeatLoader color="#36D7B7" />
      <p>Loading...</p>
    </div>
  )
}

export default Loading