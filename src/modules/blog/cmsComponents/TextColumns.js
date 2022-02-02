import React from "react";
import styles from '../Blog.module.scss'

const TextColumns= (props) => {

    return(
        <div className={styles.textColumns}>
            {props.children}
        </div>
    );

};

export default TextColumns;