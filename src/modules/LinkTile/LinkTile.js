import React from "react";
//import Draggable from "../../components/Draggable/Draggable";
import styles from './LinkTile.module.scss';
import dynamic from 'next/dynamic';

const Draggable = dynamic(()=> import("../../components/Draggable/Draggable"), { ssr: false });
  

const LinkTile = () => {

    return(
        <Draggable>
            <div className={styles.tileBody}>

            </div>
        </Draggable>
    );

};

export default LinkTile;