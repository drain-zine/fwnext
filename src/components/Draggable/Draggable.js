import React from "react";
import { motion } from "framer-motion";
import useInteractDrag from "../../hooks/useInteractDrag";
import styles from './Draggable.module.scss'
import classnames from "classnames";

const Draggable =  React.forwardRef(({className, initPos = [0,0], ...props}, ref) => {
    const targetClass = "draggableTile";

    // bind drag listener
    useInteractDrag(targetClass, initPos);

    return(
        <motion.div 
            ref={ref} 
            className={classnames(targetClass, styles.draggable, className)}
            {...props} >
            {props.children}
        </motion.div>
    );

});

export default Draggable;