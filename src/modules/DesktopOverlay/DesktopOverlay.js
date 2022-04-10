import React from 'react';
import styles from './DesktopOverlay.module.scss';
import classnames from 'classnames';
import Dock from './Dock';

const DesktopOverlay = ({className, ...props}) => {

    return(
        <div className={classnames(styles.overlay, className)}>
            {props.children}
            <Dock/>
        </div>
    );
};

export default DesktopOverlay;