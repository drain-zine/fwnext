import React, { useState, useEffect, useRef } from "react";
import Draggable from '../../Draggable/Draggable';
import classnames from 'classnames';
import styles from './MacWindow.module.scss'
import { extractPixelValues } from '../../../utils/extractPixelValues';
import { motion } from 'framer-motion';


const minimiseVariants = {
  open: {
    height: "100%"
  },
  minimised: {
    height: "0"
  }
}


const minMarginY = 24;
const minMarginX = 100;


const TrafficLights = ({closeCallback, minCallback, maxCallback}) => {
  return (
    <div className={classnames(styles.trafficLights2, styles.focus)}>
      <button className={classnames(styles.trafficLight2, styles.close)} onClick={closeCallback} id="close"></button>
      <button className={classnames(styles.trafficLight2, styles.minimise)} onClick={minCallback} id="minimise"></button>
      <button className={classnames(styles.trafficLight2, styles.maximise)} onClick={maxCallback} id="maximise"></button>
    </div>
  );
};

const MacWindow = (props) => {
  const disableMaximiseScroll = props.disableMaximiseScroll || false;
  const transformPosition = props.transformPosition;
  const trafficLightsRef = React.createRef();
  const headerSpacerRef = useRef(null);
  const windowRef = useRef(null);
  const [isMinimised, setIsMinimised] = useState(false);
  const [isMaximised, setIsMaximised] = useState(false);
  const [currTransform, setCurrTransform] = useState(transformPosition || 'translate(0,0)');
  const [currZIndex, setCurrZIndex] = useState(10);

  const winWidth = 1000;
  const winHeight = 622.5;
  const initWidth = 1000;
  const initHeight = 622.5;

  const maximiseVariants = {
    open: {
      height: "auto",
      width: "auto",
      x: extractPixelValues(currTransform)[0],
      y:  extractPixelValues(currTransform)[1]
    },
    maximised: {
      height: "100%",
      width: "100%",
      x: 0,
      y: 0,
      zIndex: currZIndex
    }
  }

  const [state, setState] = useState({
    width: initWidth,
    height: initHeight,
    // "+ winWidth" because of the boundary for windows
    x: winWidth + Math.random() * (winWidth - initWidth),
    // "- minMarginY" because of the boundary for windows
    y: Math.random() * (winHeight - initHeight - minMarginY)
  });

  const minCallback = (style) => {
    setCurrZIndex(style.zIndex);
    setCurrTransform(style.transform);
    setIsMinimised(prevIsMinimised => !prevIsMinimised);
    setIsMaximised(false);
  };

  const maxCallback = (style) => {
    setCurrZIndex(style.zIndex);
    if(!isMaximised){
      setCurrTransform(style.transform);
    }
    setIsMaximised(prevIsMaximised => !prevIsMaximised);
    setIsMinimised(false);
  };


  useEffect(() => {
    setState({
      ...state,
      width: Math.min(winWidth, state.width),
      height: Math.min(winHeight, state.height)
    });
  }, [winWidth, winHeight]);


  // TO FIX
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
      <Draggable 
        className={classnames(styles.windowWrapper, 
          props.max ? styles.roundedNone : styles.windowBorder,    
          props.min ? styles.minimised : "" )}
        style={{zIndex: currZIndex}}  
        ref={windowRef} 
        initial={{transform: currTransform}}
        initPos={extractPixelValues(currTransform)}
        key={currTransform}
        initial={maximiseVariants.open}
        variants={maximiseVariants}
        animate={isMaximised ? maximiseVariants.maximised : maximiseVariants.open}
       >
            <div
              className={styles.windowBar} >
              <TrafficLights
                minCallback={() => windowRef.current && minCallback(windowRef.current.style)}
                closeCallback={() => minCallback()}
                maxCallback={() => windowRef.current && maxCallback(windowRef.current.style)}
              />
              <span className={styles.title}>{props.title}</span>
              <div></div>
            </div>
            <motion.div 
              initial={minimiseVariants.open}
              variants={minimiseVariants}
              animate={isMinimised ? minimiseVariants.minimised : minimiseVariants.open}
              transition={{ duration: 0.4 }}
              className={classnames(styles.innerContent, {[styles.overflow]: isMaximised && !disableMaximiseScroll})}>
              {isMaximised ? 
                props.maximiseComponent
                  : 
              
                children
              }
            </motion.div>
      </Draggable>
  );
};

export default MacWindow;