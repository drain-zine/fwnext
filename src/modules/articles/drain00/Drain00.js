import React, {useEffect, useRef} from 'react';
import classnames from 'classnames';
import styles from './Drain00.module.scss'
import Image from'next/image';

import possibilty from './assets/possibility.png'
import gnomehand from './assets/gnomehand.png'
import gnome from './assets/gnome.png'
import banner from './assets/banner.png'
import HomeButton from '../../../components/HomeButton/HomeButton';

const Drain00 = () => {
    const canvasx = 1000;
    const canvasy = 1300;

    const rightText = useRef();
    const bottomText = useRef();
    const iframeRef = useRef();

    // Append rainbow
    useEffect(() => {
        const shuffle = (array) => (array.sort(() => Math.random() - 0.5));
        const text = [rightText,bottomText];
        text.forEach((t) => {
            if(t.current){
                let color = [
                    "red",
                    "orange",
                    "yellow",
                    "green",
                    "blue",
                    "indigo",
                    "violet"
                ];
    
                color = shuffle(color);
    
                const children = t.current.children;
                for(let i = 0; i < children.length; i++){
                    children[i].style.color = color[i % color.length];
                    if(i % (color.length - 1 ) === 0){
                        color = shuffle(color);
                    }
                }
            }
        });
       
    }, [rightText, bottomText]);

    useEffect(() => {
        var canvas = document.body.firstChild.appendChild( document.createElement( 'canvas' ) ),
        context = canvas.getContext( '2d' );
        context.globalCompositeOperation = 'lighter';
        canvas.width = canvasx;
        canvas.height = canvasy;
        canvas.classList.add(styles.matrix);
        draw();

        var textStrip = ['d', 'o', 'w', 'n', 't', 'h', 'e', 'd', 'r', 'a', 'i', 'n'];

        var stripCount = 60, stripX = new Array(), stripY = new Array(), dY = new Array(), stripFontSize = new Array();

        for (var i = 0; i < stripCount; i++) {
            stripX[i] = Math.floor(Math.random()*1265);
            stripY[i] = -100;
            dY[i] = Math.floor(Math.random()*7)+3;
            stripFontSize[i] = Math.floor(Math.random()*16)+8;
        }

        var theColors = ['#cefbe4', '#81ec72', '#5cd646', '#54d13c', '#4ccc32', '#43c728'];

        var elem, context, timer;

        function drawStrip(x, y) {
            for (var k = 0; k <= 20; k++) {
                var randChar = textStrip[Math.floor(Math.random()*textStrip.length)];
                if (context.fillText) {
                    switch (k) {
                    case 0:
                        context.fillStyle = theColors[0]; break;
                    case 1:
                        context.fillStyle = theColors[1]; break;
                    case 3:
                        context.fillStyle = theColors[2]; break;
                    case 7:
                        context.fillStyle = theColors[3]; break;
                    case 13:
                        context.fillStyle = theColors[4]; break;
                    case 17:
                        context.fillStyle = theColors[5]; break;
                    }
                    context.fillText(randChar, x, y);
                }
                y -= stripFontSize[k];
            }
        }

        function draw() {
            // clear the canvas and set the properties
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.shadowOffsetX = context.shadowOffsetY = 0;
            context.shadowBlur = 8;
            context.shadowColor = '#94f475';
            
            for (var j = 0; j < stripCount; j++) {
                context.font = stripFontSize[j]+'px MatrixCode';
                context.textBaseline = 'top';
                context.textAlign = 'center';
                
                if (stripY[j] > 1358) {
                    stripX[j] = Math.floor(Math.random()*canvas.width);
                    stripY[j] = -100;
                    dY[j] = Math.floor(Math.random()*7)+3;
                    stripFontSize[j] = Math.floor(Math.random()*16)+8;
                    drawStrip(stripX[j], stripY[j]);
                } else drawStrip(stripX[j], stripY[j]);
                
                stripY[j] += dY[j];
            }
        setTimeout(draw, 70);
        }

        return () => {
            document.getElementsByTagName('canvas')[0].remove();
        };
    }, []);

    return(
        <main className={styles.page}>
            <section className={styles.mainBackground}>
                <div className={styles.banner}>
                    <Image src={banner}/>
                </div>
                <section>
                    <div className={styles.centerContainer}>
                        <Image src={possibilty} />  
                    </div>

                    <div style = {{"zIndex": "0"}} className={classnames(styles.centerContainer, styles.gnomehand)}>
                        <Image src={gnomehand} />  
                    </div>
                </section>

                <div ref={rightText} className={classnames(styles.rightText, styles.waveAnimation)}>
                    <p>drain 2:</p>
                    <p>pub; limbo;</p>
                    <p>finite space,</p>
                    <p>traveled; known</p>
                    <p>undestanding;</p>
                    <p>beer, goblins</p>
                    <p>know more;</p>
                    <p>board, gnome;</p>
                    <p>linked; empty</p>
                    <p>can you find it</p>
                    <p>in your heart?</p>
                    <p>what will it be,</p>
                    <p>will you see me</p>
                    <p>again? i miss</p>
                    <p>you, i was you,</p>
                    <p>we are, slipping</p>
                    <p>down</p>
                </div>

                <div ref={bottomText} className={classnames(styles.bottomText, styles.waveAnimation)}>
                    <p>drain 1:</p>
                    <p>dungeon deep enter; pathway, treasure</p>
                    <p>make it right, sometimes; slimed; little dance</p>
                    <p>unclear way forward; certain death, certain life</p>
                </div>

                <div className={styles.gnomeContainer}>
                    <div className={styles.gnome}><Image src={gnome}/></div>
                    <div className={styles.gnomeSpeech}>
                        <p>"I'll miss you old chum! this drain may be filled, but</p>
                        <p>heres to the gnext one!"</p>
                    </div>
                </div>
            </section>
            <div className={styles.divider}></div>
            <section className={styles.drain01}>
                <iframe ref={iframeRef} className={styles.drainIframe} src="https://zen-kowalevski-bab42e.netlify.app/overworld.html">

                </iframe>
            </section>
        </main>

    );

};

export default Drain00;
