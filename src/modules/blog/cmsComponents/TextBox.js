import React from "react";
import ReactMarkdown from 'react-markdown'
import styles from '../Blog.module.scss'

const TextBox = (props) => {

    return(
        <div className={styles.textBox}>
            <ReactMarkdown>{props.children[0].trim()}</ReactMarkdown>
        </div>
    );

};

export default TextBox;