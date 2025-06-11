import React from 'react';
import { BeatLoader } from 'react-spinners';
import styles from './Loading.module.css'; // Create this CSS module

const Loading = ({ message = "Loading..." }) => {
  return (
    <div className={styles.loadingContainer}>
      <BeatLoader color="#00809D" />
      <p>{message}</p>
    </div>
  );
};

export default Loading;