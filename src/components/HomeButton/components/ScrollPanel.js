import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './ScrollPanel.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import torch from './assets/torch.gif';
import classnames from 'classnames';
import skull from './assets/skull.png'

const randomFonts = [
    'halo',
    'barbarian',
    'god',
    'vampire'
];

const testData = {
    'Digital Active Concioussness': [{
        name: 'mushroom',
        link: 'hello'
    }, {
        name: 'bonito',
        link: 'test'
    }],
    'Dreamspace': [{
        name: 'Convex Reality',
        link: 'hello'
    }, {
        name: 'Trucking',
        link: 'test'
    }],
    'drain-00': {
        name: 'Drain00',
        link: '/drain-00'
    }
}

const itemVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

const subItemVariants = {
    open: {
        opacity: 1,
        height: "auto",
        marginBottom: "0.9rem"
    },
    closed: {
      opacity: 0,
      height: 0,
      marginBottom: 0
    }
  };


const ScrollPanel = () => {
    const [isOpen, setIsOpen] = useState(null);
    //const pages  = useSelector(state => state.nav.pages) || {};
    const pages = {
        'Digital Active Consciousness': [
          {
            name: 'Test',
            link: '/digital-active-consciousness#test'
          },
          {
            name: 'Test 2',
            link: '/digital-active-consciousness#test2'
          },
          {
            name: 'Test 3',
            link: '/digital-active-consciousness#test3'
          },
          {
            link: '/digital-active-consciousness',
            name: 'All'
          }
        ],
        'Drain 00': {
          link: '/drain00'
        },
        Home: {
          link: '/'
        }
      };


    const isOpenCallback = (i) => {
        if(i === isOpen){
            setIsOpen(null);
        }else{
            setIsOpen(i);
        }
    }

    return(
        <div className={styles.scrollWrapper}>
            <div className={styles.topBanner}/>
            <div className={styles.navWrapper}>
                <div className={styles.leftBanner}/>
                <div className={styles.rightBanner}/>
                <div className={styles.bottomBanner}/>

                <div className={styles.header}>
                    <div className={styles.torch}>
                        <Image 
                            layout={"fill"}
                            src={torch} />
                    </div>
                    <p>Scroll Of Navigation</p>
                    <div className={styles.torch}>
                        <Image 
                            layout={"fill"}
                            src={torch} />
                    </div>
                </div>

                {Object.keys(pages).map((item, i) => (
                    <motion.div
                        animate={isOpen === i ? "open" : "closed"}
                        variants={itemVariants}
                        className={classnames(styles.item, styles[randomFonts[i]])} onClick={() => isOpenCallback(i)}
                    >
                        
                        <p>{pages[item].length > 0 ? item : <Link href={pages[item].link}>{pages[item].name ? pages[item].name : item}</Link>}</p>
                        {pages[item].length > 0 ? pages[item].map(subItem => (
                            <motion.div 
                                className={styles.subItem}
                                variants={subItemVariants}
                                animate={isOpen === i ? "open" : "closed"}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                            <Link href={subItem.link}>{subItem.name}</Link></motion.div>
                        )) : null}
                    </motion.div>
                ))}
                <div className={styles.footer}>
                    <Image 
                        layout={'fill'}
                        src={skull}
                    />
                </div>
            </div>
        </div>
    );
};

export default ScrollPanel;