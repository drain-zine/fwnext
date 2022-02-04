import React, { useState, useEffect, useRef } from "react";
//import { useWindowSize } from "../../../hooks/useWindowSize";
import { useDispatch, useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import Draggable from '../../Draggable/Draggable';
import classnames from 'classnames';
import styles from './MacWindow.module.scss'
import { setHomeIsOpen } from "../../../actions/Actions";
import Image from "next/image";

import wizard from "../../HomeButton/assets/wizard.gif"

// const animVariants = {
//   open: {
//     opacity: 1, 
//   }
// }

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

  const minCallback = () => {
    dispatch(setHomeIsOpen(false));
  };

  const openCallback = () => {
    console.log("click!");
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
      <Draggable className={classnames(styles.windowWrapper, 
      props.max ? styles.roundedNone : styles.windowBorder,
      props.min ? styles.minimised : "",
      homeIsOpen ? styles.visible : styles.invisible )}>
        <div
          className={styles.windowBar}
          onDoubleClick={() => props.setMax(props.id)}
        >
          <TrafficLights
            minCallback={minCallback}
            closeCallback={minCallback}
          />
          <span className={styles.title}>{props.title}</span>
          <div></div>
        </div>
        <div className={styles.innerContent}>{children}</div>
      </Draggable>
      <div className={styles.homeIcon} onClick={openCallback}> 
        <Image 
          src={wizard}
          layout={"fill"}
        />
      </div>
    </div>
  );
};

export default MacWindow;