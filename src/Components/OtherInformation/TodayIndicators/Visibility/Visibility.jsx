import React from "react";
import styles from './../TodayIndicators.module.css';
import classNames from 'classnames';

const Visibility = (props) => {
    return (<div className={classNames(styles.visibility, styles.todayIndicatorsItem)}>
        <h3>Видимость</h3>
        <h2 className={classNames(styles.numberPerHour)}>{props.visibilityData.visibility}<sub>km/h</sub></h2>
        <p>{props.visibilityData.visibilityDescription}</p>
    </div>);
}

export default Visibility;