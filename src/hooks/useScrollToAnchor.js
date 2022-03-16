import React from "react";

import { useEffect } from 'react';

const useScrollToAnchor = (window) => {
    // scroll to url anchor, react router doesnt like so we must implement ourselves
    useEffect(() => {
        // get tar ID
        const hash = window.location.hash.substring(1);

        if(hash && hash.length){
            setTimeout(
                window.requestAnimationFrame(function () {
                  const el = document.getElementById(hash)
                  el.scrollIntoView()
                  // clean up the hash, so we don't scroll on every prop update
                  removeHash()
                }),
                0
              )
        }

        const removeHash = () => {
            const loc = window.location
            const hist = window.history
        
            // use modern browser history API
            if (hist && 'pushState' in hist) {
              hist.replaceState('', document.title, loc.pathname + loc.search)
            // fallback for older browsers
            } else {
              // prevent scrolling by storing the page's current scroll offset
              const scrollV = document.body.scrollTop
              const scrollH = document.body.scrollLeft
        
              loc.hash = ''
        
              // restore the scroll offset, should be flicker free
              document.body.scrollTop = scrollV
              document.body.scrollLeft = scrollH
            }
          }


    },[]);
};

export default useScrollToAnchor;