import React from "react";
import styles from './../TodayIndicators.module.css';
import classNames from 'classnames';

const MinMaxTemp = (props) => {
    return (<div className={classNames(styles.minMaxTemp, styles.todayIndicatorsItem)}>
        <h3>Температура</h3>
    </div>);
}

export default MinMaxTemp;