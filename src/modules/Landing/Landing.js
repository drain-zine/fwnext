import React from 'react';
import styles from './Landing.module.scss';
import Image from 'next/image'
import profilePic from './assets/FWLogo.png'

const Landing = () => {
  return (
    <main className={styles.page}>
        <div className={styles.logo}>
          <Image 
            src={profilePic}
            width={750}
            height={750}
          />
        </div>
    </main>
  );
};

export default Landing;