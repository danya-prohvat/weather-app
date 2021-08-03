import React from "react";
import styles from './../TodayIndicators.module.css';
import classNames from 'classnames';
import sunrise from "../../../../assets/img/sunrise.svg";
import sunset from "../../../../assets/img/sunset.svg";
import {compose} from "redux";
import {showPreloader} from "../../../hoc/RedirectToPreloader";

const Humidity = (props) => {

    const style = {
        height: props.humidity*1.5,
    };

    return (<div className={classNames(styles.todayIndicatorsItem__wrapper)}>
        <h3>Влажность</h3>
        <div className={classNames(styles.humidity__container)}>
            <h2 className={classNames(styles.humidity__digit)}>{props.humidity}<sup>%</sup></h2>
            <div className={classNames(styles.humidity__scale)}>
                <div style={style}></div>
            </div>
        </div>
        <p></p>
    </div>);
}

const HumidityCompose = compose(showPreloader)(Humidity);

const HumidityWrapper = (props) => {
    return (<div className={classNames(styles.humidity, styles.todayIndicatorsItem)}>
        <HumidityCompose {...props}/>
    </div>);
}

export default HumidityWrapper;
