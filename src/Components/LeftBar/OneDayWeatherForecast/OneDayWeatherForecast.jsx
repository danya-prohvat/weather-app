import React from "react";
import styles from './OneDayWeatherForecast.module.css';
import classNames from 'classnames';
import cloud from '../../../assets/img/cloud.png';


const OneDayWeatherForecast = (props) => {
    return (<div className={classNames(styles.oneDayWeatherForecast)}>
        <div className={classNames(styles.oneDayWeatherForecast__weatherIcon)}>
            <img src={`http://openweathermap.org/img/wn/${props.todayWeather.weatherIcon}@2x.png`} alt=""/>
        </div>
        <div className={classNames(styles.oneDayWeatherForecast__temp)}>
            <p>{props.todayWeather.temperature} <sup>°{props.temperatureUnit}</sup></p>
        </div>
        <div className={classNames(styles.oneDayWeatherForecast__location)}>
            <p>{props.currentLocation}</p>
        </div>
        <div className={classNames(styles.oneDayWeatherForecast__currentDay)}>
            <p>{props.todayData.dayOfWeek}, <span>{props.todayData.time}</span></p>
        </div>
        <hr className={classNames(styles.oneDayWeatherForecast__hr)}/>
        <div className={classNames(styles.oneDayWeatherForecast__clouds)}>
            <img src={cloud} alt=""/>
            <p>Облачность - {props.todayWeather.clouds}%</p>
        </div>
    </div>);
}


export default OneDayWeatherForecast;