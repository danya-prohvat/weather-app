import React from "react";
import styles from './SearchInput.module.css';
import classNames from 'classnames';
import magnifier from '../../../assets/img/magnifier.png';
import {connect} from "react-redux";
import {
    changeCurrentSearchValueCreator,
    searchSimilarCitiesCreator,
    setCurrentLocationCreator
} from "../../../store/weather-reducer";


const SearchInput = (props) => {

    const cityItemOnClick = event => {
        console.log(event.target.id)
        props.setCurrentLocationCreator(event.target.id);
    }

    const citiesList = props.searchData.similarCityList.map((el, ind) => {
        return <li onClick={cityItemOnClick} id={el} key={'citiesList' + ind}>{el}</li>
    });

    const searchInputOnChange = event => {
        props.changeCurrentSearchValueCreator(event.target.value);
        props.searchSimilarCitiesCreator();
    }

    const searchInputOnBlur = event => {
        setTimeout(() => {
            props.searchSimilarCitiesCreator(true)
            console.log(event)
        }, 100);
    }

    return (<div className={classNames(styles.searchInput)}>
        <img src={magnifier} alt=""/>
        <input value={props.searchData.currentSearchValue} onBlur={searchInputOnBlur} onChange={searchInputOnChange} placeholder='Город...'
               type="text"/>
        {props.searchData.similarCityList.length > 0 && <ul className={classNames(styles.searchInput__dropDownList)}>
            {citiesList}
        </ul>}
    </div>);
}


let mapStateToProps = (state) => ({
    searchData: state.weatherPage.searchData,
})

export default connect(mapStateToProps, {changeCurrentSearchValueCreator, searchSimilarCitiesCreator, setCurrentLocationCreator})(SearchInput);