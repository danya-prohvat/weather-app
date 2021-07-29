import React from "react";
import styles from './../TodayIndicators.module.css';
import classNames from 'classnames';

const Visibility = (props) => {
    return (<div className={classNames(styles.visibility, styles.todayIndicatorsItem)}>
        <h3>Видимость</h3>
    </div>);
}

export default Visibility;