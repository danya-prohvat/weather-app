import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getHourlyWeatherForecasts} from "../../../../store/weather-reducer";
import HourlyItem from "./HourlyItem";
import classNames from "classnames";
import styles from "../HourlyItems/HourlyItem.module.css";


const HourlyContainer = (props) => {
    useEffect(() => {
        props.getHourlyWeatherForecasts(props.currentLocation, props.temperatureUnit);
    }, [props.currentLocation, props.temperatureUnit])

    const hourlyItemsList = props.hourlyWeatherForecast.map((el, ind) => <HourlyItem
        time={props.hourlyWeatherForecast[ind].time} temp={props.hourlyWeatherForecast[ind].temp}
        weatherIcon={props.hourlyWeatherForecast[ind].weatherIcon} isFetching={props.isFetching} key={'HourlyItem' + ind}/>)

    return (<div className={classNames(styles.hourlyItemWrapper)}>
        {hourlyItemsList}
    </div>);
}


let mapStateToProps = (state) => ({
    hourlyWeatherForecast: state.weatherPage.hourlyWeatherForecast,
    currentLocation: state.weatherPage.currentLocation,
    temperatureUnit: state.weatherPage.temperatureUnit,
    isFetching: state.weatherPage.isFetching,
})

export default connect(mapStateToProps, {getHourlyWeatherForecasts})(HourlyContainer);