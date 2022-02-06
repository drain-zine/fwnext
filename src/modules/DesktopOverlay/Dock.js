import React from 'react';
import styles from './Dock.module.scss';
import { useMotionValue } from 'framer-motion';
import ImageMagnify from './ImageMagnify';
import wizard from "../../components/HomeButton/assets/wizard.gif";


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
            </div>
        </div>
    );
};

export default Dock;