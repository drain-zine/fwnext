import React from "react";
//import Draggable from "../../components/Draggable/Draggable";
import styles from './LinkTile.module.scss';
import dynamic from 'next/dynamic';

const Draggable = dynamic(()=> import("../../components/Draggable/Draggable"), { ssr: false });
  

const LinkTile = () => {

    return(
        <Draggable>
            <section className={styles.tile}>
                <header className={styles.tileHeader}>

                </header>
                <main className={styles.tileBody}>
                    <section className={styles.leftSideBar}>
                        <div className={styles.vertical}>
                            <div>
                                <p className={styles.excludeAlign}>0.000</p>
                                <p className={styles.excludeAlign}>Drain Magazine</p>
                                <p className={styles.excludeAlign}>Edition Number: 00-666-00</p>
                            </div>
                            <p>FOUNTAIN</p>
                            <p>0.00</p>
                            
                        </div>
                        <div>
                            
                        </div>
                    </section>

                    <section className={styles.content}>

                    </section>

                    <section className={styles.rightSideBar}>
                       <div className={styles.vertical}>
                            <div></div>
                            <p>Drain</p>
                            <p>1.00</p>
                            
                        </div>
                    </section>

                </main>
            </section>
        </Draggable>
    );

};

export default LinkTile;