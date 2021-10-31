import React from "react"
import useInteractDrag from "../../hooks/useInteractDrag";
import styles from './Draggable.module.scss'

const Draggable = (props) => {
    const targetClass = "draggableTile";

    // bind drag listener
    useInteractDrag(targetClass);

    return(
        <div className={targetClass}>
            {props.children};
        </div>
    );

};

export default Draggable;