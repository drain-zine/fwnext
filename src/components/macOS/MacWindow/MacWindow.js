import React, { useState, useEffect, useRef } from "react";
//import { useWindowSize } from "../../../hooks/useWindowSize";
import dynamic from 'next/dynamic';
import Draggable from '../../Draggable/Draggable';
import classnames from 'classnames';
import styles from './MacWindow.module.scss'

///const { useWindowSize } = dynamic(()=> import("../../../hooks/useWindowSize"), { ssr: false });

const FullIcon = ({ size }) => {
  return (
    <svg
      viewBox="0 0 13 13"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
    >
      <path d="M9.26 12.03L.006 2.73v9.3H9.26zM2.735.012l9.3 9.3v-9.3h-9.3z" />
    </svg>
  );
};

const ExitFullIcon = ({ size }) => {
  return (
    <svg
      viewBox="0 0 19 19"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
    >
      <path d="M18.373 9.23L9.75.606V9.23h8.624zM.6 9.742l8.623 8.624V9.742H.599z" />
    </svg>
  );
};

const minMarginY = 24;
const minMarginX = 100;


const TrafficLights = ({ id, close, max, setMax, setMin, ref}) => {
  const closeWindow = (e) => {
    e.stopPropagation();
    close(id);
  };

  return (
    // <div className={styles.trafficLights}>
    //   <button
    //     className={classnames(styles.trafficLight, styles.red)}
    //     onClick={closeWindow}
    //     onTouchEnd={closeWindow}
    //   >
    //     <IoCloseOutline size={11} />
    //   </button>
    //   <button
    //     className={classnames(styles.trafficLight, max ? styles.gray : styles.yellow)}
    //     onClick={() => setMin(id)}
    //     onTouchEnd={() => setMin(id)}
    //     disabled={max}
    //   >
    //     <FiMinus size={11} className={classnames(max ? styles.invisible : "")} />
    //   </button>
    //   <button
    //     className={classnames(styles.trafficLight, styles.green)}
    //     onClick={() => setMax(id)}
    //     onTouchEnd={() => setMax(id)}
    //   >
    //     {max ? <ExitFullIcon size={10} /> : <FullIcon size={6.5} />}
    //   </button>
    // </div>

    <div ref={ref} className={classnames(styles.trafficLights2, styles.focus)}>
      <button className={classnames(styles.trafficLight2, styles.close)} id="close"></button>
      <button className={classnames(styles.trafficLight2, styles.minimise)} id="minimise"></button>
      <button className={classnames(styles.trafficLight2, styles.maximise)} id="maximise"></button>
    </div>
  );
};

const MacWindow = (props) => {
  const trafficLightsRef = React.createRef();
  const headerSpacerRef = useRef(null);
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
    <Draggable style={{
      width: width,
      height: height
    }} className={classnames(styles.windowWrapper, 
    props.max ? styles.roundedNone : styles.windowBorder,
    props.min ? styles.minimised : "" )}>
      <div
        className={styles.windowBar}
        onDoubleClick={() => props.setMax(props.id)}
      >
        <TrafficLights
          id={props.id}
          close={props.close}
          max={props.max}
          setMax={props.setMax}
          setMin={props.setMin}
          ref={trafficLightsRef}
        />
        <span className={styles.title}>{props.title}</span>
        <div ref={headerSpacerRef}></div>
      </div>
      <div className={styles.innerContent}>{children}</div>
    </Draggable>
  );
};

export default MacWindow;