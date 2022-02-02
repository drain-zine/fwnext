import React from "react";
import styles from '../Blog.module.scss'

const Button = (props) => {

    return(
        <div className={styles.button}>
            <p className={styles.title}>{props.children}<span>{props.link}</span></p>
            <p className={styles.subTitle}>{props.subtitle}</p>
        </div>
    );
};

Button.defaultProps = {
    link: "",
    subtitle: ""
};

export default Button;