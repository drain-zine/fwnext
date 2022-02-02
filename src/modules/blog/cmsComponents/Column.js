import React from "react";
import ReactMarkdown from "react-markdown";
import styles from '../Blog.module.scss'

const Column = (props) => {

    return(
        <div className={styles.column}>
            <ReactMarkdown>{props.children[0].trim()}</ReactMarkdown>
        </div>
    );

};

export default Column;