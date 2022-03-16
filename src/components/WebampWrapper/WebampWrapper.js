import React, { useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Webamp from 'webamp';
import { setWebampIsOpen } from "../../actions/Actions";
import styles from './WebampWrapper.module.scss';

const WebampConfig = {
    initialTracks: [{
    metaData: {
        artist: "The Limp",
        title: "My Favourite Song",
    },
    url: "nookie.mp3"
    }],
    initialSkin: {
        url: 'Sequel.wsz'
    },
    zIndex: 10
};

const WebampWrapper = () => {
    const webampRef = useRef();
    const dispatch = useDispatch();
    const webampIsOpen = useSelector(state => state.nav.webampIsOpen);

    const webamp = new Webamp(WebampConfig);

    if(!Webamp.browserIsSupported()) {
        alert("Oh no! Webamp does not work!")
        throw new Error("What's the point of anything?")
    }

    useEffect(() => {
        if(webampRef.current === null){
            return
        }
    
        webamp.onMinimize(() => {
            dispatch(setWebampIsOpen(false));
            webamp.close();
        });

        webamp.onClose(() => {
            const menuIcon = document.getElementById('webampIdKillMe');
            menuIcon.addEventListener('click', () => {
                webamp.reopen();
            });
        });
        
        webamp.renderWhenReady(webampRef.current);

        return () => {
            console.log('disposing');
            webamp.dispose();
        };

    },[webampRef]);

    useEffect(() => {
        if(webampIsOpen){
            console.log('should open wtf');
            webamp.reopen();
        }
    }, [webampIsOpen]);

    
    const minimise = useCallback(
        () => {
            console.log("Webamp closed");
            if(webampRef.current){
                console.log('ref');
                webampRef.current.style.display = 'none';
                console.log(webampRef.current.style);
            }
        },
        [webampRef],
    );

    return(
        <div ref={webampRef}></div>
    );
};

export default WebampWrapper;