import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"
//import { useWindowSize } from "../../../hooks/useWindowSize";
import { useDispatch, useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import Draggable from '../../Draggable/Draggable';
import classnames from 'classnames';
import styles from './MacWindow.module.scss'
import { setHomeIsOpen, setHomeTransform } from "../../../actions/Actions";
import Image from "next/image";
import { extractPixelValues } from '../../../utils/extractPixelValues';

import wizard from "../../HomeButton/assets/wizard.gif"

// const animVariants = {
//   open: {
//     opacity: 1, 
//   }
// }


const minMarginY = 24;
const minMarginX = 100;


const TrafficLights = ({closeCallback, minCallback, maxCallback}) => {
  const closeWindow = (e) => {
    e.stopPropagation();
    close(id);
  };

  return (
    <div className={classnames(styles.trafficLights2, styles.focus)}>
      <button className={classnames(styles.trafficLight2, styles.close)} onClick={closeCallback} id="close"></button>
      <button className={classnames(styles.trafficLight2, styles.minimise)} onClick={minCallback} id="minimise"></button>
      <button className={classnames(styles.trafficLight2, styles.maximise)} id="maximise"></button>
    </div>
  );
};

const MacWindow = (props) => {
  const dispatch = useDispatch();
  const homeIsOpen = useSelector(state => state.nav.homeIsOpen);
  const transformPosition = useSelector(state => state.nav.homeTransform);
  const buttonPosition = 'translate(-117.6px, 484.8px)'
  const trafficLightsRef = React.createRef();
  const headerSpacerRef = useRef(null);
  const windowRef = useRef(null);

  console.log(transformPosition);

  //const { winWidth, winHeight } = useWindowSize();

  // const initWidth = Math.min(winWidth, props.width ? props.width : 640);
  // const initHeight = Math.min(winHeight, props.height ? props.height : 400);

  const winWidth = 640;
  const winHeight = 400;
  const initWidth = 640;
  const initHeight = 400;

  const [state, setState] = useState({
    width: initWidth,
    height: initHeight,
    // "+ winWidth" because of the boundary for windows
    x: winWidth + Math.random() * (winWidth - initWidth),
    // "- minMarginY" because of the boundary for windows
    y: Math.random() * (winHeight - initHeight - minMarginY)
  });

  const minCallback = (transform) => {
    dispatch(setHomeTransform(transform));
    dispatch(setHomeIsOpen(false));
  };

  const openCallback = () => {
    dispatch(setHomeIsOpen(true));
  }

  useEffect(() => {
    setState({
      ...state,
      width: Math.min(winWidth, state.width),
      height: Math.min(winHeight, state.height)
    });
  }, [winWidth, winHeight]);

  useEffect(() => {
    if(trafficLightsRef.current && headerSpacerRef.current){
      headerSpacerRef.current.style.width = trafficLightsRef.current.style.width;
      console.log( trafficLightsRef.current.style.width);
    }
  }, [trafficLightsRef, headerSpacerRef])

  const width = props.max ? winWidth : state.width;
  const height = props.max ? winHeight : state.height;

  const children = React.cloneElement(
    props.children,
    { width: width }
  );

  return (
    <div className={styles.overlay}>
      <Draggable 
        className={classnames(styles.windowWrapper, 
          props.max ? styles.roundedNone : styles.windowBorder,
          props.min ? styles.minimised : "" )}
        ref={windowRef} 
        animate={homeIsOpen ? "open" : "close"} 
        transition={{ duration: 0.4 }}
        initial={{transform: transformPosition}}
        initPos={transformPosition && extractPixelValues(transformPosition)}
        key={transformPosition}
        variants={{
            open: {opacity: 1, transform: transformPosition, zIndex: 100},
            close: {opacity: 0, transform: buttonPosition, zIndex: 0} }}>
            <div
              className={styles.windowBar} >
              <TrafficLights
                minCallback={() => {
                  windowRef.current && minCallback(windowRef.current.style.transform);
                }}
                closeCallback={() => {
                  windowRef.current && minCallback(windowRef.current.style.transform);
                }}
              />
              <span className={styles.title}>{props.title}</span>
              <div></div>
            </div>
            <div className={styles.innerContent}>{children}</div>
      </Draggable>
      <div className={styles.homeIcon} onClick={openCallback} > 
        <Image 
          src={wizard}
          layout={"fill"}
        />
      </div>
    </div>
  );
};

export default MacWindow;