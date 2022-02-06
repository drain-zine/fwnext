import React from "react";
import Link from "next/link";
import Image from "next/image";
import classnames from 'classnames';
import styles from './HomeButton.module.scss';
import home from './assets/home.jpg';

import Finder from "../macOS/MacWindow/Finder";



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

const HomeButton = ({className}) => {
    return(
        <Finder title={'Home'}>
           <HomePanel/>
        </Finder>
    );
};

export default HomeButton;