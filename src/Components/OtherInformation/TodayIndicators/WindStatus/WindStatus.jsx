import React from "react";
import styles from './../TodayIndicators.module.css';
import classNames from 'classnames';

const WindStatus = (props) => {
    return (<div className={classNames(styles.windStatus, styles.todayIndicatorsItem)}>
        <h3>Ветреность</h3>
        <h2 className={classNames(styles.numberPerHour)}>{props.windData.wind}<sub>km/h</sub></h2>
        <p>{props.windData.windDirection}</p>
    </div>);
}

export default WindStatus;