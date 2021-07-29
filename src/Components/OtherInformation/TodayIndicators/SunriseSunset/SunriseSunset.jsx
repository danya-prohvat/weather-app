import React from "react";
import styles from './../TodayIndicators.module.css';
import classNames from 'classnames';

const SunriseSunset = (props) => {
    return (<div className={classNames(styles.sunriseSunset, styles.todayIndicatorsItem)}>
        <h3>Восход и заход солнца</h3>
    </div>);
}

export default SunriseSunset;