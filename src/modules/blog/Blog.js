import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import { CMS_STATUS } from '../../constants';
import styles from './Blog.module.scss';
import FadeInDiv from '../../components/Animated/FadeInDiv';
import dynamic from 'next/dynamic';
import useScrollToAnchor from '../../hooks/useScrollToAnchor';

const Blog = () => {

    const cmsStatus =  useSelector(state => state.cms.status) || undefined;
    const parsedCMS = useSelector(state => state.cms.parsedCMS) || undefined;
    const canvasRef = useRef(null);
    const commentsRef = useRef(null);

    useScrollToAnchor(globalThis);
    // // scroll to url anchor, react router doesnt like so we must implement ourselves
    // useEffect(() => {
    //     // get tar ID
    //     const hash = window.location.hash.substring(1);

    //     if(hash && hash.length){
    //         setTimeout(
    //             window.requestAnimationFrame(function () {
    //               const el = document.getElementById(hash)
    //               el.scrollIntoView()
    //               // clean up the hash, so we don't scroll on every prop update
    //               removeHash()
    //             }),
    //             0
    //           )
    //     }

    //     const removeHash = () => {
    //         const loc = window.location
    //         const hist = window.history
        
    //         // use modern browser history API
    //         if (hist && 'pushState' in hist) {
    //           hist.replaceState('', document.title, loc.pathname + loc.search)
    //         // fallback for older browsers
    //         } else {
    //           // prevent scrolling by storing the page's current scroll offset
    //           const scrollV = document.body.scrollTop
    //           const scrollH = document.body.scrollLeft
        
    //           loc.hash = ''
        
    //           // restore the scroll offset, should be flicker free
    //           document.body.scrollTop = scrollV
    //           document.body.scrollLeft = scrollH
    //         }
    //       }


    // },[]);

    useEffect(() => {
      if(!!canvasRef.current && !!commentsRef.current){
        const height = canvasRef.current.parentElement.clientHeight;
        commentsRef.current.style.height = height;
        console.log(height);
      }
    }, [canvasRef, commentsRef])

    // update DOM
    useEffect(() => {
        if(cmsStatus === CMS_STATUS.CMS_PARSED && !!parsedCMS && !!canvasRef.current){
            ReactDOM.render(parsedCMS, canvasRef.current); 
        }
    }, [cmsStatus, parsedCMS, canvasRef]); 

    return(
        <main className={styles.blog}>
            {/* header */}
            <header className={styles.blogHeader}>
                <h1><b>Digital Active Consciousness</b></h1>
            </header>
            {/* tiles */}
            <div className={styles.contentWrapper}>
              <div className={styles.cmsWrapper} ref={canvasRef}>
              </div>
              <FadeInDiv className={styles.comments} ref={commentsRef}>
                <h2>IDEATIONS</h2>
              </FadeInDiv>
            </div>
        </main>
    );
}

export default Blog;