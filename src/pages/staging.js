import React from 'react';
import MacWindow from '../components/macOS/MacWindow/MacWindow';
import DesktopOverlay from "../modules/DesktopOverlay/DesktopOverlay";

const Staging = () => {
    return(
        <DesktopOverlay style={{backgroundColor: "gray"}}>
            <h2 style={{margin: "0", fontSize: "18rem", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)"}}>CONTENT</h2>
            <MacWindow title={"Wagwan"}>
                <p> Hello !</p>
            </MacWindow>
        </DesktopOverlay>  
    );
};

export default Staging;