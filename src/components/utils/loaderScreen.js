import React from 'react';
import {Loader} from "./loader";
import './loaderScreen.scss'

export const LoaderScreen = props => {
    return (
        <div className="loader-screen">
            <Loader/>
        </div>
    )
};