import './App.css';
import LeftBar from "./Components/LeftBar/LeftBar";
import OtherInformation from "./Components/OtherInformation/OtherInformation";
import {connect} from "react-redux";
import {getWeather} from "./store/weather-reducer";
import {useEffect} from "react";


const App = (props) => {
    useEffect(() => {
        props.getWeather(props.currentLocation, props.temperatureUnit);
    }, [props])

    return (
        <div className="App">
            <LeftBar />
            <OtherInformation />
        </div>
    );
}

let mapStateToProps = (state) => ({
    currentLocation: state.weatherPage.currentLocation,
    temperatureUnit: state.weatherPage.temperatureUnit,
})

export default connect(mapStateToProps, {getWeather})(App);