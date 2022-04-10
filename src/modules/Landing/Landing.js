import React from 'react';
import styles from './Landing.module.scss';
import Image from 'next/image';
import profilePic from './assets/FWLogo.png';
import Drain00Tile from '../LinkTile/Drain00';
import BlogTile from '../LinkTile/Blog';
import CartiTile from '../LinkTile/Carti';
import EccoTile from '../LinkTile/Ecco';
  
const Landing = () => {

  return (
    <main className={styles.page}>
        <Drain00Tile />
        <BlogTile />
        <CartiTile />
        <EccoTile />
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