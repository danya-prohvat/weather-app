import React from "react";
import styles from './../TodayIndicators.module.css';
import classNames from 'classnames';

const Pressure = (props) => {
    return (<div className={classNames(styles.pressure, styles.todayIndicatorsItem)}>
        <h3>Атмосферное давление</h3>
    </div>);
}

export default Pressure;