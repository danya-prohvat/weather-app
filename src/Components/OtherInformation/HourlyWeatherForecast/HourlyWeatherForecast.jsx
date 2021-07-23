import React from "react";
import styles from './HourlyWeatherForecast.module.css';
import classNames from 'classnames';
import ChooseTemperatureUnit from "./ChooseTemperatureUnit/ChooseTemperatureUnit";
import HourlyContainer from "./HourlyItems/HourlyContainer";

const HourlyWeatherForecast = (props) => {
    return (<div className={classNames(styles.weekWeatherForecast)}>
        <div className={classNames(styles.weekWeatherForecast__container)}>
            <span className={classNames(styles.weekWeatherForecast__week)}>Week</span>
            <ChooseTemperatureUnit/>
        </div>
        <HourlyContainer/>
    </div>);
}

export default HourlyWeatherForecast;