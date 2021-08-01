import React from "react";
import styles from './../TodayIndicators.module.css';
import classNames from 'classnames';
import temp_min from "../../../../assets/img/temp_min.svg";
import temp_max from "../../../../assets/img/temp_max.svg";

const MinMaxTemp = (props) => {
    return (<div className={classNames(styles.minMaxTemp, styles.todayIndicatorsItem)}>
        <h3>Температура</h3>
        <div className={classNames(styles.minMaxTemp__container)}>
            <div>
                <img src={temp_min} alt=""/>
                <h2 className={classNames(styles.minMaxTemp__digit)}>{props.temperatureData.temp_min}</h2>
            </div>
            <div>
                <img src={temp_max} alt=""/>
                <h2 className={classNames(styles.minMaxTemp__digit)}>{props.temperatureData.temp_max}</h2>
            </div>
        </div>
        <p></p>
    </div>);
}

export default MinMaxTemp;