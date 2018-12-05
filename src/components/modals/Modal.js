import React, { Component } from 'react';

class Modal extends Component {

    constructor(props) {
        super(props);
    }

    buildOptionButtons (configuration) {
        let specifiedOptions =  configuration.buttons.map((button, id) => 
            <a key={id} onClick={() => {button.handler(); this.closeModal()}}>
                {button.text}
            </a>
        );
        
        if(configuration.cancelButton) {
            specifiedOptions = [ 
                <a onClick={this.closeModal} key={'cancel'}>
                    { this.props.translator.t('GENERAL_CANCEL') } 
                </a>, 
                ...specifiedOptions
            ];
        }

        return specifiedOptions;
    }

    closeModal(){}
}

export default Modal;