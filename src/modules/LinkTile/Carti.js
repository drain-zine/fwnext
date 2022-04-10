import React from 'react';
import MacWindow from "../../components/macOS/MacWindow/MacWindow";
import getYoutubeIframe from '../../utils/getYoutubeIframe';
import styles from './LinkTile.module.scss';
import getRandomTransform from "../../utils/getRandomTransform";

const link = "https://www.youtube.com/embed/Yo5dg1c5SFo";

const CartiTile = () => {


    return(
        <MacWindow 
            title={'Song.exe'}
            transformPosition={getRandomTransform()} 
            maximiseComponent={
                getYoutubeIframe(link, "100%", "auto")
            }
            disableMaximiseScroll
        >
            <main className={styles.tileBody}>
               {getYoutubeIframe(link, "1000", "auto")}
            </main>
        </MacWindow>
    );
};

export default CartiTile;