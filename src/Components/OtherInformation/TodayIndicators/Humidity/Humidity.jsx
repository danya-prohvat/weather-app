import React from "react";
import styles from './../TodayIndicators.module.css';
import classNames from 'classnames';

const Humidity = (props) => {
    return (<div className={classNames(styles.humidity, styles.todayIndicatorsItem)}>
        <h3>Влажность</h3>
    </div>);
}

export default Humidity;