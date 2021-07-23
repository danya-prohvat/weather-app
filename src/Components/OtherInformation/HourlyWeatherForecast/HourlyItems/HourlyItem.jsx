import React from "react";
import styles from './HourlyItem.module.css';
import classNames from 'classnames';


const HourlyItem = (props) => {
    return (<div className={classNames(styles.hourlyItem)}>
        <p className={classNames(styles.hourlyItem__time)}>{props.time}</p>
        <img className={classNames(styles.hourlyItem__img)} src={`http://openweathermap.org/img/wn/${props.weatherIcon}@2x.png`} alt=""/>
        <p className={classNames(styles.hourlyItem__temp)}>{props.temp}<sup>°</sup></p>
    </div>);
}



export default HourlyItem;