import React from 'react';
import { useDispatch } from 'react-redux';
import { setWebampIsOpen, setHomeIsOpen } from "../../actions/Actions";
import styles from './Dock.module.scss';
import { useMotionValue } from 'framer-motion';
import ImageMagnify from './ImageMagnify';
import wizard from "./assets/wizard.gif";
import music from "./assets/music.gif"


const Dock = (props) => {
    const mouseX = useMotionValue(null);

    const dispatch = useDispatch();

    const homeOpenCallback = () => {
        dispatch(setHomeIsOpen(true));
    };

    const webampOpenCallback = () => {
        dispatch(setWebampIsOpen(true));
    };

    return(
        <div className={styles.dock}>
            <div className={styles.dockItems} onMouseMove={(event) => mouseX.set(event.nativeEvent.x)}
            onMouseLeave={() => mouseX.set(null)}>
                    <ImageMagnify
                        onClick={homeOpenCallback} 
                        className={styles.dockItem} 
                        src={wizard}
                        key={0}
                        mouseX={mouseX} />
                    <ImageMagnify
                        id={'webampIdKillMe'}
                        onClick={webampOpenCallback} 
                        className={styles.dockItem} 
                        src={music}
                        key={1}
                        mouseX={mouseX} />
            </div>
        </div>
    );
};

export default Dock;