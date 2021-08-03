import React, {useEffect} from "react";
import {connect} from "react-redux";
import OneDayWeatherForecast from "./OneDayWeatherForecast";
import {getTodayWeather} from "../../../store/weather-reducer";


const OneDayWeatherForecastContainer = (props) => {
    useEffect(() => {
        props.getTodayWeather(props.currentLocation, props.temperatureUnit);
    }, [props.currentLocation, props.temperatureUnit])
    return (<div>
            {/*{props.isFetching ? <Preloader />*/}
            {/*    : <OneDayWeatherForecast currentLocation={props.currentLocation} temperatureUnit={props.temperatureUnit}*/}
            {/*                             todayWeather={props.todayWeather} todayData={props.todayData}/>}*/}
            <OneDayWeatherForecast currentLocation={props.currentLocation} temperatureUnit={props.temperatureUnit}
                                   todayWeather={props.todayWeather} todayData={props.todayData} />
        </div>
    );
}


let mapStateToProps = (state) => ({
    todayWeather: state.weatherPage.todayWeather,
    todayData: state.weatherPage.todayData,
    temperatureUnit: state.weatherPage.temperatureUnit,
    currentLocation: state.weatherPage.currentLocation,
})

export default connect(mapStateToProps, {getTodayWeather})(OneDayWeatherForecastContainer);
