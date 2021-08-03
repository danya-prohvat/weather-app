import React from "react";
import Preloader from "../Preloader/Preloader";
import {useSelector} from "react-redux";


export const showPreloader = (Component) => {
    function WithUseSelector(props) {
        const isFetching = useSelector(state => state.weatherPage.isFetching)

        // return (<div>
        //     {!isFetching ? <Component {...props} />
        //         : <Preloader/>}
        // </div>)
        if (!isFetching) return (<Component {...props} />);
        else return (<Preloader />);
    }

    return WithUseSelector;
}