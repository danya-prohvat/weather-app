import React from "react";
import styles from './ChooseTemperatureUnit.module.css';
import classNames from 'classnames';
import {connect} from "react-redux";
import {setTemperatureUnitCreator} from "../../../../store/weather-reducer";


const ChooseTemperatureUnit = (props) => {
    const temperatureCircleOnClick = event => props.setTemperatureUnitCreator(event.target.id);

    return (<div className={classNames(styles.chooseTemperatureUnit)}>
        <div onClick={temperatureCircleOnClick} className={classNames(styles.temperatureCircle, {[styles.temperatureCircle_active]: props.temperatureUnit === 'C'})} id="C">°C</div>
        <div onClick={temperatureCircleOnClick} className={classNames(styles.temperatureCircle, {[styles.temperatureCircle_active]: props.temperatureUnit === 'F'})} id="F">°F</div>
    </div>);
}

let mapStateToProps = (state) => ({
    temperatureUnit: state.weatherPage.temperatureUnit,
})

export default connect(mapStateToProps, {setTemperatureUnitCreator})(ChooseTemperatureUnit);