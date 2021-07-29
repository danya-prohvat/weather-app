import React, {useEffect} from "react";
import TodayIndicators from "./TodayIndicators";
import {connect} from "react-redux";

const TodayIndicatorsContainer = (props) => {
    return (<TodayIndicators todayIndicators={props.todayIndicators} />);
}


let mapStateToProps = (state) => ({
    todayIndicators: state.weatherPage.todayIndicators,
})

export default connect(mapStateToProps)(TodayIndicatorsContainer);