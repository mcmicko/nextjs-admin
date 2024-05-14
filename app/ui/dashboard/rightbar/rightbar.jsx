import React from 'react';
import styles from './rightbar.module.css';
import Image from 'next/image';
import { MdPlayCircleFilled } from 'react-icons/md';

const rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src='/astronaut.png' alr='' fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Available Now</span>
          <h3 className={styles.title}>
            How to use the new version of the admin dashboard
          </h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
            deserunt ut, cumque provident dolor eius eveniet unde, dolorem
            placeat molestias dicta quisquam. Quos, alias totam nostrum nemo hic
            minima assumenda?
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled /> Watch
          </button>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notification}>Available Now</span>
          <h3 className={styles.title}>
            How to use the new version of the admin dashboard
          </h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
            deserunt ut, cumque provident dolor eius eveniet unde, dolorem
            placeat molestias dicta quisquam. Quos, alias totam nostrum nemo hic
            minima assumenda?
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled /> Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default rightbar;
