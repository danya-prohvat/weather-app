import React from "react";
import styles from './TodayIndicators.module.css';
import classNames from 'classnames';
import Humidity from "./Humidity/Humidity";
import MinMaxTemp from "./MinMaxTemp/MinMaxTemp";
import Pressure from "./Pressure/Pressure";
import SunriseSunset from "./SunriseSunset/SunriseSunset";
import Visibility from "./Visibility/Visibility";
import WindStatus from "./WindStatus/WindStatus";

const TodayIndicators = (props) => {

    console.log('was');
    console.log(props.todayIndicators)

    return (<div className={classNames(styles.TodayIndicators)}>
        <span className={classNames(styles.TodayIndicators__title)}>TodayIndicators</span>
        <div className={classNames(styles.TodayIndicators__container)}>
            <Humidity />
            <MinMaxTemp />
            <Pressure />
            <SunriseSunset />
            <Visibility />
            <WindStatus />
        </div>
    </div>);
}

export default TodayIndicators;