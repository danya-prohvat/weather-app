import React from "react";
import styles from './Preloader.module.css';
import classNames from 'classnames';
import preloader from "../../assets/img/preloader.gif";


const Preloader = (props) => {
    return (<div className={classNames(styles.preloader)}>
        <img src={preloader} className={classNames(styles.preloader__img)} alt=""/>
    </div>);
}

export default Preloader;