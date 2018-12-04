import React, {Component} from 'react';

import './ModalContainer.scss'

export const ModalContainer =  props => {
    return(
        <React.Fragment>
            <div className={props.visible ? `modal-container visible` : `modal-container`}>
                <div className="screen-block" onClick = {props.clickOutside}></div>
                <div className="modal-box">
                    { props.children }
                </div>
            </div>
        </React.Fragment>
    );
}