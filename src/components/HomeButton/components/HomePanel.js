import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import home from '../assets/home.jpg';
import styles from './HomePanel.module.scss';

const HomePanel = () => {
    const width = 200;
    return(
    <Link href="/">   
        <div className={styles.imagePane}>
            <Image 
                height={1.27 * width}
                width={width}
                src={home} />
            <p>Take Me Home</p>    
        </div>
    </Link> 
    );
};

export default HomePanel;