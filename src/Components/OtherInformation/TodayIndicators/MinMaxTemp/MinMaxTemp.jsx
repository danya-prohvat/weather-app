import React from "react";
import styles from './../TodayIndicators.module.css';
import classNames from 'classnames';
import temp_min from "../../../../assets/img/temp_min.png";
import temp_max from "../../../../assets/img/temp_max.png";
import {compose} from "redux";
import {showPreloader} from "../../../hoc/RedirectToPreloader";

const MinMaxTemp = (props) => {
    return (<div className={classNames(styles.todayIndicatorsItem__wrapper)}>
        <h3>Температура</h3>
        <div className={classNames(styles.minMaxTemp__container)}>
            <div>
                <img className={classNames(styles.minMaxTemp__img)} src={temp_min} alt=""/>
                <h2 className={classNames(styles.minMaxTemp__digit)}>{props.temperatureData.temp_min}<sup>°</sup></h2>
            </div>
            <div>
                <img className={classNames(styles.minMaxTemp__img)} src={temp_max} alt=""/>
                <h2 className={classNames(styles.minMaxTemp__digit)}>{props.temperatureData.temp_max}<sup>°</sup></h2>
            </div>
        </div>
        <p></p>
    </div>);
}

const MinMaxTempCompose = compose(showPreloader)(MinMaxTemp);

const MinMaxTempWrapper = (props) => {
    return (<div className={classNames(styles.minMaxTemp, styles.todayIndicatorsItem)}>
        <MinMaxTempCompose {...props}/>
    </div>);
}

export default MinMaxTempWrapper;
