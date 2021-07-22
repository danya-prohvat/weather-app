import React from "react";
import styles from './LeftBar.module.css';
import classNames from 'classnames';
import OneDayWeatherForecastContainer from "./OneDayWeatherForecast/OneDayWeatherForecastConainer";
import SearchInput from "./SearchInput/SearchInput";

const LeftBar = (props) => {
    return (<div className={classNames(styles.leftBar)}>
        <SearchInput />
        <OneDayWeatherForecastContainer />
    </div>);
}

export default LeftBar;