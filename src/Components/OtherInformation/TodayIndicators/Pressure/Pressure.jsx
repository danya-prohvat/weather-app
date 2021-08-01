import React from "react";
import styles from './../TodayIndicators.module.css';
import classNames from 'classnames';

const Pressure = (props) => {
    return (<div className={classNames(styles.pressure, styles.todayIndicatorsItem)}>
        <h3>Атмосферное давление</h3>
        <h2 className={classNames(styles.numberPerHour)}>{props.pressure}<sub>hPa</sub></h2>
        <p></p>
    </div>);
}

export default Pressure;