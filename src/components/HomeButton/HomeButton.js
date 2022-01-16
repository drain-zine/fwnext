import React from "react";
import Link from "next/link";
import Image from "next/image";
import classnames from 'classnames';

import wizard from "./assets/wizard.gif";
import styles from "./HomeButton.module.scss"
import Draggable from "../Draggable/Draggable";


const HomeButton = ({className}) => {
    return(
        <Draggable className={className}>
            <div className={styles.panel}>
                <Link href="/">
                    <div className={styles.container}>
                    <Image 
                        src={wizard}
                        width={"100%"}
                        height={"100%"}
                    />
                    <p className={styles.text}>Home</p>
                    </div>
                </Link>
                <div className={styles.audioWrapper}>
                    <audio controls src='BellaCiao.mp3'>
                        Your browser does not support the
                        <code>audio</code> element.
                    </audio>
                </div>
            </div>
        </Draggable>
    );
};

export default HomeButton;