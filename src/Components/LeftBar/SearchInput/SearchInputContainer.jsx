import React from "react";
import {connect} from "react-redux";
import {
    changeCurrentSearchValueCreator,
    searchSimilarCitiesCreator,
    setCurrentLocationCreator
} from "../../../store/weather-reducer";
import SearchInput from "./SearchInput";


const SearchInputContainer = (props) => {
    const cityItemOnClick = event => props.setCurrentLocationCreator(event.target.id);

    const searchInputOnChange = event => {
        props.changeCurrentSearchValueCreator(event.target.value);
        props.searchSimilarCitiesCreator();
    }

    const searchInputOnBlur = () => setTimeout(() => props.searchSimilarCitiesCreator(true), 100);

    return (<SearchInput searchInputOnBlur={searchInputOnBlur} searchInputOnChange={searchInputOnChange}
                         cityItemOnClick={cityItemOnClick} searchData={props.searchData}/>);
}


let mapStateToProps = (state) => ({
    searchData: state.weatherPage.searchData,
})

export default connect(mapStateToProps, {
    changeCurrentSearchValueCreator,
    searchSimilarCitiesCreator,
    setCurrentLocationCreator
})(SearchInputContainer);