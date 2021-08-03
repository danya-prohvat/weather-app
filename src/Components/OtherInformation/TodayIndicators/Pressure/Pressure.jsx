import React from "react";
import styles from './../TodayIndicators.module.css';
import classNames from 'classnames';
import {compose} from "redux";
import {showPreloader} from "../../../hoc/RedirectToPreloader";

const Pressure = (props) => {
    return (<div className={classNames(styles.todayIndicatorsItem__wrapper)}>
        <h3>Атмосферное давление</h3>
        <h2 className={classNames(styles.pressure__digit)}>{props.pressure}<sub>kPa</sub></h2>
        <p></p>
    </div>);
}

const PressureCompose = compose(showPreloader)(Pressure);

const PressureWrapper = (props) => {
    return (<div className={classNames(styles.pressure, styles.todayIndicatorsItem)}>
        <PressureCompose {...props}/>
    </div>);
}

export default PressureWrapper;