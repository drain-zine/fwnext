import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './DesktopOverlay.module.scss';
import classnames from 'classnames';
import { setHomeIsOpen } from "../../actions/Actions";
import Dock from './Dock';

const DesktopOverlay = ({className, ...props}) => {
    const dispatch = useDispatch();

    const openCallback = () => {
        dispatch(setHomeIsOpen(true));
    };

    return(
        <div className={classnames(styles.overlay, className)}>
            {props.children}
            <Dock openCallback={openCallback}>
            </Dock>
        </div>
    );
};

export default DesktopOverlay;