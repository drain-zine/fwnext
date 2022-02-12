import React, { useState } from 'react';
import styles from './ScrollPanel.module.scss';
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
        height: "auto"
    },
    closed: {
      opacity: 0,
      height: 0
    }
  };


const ScrollPanel = () => {
    const [isOpen, setIsOpen] = useState(null);

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

                {Object.keys(testData).map((item, i) => (
                    <motion.div
                        animate={isOpen === i ? "open" : "closed"}
                        variants={itemVariants}
                        className={classnames(styles.item, styles[randomFonts[i]])} onClick={() => isOpenCallback(i)}
                    >
                        <p>{testData[item].length > 0 ? item : testData[item].name}</p>
                        {testData[item].length > 0 ? testData[item].map(subItem => (
                            <motion.div 
                                className={styles.subItem}
                                variants={subItemVariants}
                                animate={isOpen === i ? "open" : "closed"}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                            {subItem.name}</motion.div>
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