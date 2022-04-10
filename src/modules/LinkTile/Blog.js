import React from "react";
import styles from './LinkTile.module.scss';
import classnames from 'classnames';
import Link from 'next/link';
import Image from'next/image';
import test from './assets/ConciousnessCollage.png';
import MacWindow from "../../components/macOS/MacWindow/MacWindow";
import Blog  from '../../modules/blog/Blog';
import getRandomTransform from "../../utils/getRandomTransform";

const BlogTile = () => {
    const route = "digital-active-consciousness";

    return(
        <MacWindow 
            transformPosition={getRandomTransform()} 
            title={'Digital Active Concioussness'}
            maximiseComponent={<Blog/>}
        >
            <section className={styles.tile}>
                <div className={styles.bgWrap}>
                    <Image 
                        src={test}
                    />    
                </div> 
                <main className={styles.tileBody} style={{backgroundImage: "url("+test+")"}}>   
                    <section className={styles.leftSideBar}>
                        <div className={classnames(styles.bar,styles.verticalL)}>
                        </div>
                    
                        <div className={classnames(styles.bar)}>
                            <p className={styles.verticalText}>Travoux De Fontaine</p>     
                        </div>
                    </section>

                    <section className={styles.content}>
                        <div className={styles.imageOverlay}>
                            <h2 style={{marginLeft: "0%"}}className={styles.imageHeading}><Link href={route}>Digital</Link></h2>
                            <h2 style={{marginLeft: "20%"}} className={styles.imageHeading}><Link href={route}>Active</Link></h2>
                            <h2  style={{marginLeft: "40%"}}className={styles.imageHeading}><Link href={route}>Conciousness</Link></h2>
                        </div>
                        <p className={styles.subHeading}>Fountain Works 002</p>
                    </section>

                    <section className={classnames(styles.rightSideBar, styles.verticalR)}>
        
                    </section>

                </main>
            </section>
        </MacWindow>
    );

};

export default BlogTile;