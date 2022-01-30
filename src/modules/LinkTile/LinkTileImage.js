import React from "react";
import styles from './LinkTile.module.scss';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import Link from 'next/link';
import Image from'next/image';
import test from './assets/ConciousnessCollage.png';


const Draggable = dynamic(()=> import("../../components/Draggable/Draggable"), { ssr: false });
  

const LinkTileImage = () => {

    const route = "digital-active-consciousness";

    return(
        <Draggable>
            <section className={styles.tile}>
                <header className={styles.tileHeader}>

                </header>
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
        </Draggable>
    );

};

export default LinkTileImage;