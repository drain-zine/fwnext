import React from "react";
import styles from '../Blog.module.scss'

const Title = (props) => {

    return(
        <div className={styles.title}>
            <h1>{props.children}</h1>
        </div> 
    );

};

export default Title;