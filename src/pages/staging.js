import React from 'react';
import HomeButton from '../components/HomeButton/HomeButton';
import DesktopOverlay from "../modules/DesktopOverlay/DesktopOverlay";
import dynamic from 'next/dynamic';
const WebampCS = dynamic(()=> import("../components/WebampWrapper/WebampWrapper"), { ssr: false });

const Staging = () => {
    return(
        <DesktopOverlay style={{backgroundColor: "gray"}}>
            <h2 style={{margin: "0", fontSize: "18rem", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)"}}>CONTENT</h2>
            <HomeButton />
            <WebampCS />
        </DesktopOverlay>  
    );
};

export default Staging;