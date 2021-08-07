import React from "react";
import styles from './HourlyWeatherForecast.module.css';
import classNames from 'classnames';
import ChooseTemperatureUnit from "./ChooseTemperatureUnit/ChooseTemperatureUnit";
import HourlyContainer from "./HourlyItems/HourlyContainer";

const HourlyWeatherForecast = (props) => {
    return (<div className={classNames(styles.hourlyWeatherForecast)}>
        <div className={classNames(styles.hourlyWeatherForecast__container)}>
            <span className={classNames(styles.hourlyWeatherForecast__today)}>Сегодня</span>
            <ChooseTemperatureUnit/>
        </div>
        <HourlyContainer/>
    </div>);
}

export default HourlyWeatherForecast;