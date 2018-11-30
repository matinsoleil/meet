import React, { Component } from 'react';
import { connect } from 'react-redux';
import { multiSelectState, messageSelected } from './../../../../redux/actions/messagesOptions/messagesOptions';
import { deleteMessage } from '../../../../redux/actions/messages/messages';
import { showModal } from '../../../../redux/actions/modalBox/modalBox';

class DotsMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        }
        this.modalModel = {
            title: '¿Seguro que desea eliminar este mensaje?',
            buttons: [{ name: 'CANCELAR', action: this.props.showDots }, { name: 'ELIMINAR', action: this.accept }],
            viewPath: 'Confirm'
        }
    }

    toggleMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        });
        let element = document.getElementById(`message_${this.props.id}`);
        let content = document.getElementById('#main-chat-feed');
        let fillContent = (this.props.type === "message-out") ? content.offsetWidth - (element.offsetLeft + (element.offsetWidth) + 240) > 0 :
            (element.offsetLeft - 240) > 0;
        (!fillContent) && this.setState({
            menuFillStyle: (this.props.type === "message-out") ? { right: 'calc(0% - 12px)', left: 'unset' } :
                { left: 'calc(0% - 12px)', right: 'unset' }
        });
    }

    forwardTo = () => {
    }

    reply = () => {
        this.toggleMenu();
        this.props.showDots();
        this.props.messageSelected(this.props.id, true);
    }

    multiSelection = (e) => {
        this.toggleMenu();
        this.props.showDots();
        this.props.multiSelectState(!this.props.multiSelect);
    }

    accept = () => {
        this.props.showDots();
        this.props.deleteMessage(this.props.conversationId, this.props.id);
    }

    render() {
        return (
            <div ref={div => { this.wrapper_menu_dots = div }} className="menu-wrapper-message">
                <img onClick={this.toggleMenu} ref={img => { this.dots = img }} className="dots-menu-message" src={this.props.dots_menu} alt="" />
                {
                    (this.state.showMenu) &&
                    <div style={this.state.menuFillStyle} id={`dots_dropmenu_${this.props.id}`} ref={div => { this.menu_dots = div }} className="dots-dropmenu">
                        <a onClick={this.reply}>{'Responder'}</a>
                        <a onClick={this.forwardTo}>{'Reenviar'}</a>
                        <a onClick={this.multiSelection} >{'Seleccionar varios'}</a>
                        <a onClick={() => {
                            this.props.showModal(
                                this.modalModel.title, 
                                this.modalModel.buttons,
                                this.modalModel.viewPath)
                        }} >{'Eliminar'}</a>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        dots_menu: state.customizing.Images.dots_menu,
        multiSelect: state.messagesOptions.multiSelect
    }
}

const mapDispatchToProps = dispatch => {
    return {
        multiSelectState: (state) => {
            dispatch(multiSelectState(state));
        },
        deleteMessage: (conversationId, messageId) => {
            dispatch(deleteMessage(conversationId, messageId));
        },
        messageSelected: (messageId, state) => {
            dispatch(messageSelected(messageId, state));
        },
        showModal: (title, buttons, viewPath) => {
            dispatch(showModal(title, buttons, viewPath));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DotsMenu);
