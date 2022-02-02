import React from "react";
import styles from '../Blog.module.scss'
import classnames from 'classnames';

const QuoteBox = (props) => {

    const quotes = props.children[0].replace(/[\n\"]+/g,"").split(",");

    return(
        <div className={styles.quoteBox}>
            {quotes.map((quote) => (
                <p className={classnames(styles.quote, quote.split(":")[0].replace(/[\n\s\"]+/g,""))}>{quote.split(":")[1]}</p>
            ))}
        </div>
    );
};

export default QuoteBox;