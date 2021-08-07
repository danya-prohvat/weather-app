import React from "react";
import {connect} from "react-redux";
import HourlyItem from "./HourlyItem";
import classNames from "classnames";
import styles from "../HourlyItems/HourlyItem.module.css";

const HourlyContainer = (props) => {
    const hourlyItemsList = props.hourlyWeatherForecast.map((el, ind) => <HourlyItem
        time={props.hourlyWeatherForecast[ind].time} temp={props.hourlyWeatherForecast[ind].temp}
        weatherIcon={props.hourlyWeatherForecast[ind].weatherIcon} isFetching={props.isFetching} key={'HourlyItem' + ind}/>)

    return (<div className={classNames(styles.hourlyItemContainer)}>
        {hourlyItemsList}
    </div>);
}

let mapStateToProps = (state) => ({
    hourlyWeatherForecast: state.weatherPage.hourlyWeatherForecast,
    isFetching: state.weatherPage.isFetching,
})

export default connect(mapStateToProps, {})(HourlyContainer);