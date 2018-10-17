import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./optionsSelection.scss"
import { deleteMessagesSelected } from '../../../../../redux/actions/messagesOptions/messagesOptions';

class OptionsSelection extends Component {

    deleteMessages = (e) => {
        this.props.deleteMessagesSelected(this.props.messages);
    }

    render() {
        return (
            <div className="options-section">
                {(this.props.type === '3') &&
                    <IconButton className="download-icon" image={this.props.forward} name='Descargar' />
                }
                <IconButton image={this.props.forward} name='Reenviar' />
                <IconButton onClick={this.deleteMessages} image={this.props.trash} name='Eliminar' />
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
    }
}

const mapDispathToProps = dispatch => {
    return{
        deleteMessagesSelected: messagesId => {
            dispatch(deleteMessagesSelected(messagesId));
        }
    }
}

export default connect(mapStateToProps,mapDispathToProps)(OptionsSelection);