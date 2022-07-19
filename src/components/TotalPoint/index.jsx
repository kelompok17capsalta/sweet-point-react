import React from 'react';
import styles from './style.module.css';

const TotalPoint = () => (
  <div className={`mb-4 mx-1 mb-xxl-0 ${styles.container_card}`}>
    <span className={styles.point}>30.000</span>
    <span className={styles.description}>Total Entry Points</span>
  </div>
);

export default TotalPoint;
