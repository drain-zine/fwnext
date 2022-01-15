import React from "react";
import styles from './LinkTile.module.scss';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import Link from 'next/link'

const Draggable = dynamic(()=> import("../../components/Draggable/Draggable"), { ssr: false });
  

const LinkTile = () => {

    return(
        <Draggable>
            <section className={styles.tile}>
                <header className={styles.tileHeader}>

                </header>
                <main className={styles.tileBody}>
                    <section className={styles.leftSideBar}>
                        <div className={classnames(styles.bar,styles.verticalL)}>
                            <div>
                                <p className={styles.excludeAlign}>0.000</p>
                                <p className={styles.excludeAlign}>Drain Magazine</p>
                                <p className={styles.excludeAlign}>Edition Number: 00-666-00</p>
                            </div>
                            <p>FOUNTAIN</p>
                            <p>0.00</p>
                            
                        </div>
                    
                        <div className={classnames(styles.bar)}>
                            <p className={styles.verticalText}>Travoux De Fontaine</p>     
                        </div>
                    </section>

                    <section className={styles.content}>
                        <h1 className={styles.temp1}>Drain Magazine <Link href="/drain00">Edition 000</Link></h1>
                        <p className={styles.temp2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia, dolor et commodo fermentum, nibh tortor pellentesque enim, et rutrum eros sem vel enim. Fusce dictum lorem sem, ac efficitur purus faucibus et. Nunc laoreet nisi non volutpat accumsan. Nullam tempor turpis et ultrices varius. Sed ac finibus metus, et consequat risus. Proin sollicitudin vehicula tellus id ullamcorper. Nunc in urna in arcu pulvinar facilisis quis eget sem.</p>
                    </section>

                    <section className={classnames(styles.rightSideBar, styles.verticalR)}>
                       <div className={classnames(styles.bar,styles.verticalR)}>
                       <p>1.00</p>
                            <p>Drain</p>
                            
                            <div></div>
                        </div>
                    </section>

                </main>
            </section>
        </Draggable>
    );

};

export default LinkTile;