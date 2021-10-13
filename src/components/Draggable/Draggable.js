import React from "react"
import useInteractDrag from "../../hooks/useInteractDrag";

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