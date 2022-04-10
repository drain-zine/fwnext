import React from "react";
import styles from './LinkTile.module.scss';
import classnames from 'classnames';
import Link from 'next/link'
import MacWindow from '../../components/macOS/MacWindow/MacWindow';
import Drain00  from '../../modules/articles/drain00/Drain00';
import getRandomTransform from "../../utils/getRandomTransform";

const Drain00Tile = () => {

    return(
        <MacWindow 
            transformPosition={getRandomTransform()} 
            title={'Drain 00'}
            maximiseComponent={<Drain00 disableMatrix/>}
        >
            <section className={styles.tile}>
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
                        <p className={styles.temp2}>Both in Derrida’s original articulation of the concept, and its current recirculation, 15 years after Specters Of Marx, hauntology must be understood in relation to postmodernity. Postmodernism, in turn, has to be understood – as Jameson has taught us – as ‘the logic of late capitalism’. Postmodern temporality is captured by Fukuyama’s claim – everywhere officially disavowed, even by Fukuyma itself, even as, surreptitiously, it is universally accepted, operating as a kind of presupposition of the contemporary cultural unconscious – that we have reached the ‘end of History’. This is not only the conclusion of the process, but also the final cause to which everything has always been tending. End, then, in a double, appropriately Hegelian, sense: the terminus and the teleological goal.</p>
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
        </MacWindow>
    );

};

export default Drain00Tile;