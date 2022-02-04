import React, { useRef, useState, useEffect} from "react"
import useInteractDrag from "../../hooks/useInteractDrag";
import styles from './Draggable.module.scss'
import classnames from "classnames";
import { LANDING } from '../../constants';

const Draggable = (props) => {
    const targetClass = "draggableTile";
    const tileRef = useRef(null);
    const [initPos, setInitPost] = useState(null);

    useEffect(() => {
        if(tileRef.current){
            const pos = [Math.random() * (LANDING.RAND_X - 5) + 5, Math.random() * (LANDING.RAND_Y - 5) + 5];
            console.log(tileRef.current);
            tileRef.current.style.transform = `translate(${pos[0]}%,${pos[1]}%)`
            setInitPost(pos);
        }
    }, [tileRef]);

    // bind drag listener
    useInteractDrag(targetClass);

    return(
        <div ref={tileRef} className={classnames(targetClass, styles.draggable, props?.className)}>
            {props.children}
        </div>
    );

};

export default Draggable;