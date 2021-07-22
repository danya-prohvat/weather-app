import React from "react";
import styles from './OtherInformation.module.css';
import classNames from 'classnames';
import TodayIndicatorsContainer from "./TodayIndicators/TodayIndicatorsContainer";
import HourlyWeatherForecast from "./HourlyWeatherForecast/HourlyWeatherForecast";

const OtherInformation = (props) => {
    return (<div className={classNames(styles.otherInformation)}>
        <HourlyWeatherForecast />
        <TodayIndicatorsContainer />
    </div>);
}

export default OtherInformation;