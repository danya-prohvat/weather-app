import React from "react";
import styles from './../TodayIndicators.module.css';
import classNames from 'classnames';
import {compose} from "redux";
import {showPreloader} from "../../../hoc/RedirectToPreloader";

const WindStatus = (props) => {
    return (<div className={classNames(styles.todayIndicatorsItem__wrapper)}>
        <h3>Ветреность</h3>
        <h2 className={classNames(styles.windStatus__digit)}>{props.windData.wind}<sub>m/s</sub></h2>
        <p>{props.windData.windDirection}</p>
    </div>);
}

const WindStatusCompose = compose(showPreloader)(WindStatus);

const WindStatusWrapper = (props) => {
    return (<div className={classNames(styles.windStatus, styles.todayIndicatorsItem)}>
        <WindStatusCompose {...props}/>
    </div>);
}

export default WindStatusWrapper;