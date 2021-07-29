import React from "react";
import styles from './../TodayIndicators.module.css';
import classNames from 'classnames';

const WindStatus = (props) => {
    return (<div className={classNames(styles.windStatus, styles.todayIndicatorsItem)}>
        <h3>Ветреность</h3>
    </div>);
}

export default WindStatus;