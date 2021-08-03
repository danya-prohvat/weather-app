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
    return (<div className={classNames(styles.TodayIndicators)}>
        <span className={classNames(styles.TodayIndicators__title)}>Сегодняшние параметры</span>
        <div className={classNames(styles.TodayIndicators__container)}>
            <Humidity humidity={props.todayIndicators.humidity} />
            <MinMaxTemp temperatureData={props.todayIndicators.temperatureData} />
            <Pressure pressure={props.todayIndicators.pressure} />
            <SunriseSunset sunData={props.todayIndicators.sunData} />
            <Visibility visibilityData={props.todayIndicators.visibilityData} />
            <WindStatus windData={props.todayIndicators.windData} />
        </div>
    </div>);
}

export default TodayIndicators;