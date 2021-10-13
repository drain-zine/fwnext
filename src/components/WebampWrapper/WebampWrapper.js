import React, { useEffect, useRef } from "react";
import Webamp from 'webamp';

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
};

const WebampWrapper = () => {
    const webampRef = useRef();

    useEffect(() => {
        if(webampRef.current === null){
            return
        }
        const webamp = new Webamp(WebampConfig);
    
        if(!Webamp.browserIsSupported()) {
            alert("Oh no! Webamp does not work!")
            throw new Error("What's the point of anything?")
        }

    
        webamp.renderWhenReady(webampRef.current);
    },[webampRef]);

    return(
        <div ref={webampRef}></div>
    );
};

export default WebampWrapper;