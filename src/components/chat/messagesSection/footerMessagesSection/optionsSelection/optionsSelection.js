import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./optionsSelection.scss"
import { deleteMessagesSelected } from '../../../../../redux/actions/messagesOptions/messagesOptions';
import ModalBox from './../../../../modals/ModalBox';
import { showSectionGroups } from '../../../../../redux/actions/groups/showSectionGroups';

class OptionsSelection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        }
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal,
        });
    }

    deleteMessages = (e) => {
        this.toggleModal();
    }

    accept = () => {
        this.toggleModal();
        this.props.deleteMessagesSelected(this.props.messages);
    }

    render() {
        return (
            <div className="options-section">
                {(this.props.type === '3') &&
                    <IconButton className="download-icon" image={this.props.forward} name='Descargar' />
                }
                <IconButton onClick={()=>{this.props.showSectionGroups(this.props.contacts)}} image={this.props.forward} name='Reenviar' />
                <IconButton onClick={this.deleteMessages} image={this.props.trash} name='Eliminar' />
                {(this.state.showModal) &&
                    <ModalBox body={
                        <div>
                            <div className='title'>{'¿Seguro que desea eliminar estos mensajes?'}</div>
                            <div className='button-section'>
                                <button onClick={this.toggleModal}>Cancelar</button>
                                <button onClick={this.accept}>Eliminar</button>
                            </div>
                        </div>
                    } />
                }
            </div>
        );
    }
}

const IconButton = props => {
    let { image, alt, name } = props;
    return (
        <div onClick={props.onClick} className={`icon-button ${props.className}`}>
            <img src={image} alt={alt} />
            <span>{name}</span>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        forward: state.customizing.Images.forward,
        trash: state.customizing.Images.trash,
        messages: state.messagesOptions.messages,
        contacts: state.contacts,
    }
}

const mapDispathToProps = dispatch => {
    return {
        deleteMessagesSelected: messagesId => {
            dispatch(deleteMessagesSelected(messagesId));
        },
        showSectionGroups: listContacs => {
            dispatch(showSectionGroups(listContacs));
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(OptionsSelection);