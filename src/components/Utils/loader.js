import React from 'react';
import './loader.scss'

export const Loader = props => {
    return (
          <span className="loading">
            <div className="l-conte">
                <div className="lc-line"></div>
                <div className="lc-line"></div>
                <div className="lc-line"></div>
                <div className="lc-line"></div>
                <div className="lc-line"></div>
                <div className="lc-line"></div>
                <div className="lc-line"></div>
                <div className="lc-line"></div>
                <div className="lc-circle"></div>
            </div>
          </span>
    )
};