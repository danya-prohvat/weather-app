import React from "react";
import styles from './../TodayIndicators.module.css';
import classNames from 'classnames';
import sunset from '../../../../assets/img/sunrise.png';
import sunrise from '../../../../assets/img/sunset.png';
import {compose} from "redux";
import {showPreloader} from "../../../hoc/RedirectToPreloader";


const SunriseSunset = (props) => {
    return (<div className={classNames(styles.todayIndicatorsItem__wrapper)}>
        <h3>Заход и восход солнца</h3>
        <div className={classNames(styles.sunriseSunset__container)}>
            <div>
                <img className={classNames(styles.sunriseSunset__img)} src={sunset} alt=""/>
                <h2 className={classNames(styles.sunriseSunset__digit)}>{props.sunData.sunset}</h2>
            </div>
            <div>
                <img className={classNames(styles.sunriseSunset__img)} src={sunrise} alt=""/>
                <h2 className={classNames(styles.sunriseSunset__digit)}>{props.sunData.sunrise}</h2>
            </div>
        </div>
        <p></p>
    </div>);
}

const SunriseSunsetCompose = compose(showPreloader)(SunriseSunset);


const SunriseSunsetWrapper = (props) => {
    return (<div className={classNames(styles.sunriseSunset, styles.todayIndicatorsItem)}>
        <SunriseSunsetCompose {...props}/>
    </div>);
}

export default SunriseSunsetWrapper;