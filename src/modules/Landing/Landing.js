import React, { useEffect } from 'react';
import styles from './Landing.module.scss';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import profilePic from './assets/FWLogo.png';
const WebampCS = dynamic(()=> import("../../components/WebampWrapper/WebampWrapper"), { ssr: false });
  
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
        <WebampCS />
    </main>
  );
};

export default Landing;