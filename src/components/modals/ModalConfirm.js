import React from 'react';
import Modal from './Modal';
import { ModalContainer } from './ModalContainer';
import { connect } from 'react-redux';
import { configureModalConfirm } from '../../redux/actions/views/modalConfirm';
import { defaultValues as modalDataReset } from "../../redux/reducers/views/modalConfirm";

import './Modal.scss'

class ModalConfirm extends Modal {

    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
    }

    render() {
        const buttons = super.buildOptionButtons(this.props.modalConfirm) || [];
        return(
            <ModalContainer visible = {this.props.modalConfirm.visible} clickOutside = { this.closeModal }>
                <div className="title">{this.props.modalConfirm.title}</div>
                <div className="buttons">{buttons}</div>
            </ModalContainer>
        );
    }

    closeModal(){
        this.props.configureModalConfirm(modalDataReset);
    }

}

const mapStateToProps = ({views, country}) => {
    return {
        modalConfirm: views.modalConfirm,
        translator: country.translator
    };
};

const mapDispatchToProps = dispatch => {
    return {
        configureModalConfirm: payload => dispatch(configureModalConfirm(payload))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (ModalConfirm);