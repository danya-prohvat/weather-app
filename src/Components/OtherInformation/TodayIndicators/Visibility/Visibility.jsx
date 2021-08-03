import React from "react";
import styles from './../TodayIndicators.module.css';
import classNames from 'classnames';
import {compose} from "redux";
import {showPreloader} from "../../../hoc/RedirectToPreloader";

const Visibility = (props) => {
    return (<div className={classNames(styles.todayIndicatorsItem__wrapper)}>
        <h3>Видимость</h3>
        <h2 className={classNames(styles.visibility__digit)}>{props.visibilityData.visibility}<sub>km</sub></h2>
        <p>{props.visibilityData.visibilityDescription}</p>
    </div>);
}

const VisibilityCompose = compose(showPreloader)(Visibility);

const VisibilityWrapper = (props) => {
    return (<div className={classNames(styles.visibility, styles.todayIndicatorsItem)}>
        <VisibilityCompose {...props}/>
    </div>);
}

export default VisibilityWrapper;