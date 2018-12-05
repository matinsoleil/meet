import React from 'react';
import Modal from './Modal';
import { ModalContainer } from './ModalContainer';
import { connect } from 'react-redux';
import { configureModalRadioOptions } from '../../redux/actions/views/modalRadioOptions';
import { defaultValues as modalDataReset } from '../../redux/reducers/views/modalRadioOptions';

import './Modal.scss';

class ModalRadioOptions extends Modal {

    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
    }

    render() {
        const buttons = super.buildOptionButtons(this.props.modalRadioOptions) || [];
        const options = this.buildRadioOptions(this.props.modalRadioOptions) || [];
        return(
            <ModalContainer visible = {this.props.modalRadioOptions.visible} clickOutside = { this.closeModal }>
                <div className="title">{this.props.modalRadioOptions.title}</div>
                <div className="radio-options">{options}</div>
                <div className="buttons">{buttons}</div>
            </ModalContainer>
        );
    }

    closeModal(){
        this.props.configureModalRadioOptions(modalDataReset);
    }

    handleRadioChange(radio){
        this.props.configureModalRadioOptions({...this.props.modalRadioOptions, selectedRadioValue: radio.value });
    }

    buildRadioOptions (configuration) {
        return configuration.options.map((option, id) => 
            <label key={id} className={'radio-container'}>
                {option.text}
                <input type="radio" onChange={() => this.handleRadioChange(option)} defaultChecked={option.default} name={'radio-option'} value={option.value} />
                <span className={'checkmark'}></span>
            </label>
        );
    }

}

const mapStateToProps = ({views, country}) => {
    return {
        modalRadioOptions: views.modalRadioOptions,
        translator: country.translator
    };
};

const mapDispatchToProps = dispatch => {
    return {
        configureModalRadioOptions: payload => dispatch(configureModalRadioOptions(payload))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (ModalRadioOptions);