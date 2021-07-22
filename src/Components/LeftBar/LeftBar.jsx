import React from "react";
import styles from './LeftBar.module.css';
import classNames from 'classnames';
import OneDayWeatherForecastContainer from "./OneDayWeatherForecast/OneDayWeatherForecastConainer";
import SearchInputContainer from "./SearchInput/SearchInputContainer";

const LeftBar = (props) => {
    return (<div className={classNames(styles.leftBar)}>
        <SearchInputContainer />
        <OneDayWeatherForecastContainer />
    </div>);
}

export default LeftBar;