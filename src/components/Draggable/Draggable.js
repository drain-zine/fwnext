import React from "react"
import useInteractDrag from "../../hooks/useInteractDrag";
import styles from './Draggable.module.scss'
import classnames from "classnames";

const Draggable = (props) => {
    const targetClass = "draggableTile";

    // bind drag listener
    useInteractDrag(targetClass);

    return(
        <div className={classnames(targetClass, styles.draggable, props?.className)}>
            {props.children};
        </div>
    );

};

export default Draggable;