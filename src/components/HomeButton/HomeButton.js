import React from "react";
import HomePanel from './components/HomePanel';
import ScrollPanel from './components/ScrollPanel';

import Finder from "../macOS/MacWindow/Finder";



const HomeButton = ({className}) => {
    return(
        <Finder title={'Home'} navText={['Home', 'Nimdod\'s Scroll']}>
           <HomePanel/>
           <ScrollPanel />
        </Finder>
    );
};

export default HomeButton;