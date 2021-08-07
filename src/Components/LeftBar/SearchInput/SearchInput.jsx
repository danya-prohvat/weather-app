import React from "react";
import styles from './SearchInput.module.css';
import classNames from 'classnames';
import magnifier from '../../../assets/img/magnifier.png';

const SearchInput = (props) => {
    const citiesList = props.searchData.similarCityList.map((el, ind) => <li onClick={props.cityItemOnClick} id={el} key={'citiesList' + ind}>{el}</li>);

    return (<div className={classNames(styles.searchInput)}>
        <img src={magnifier} alt=""/>
        <input value={props.searchData.currentSearchValue} onBlur={props.searchInputOnBlur}
               onChange={props.searchInputOnChange} placeholder='Город...'
               type="text"/>
        {props.searchData.similarCityList.length > 0 && <ul className={classNames(styles.searchInput__dropDownList)}>
            {citiesList}
        </ul>}
    </div>);
}

export default SearchInput;