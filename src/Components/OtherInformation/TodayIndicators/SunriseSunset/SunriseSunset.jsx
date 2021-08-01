import React from "react";
import styles from './../TodayIndicators.module.css';
import classNames from 'classnames';
import sunrise from '../../../../assets/img/sunrise.svg';
import sunset from '../../../../assets/img/sunset.svg';


const SunriseSunset = (props) => {
    return (<div className={classNames(styles.sunriseSunset, styles.todayIndicatorsItem)}>
        <h3>Восход и заход солнца</h3>
        <div className={classNames(styles.sunriseSunset__container)}>
            <div>
                <img src={sunrise} alt=""/>
                <h2 className={classNames(styles.sunriseSunset__digit)}>{props.sunData.sunrise}</h2>
            </div>
            <div>
                <img src={sunset} alt=""/>
                <h2 className={classNames(styles.sunriseSunset__digit)}>{props.sunData.sunset}</h2>
            </div>
        </div>
        <p></p>
    </div>);
}

export default SunriseSunset;