import React from 'react';
import styles from './Dock.module.scss';
import { useMotionValue } from 'framer-motion';
import ImageMagnify from './ImageMagnify';
import wizard from "./assets/wizard.gif";
import music from "./assets/music.gif"


const Dock = (props) => {
    const mouseX = useMotionValue(null);

    return(
        <div className={styles.dock}>
            <div className={styles.dockItems} onMouseMove={(event) => mouseX.set(event.nativeEvent.x)}
            onMouseLeave={() => mouseX.set(null)}>
                    <ImageMagnify
                        onClick={props.openCallback} 
                        className={styles.dockItem} 
                        src={wizard}
                        key={0}
                        mouseX={mouseX} />
                    <ImageMagnify
                        onClick={props.openCallback} 
                        className={styles.dockItem} 
                        src={music}
                        key={1}
                        mouseX={mouseX} />
            </div>
        </div>
    );
};

export default Dock;