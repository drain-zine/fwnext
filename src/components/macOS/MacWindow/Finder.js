import React, { useState, useEffect, useRef } from "react";
//import { useWindowSize } from "../../../hooks/useWindowSize";
import { useDispatch, useSelector } from 'react-redux';
import Draggable from '../../Draggable/Draggable';
import classnames from 'classnames';
import styles from './FinderWindow.module.scss'
import { setHomeIsOpen, setHomeTransform } from "../../../actions/Actions";
import { extractPixelValues } from '../../../utils/extractPixelValues';


const minMarginY = 24;
const minMarginX = 100;


const TrafficLights = ({closeCallback, minCallback, maxCallback}) => {
  return (
    <div className={classnames(styles.trafficLights2, styles.focus)}>
      <button className={classnames(styles.trafficLight2, styles.close)} onClick={closeCallback} id="close"></button>
      <button className={classnames(styles.trafficLight2, styles.minimise)} onClick={minCallback} id="minimise"></button>
      <button className={classnames(styles.trafficLight2, styles.maximise)} id="maximise"></button>
    </div>
  );
};

const Finder = (props) => {
  const dispatch = useDispatch();
  const navText = props.navText;
  const [activeNav, setActiveNav] = useState(0);
  const homeIsOpen = useSelector(state => state.nav.homeIsOpen);
  const transformPosition = useSelector(state => state.nav.homeTransform);
  const buttonPosition = 'translate(-117.6px, 484.8px)'
  const trafficLightsRef = React.createRef();
  const headerSpacerRef = useRef(null);
  const windowRef = useRef(null);

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
        ref={windowRef} 
        animate={homeIsOpen ? "open" : "close"} 
        transition={{ duration: 0.4 }}
        initial={{transform: transformPosition}}
        initPos={transformPosition && extractPixelValues(transformPosition)}
        key={transformPosition}
        variants={{
            open: {opacity: 1, transform: transformPosition, zIndex: 100},
            close: {opacity: 0, transform: buttonPosition, zIndex: 0} }}>


            <div className={styles.sideBar}>
                <div className={styles.windowHeader}>
                    <TrafficLights
                        minCallback={() => {
                            windowRef.current && minCallback(windowRef.current.style.transform);
                        }}
                        closeCallback={() => {
                            windowRef.current && minCallback(windowRef.current.style.transform);
                        }} />
                </div>
                <div className={styles.sideBarContent}>
                    <p className={styles.favourites}>Favourites</p>
                    {navText.map((n,i) => (
                      <div 
                        className={classnames(styles.option, i === activeNav ? styles.active: '')}
                        onClick={() => {
                          windowRef.current && dispatch(setHomeTransform(windowRef.current.style.transform));
                          setActiveNav(i)
                        }}
                        ><p>{n}</p></div>
                    ))} 
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.windowHeader}>
                    <div className={styles.contentHeader}>
                        <span className={styles.title}>{props.title}</span>
                        <div className={styles.controls}></div>
                    </div>
                </div>
                <section className={styles.innerContent}>
                  {React.Children.map(props.children, (c,i) => (
                    <div className={classnames(i === activeNav ? styles.active : styles.inactive)}>{c}</div>
                  ))}
                </section>
            </div>
             
      </Draggable>
  );
};

export default Finder;