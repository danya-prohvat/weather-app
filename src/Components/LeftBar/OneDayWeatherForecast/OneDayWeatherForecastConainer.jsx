import React from "react";
import {connect} from "react-redux";
import OneDayWeatherForecast from "./OneDayWeatherForecast";

const OneDayWeatherForecastContainer = (props) => {
    return (<div>
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

export default connect(mapStateToProps, {})(OneDayWeatherForecastContainer);