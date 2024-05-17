import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>McMandic Dev</div>
      <div className={styles.text}>&copy; All rights reserved 2024</div>
    </div>
  );
};

export default Footer;
