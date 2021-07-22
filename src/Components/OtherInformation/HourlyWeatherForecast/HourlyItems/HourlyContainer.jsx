import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getWeekWeather} from "../../../../store/weather-reducer";
import HourlyItem from "./HourlyItem";


const HourlyContainer = (props) => {
    useEffect(() => {
        props.getWeekWeather(props.currentLocation);
    }, [props.currentLocation])

    console.log(props.hourlyWeatherForecast);

    return (<HourlyItem />);
}



let mapStateToProps = (state) => ({
    hourlyWeatherForecast: state.weatherPage.hourlyWeatherForecast,
})

export default connect(mapStateToProps, {getWeekWeather})(HourlyContainer);