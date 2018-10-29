import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteMessage } from '../../../redux/actions/conversation/fetchConversation'
import updateContacts from '../../../redux/actions/contacts/updateContacts'
import showAlertGeneral from '../../../redux/actions/alertGeneral/showAlertGeneral'
import { fetchConversation } from '../../../redux/actions/conversation/fetchConversation'
import { deleteConversation } from '../../../redux/actions/conversation/deleteConversation'
import { getAlertGeneral } from '../../../redux/selectors/alertGeneral'
import DeleteContact from '../../../components/form/contact/DeleteContact'
import DeleteConversationContact from '../../../components/form/contact/DeleteConversationContact'
import SilenceConversation from '../../form/contact/SilenceConversation'

import './dotsMenuContact.scss'
class dotsMenuContact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            showMenu: false,
            showModalDeleteContact: false,
            showModalFileContact: false,
            showModalDeleteConversationContact: false,
            showModalSilenceConversation: false,
            showModalFixContact: false
        }
        this.closeModalDeleteContactAction = this.closeModalDeleteContactAction.bind(this)
        this.closeModalDeleteConversationContactAction = this.closeModalDeleteConversationContactAction.bind(this)
        this.closeModalSilenceConversationAction = this.closeModalSilenceConversationAction.bind(this)
        this.closeModalFileContactAction = this.closeModalFileContactAction.bind(this)
        this.closeModalFixContactAction = this.closeModalFixContactAction.bind(this)
        this.showModalSilenceConversationAction = this.showModalSilenceConversationAction.bind(this)
        this.fixContact = this.fixContact.bind(this)
        this.deleteContact = this.deleteContact.bind(this)
        this.fileContact = this.fileContact.bind(this)
        this.deleteConversationContact = this.deleteConversationContact.bind(this)
    }

    closeModalDeleteContactAction() {
        this.setState({
            showModalDeleteContact: false,
        });
    }

    closeModalFileContactAction() {
        this.setState({
            showModalFileContact: false
        });
    }

    closeModalDeleteConversationContactAction() {
        this.setState({
            showModalDeleteConversationContact: false
        });
    }

    closeModalFixContactAction() {
        this.setState({
            showModalFixContact: false
        });
    }

    closeModalSilenceConversationAction() {
        this.setState({
            showModalSilenceConversation: false
        });
    }

    deleteConversationContact() {
        this.setState({
            showModalDeleteConversationContact: true
        });
    }

    deleteContact() {
        this.props.deleteElementChat(this.props.chat.id);
        this.setState({
            showModalDeleteContact: false,
        });
    }

    fixContact() {
        this.props.chat["pinner"] = this.props.chat["pinner"] === "1" ? "0" : "1"
        this.props.showDots()
    }

    fileContact() {
        this.props.chat["file"] = this.props.chat["file"] === "1" ? "0" : "1"
        this.props.showDots()
    }

    showModalDeleteConversationContactAction = () => {
        this.setState({
            showModalDeleteConversationContact: true
        });
    }

    showModalSilenceConversationAction = () => {
        if (this.props.chat.silence !== "0") {
            this.props.chat["silence"] = "0"
            this.props.showDots()
        } else {
            this.setState({
                showModalSilenceConversation: true
            });
        }
    }

    showModalFileContactAction = () => {
        this.setState({
            showModalFileContact: true
        });
    }
    
    renderBodyDeleteContact = (nameContact) => {
        return (<DeleteContact closeWindow={this.closeModalDeleteContactAction} nameContact={nameContact} deleteContact={this.deleteContact} />)
    }

    renderBodyDeleteConversationContact = (id) => {
        return (<DeleteConversationContact closeWindow={this.closeModalDeleteConversationContactAction} id={id} deleteConversationContact={this.deleteConversationContact} />)
    }

    renderBodySilenceConversation = (id) => {
        return (<SilenceConversation onSubmit={this.submitCreateSilence} closeWindow={this.closeModalSilenceConversationAction} />)
    }

    toggleMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        });
    }
    componentDidMount() {
        this.dots.addEventListener('click', this.toggleMenu)
    }

    componentWillUnmount() {
        this.dots.removeEventListener('click', this.toggleMenu)
    }

    accept = () => {
        this.toggleModal()
    }

    submitCreateSilence = values => {
        this.props.chat["silence"] = values.timeSilence
        this.setState({
            showModalSilenceConversation: false
        });
    }

    render() {
        const titleActionFix = this.props.chat.pinner === "0" ? "Fijar chat" : "Dejar de fijar chat"
        const titleActionFile = this.props.chat.file === "0" ? "Archivar chat" : "Desarchivar chat"
        const titleActionSilence = this.props.chat.silence === "0" ? "Silenciar chat" : "Cancelar silencio"
        return (
            <div ref={div => { this.wrapper_menu_dots = div }} className="menu-wrapper">
                <img ref={img => { this.dots = img }} className="dots-menu" src={this.props.dots_menu} alt="" />
                {
                    (this.state.showMenu) &&
                    <div id={`dots_dropmenu_${this.props.id}`} ref={div => { this.menu_dots = div }} className="dots-dropmenu">
                        <div className="sideMenu">
                            <p className="optionSideMenu"><a onClick={this.props.fileContact}> {titleActionFile} </a></p>
                            <p className="optionSideMenu"><a onClick={this.props.showModalSilenceConversationAction}> {titleActionSilence} </a></p>
                            <p className="optionSideMenu"><a onClick={this.props.fixContact}> {titleActionFix} </a></p>
                            <p className="optionSideMenu"><a onClick={this.props.showMsj}> Marcar como no leido </a></p>
                            <p className="optionSideMenu" onClick={this.props.showModalDeleteConversationContactAction} ><a> Eliminar historial del chat </a></p>
                            <p className="optionSideMenu"><a onClick={this.props.showModalDeleteContactAction}> Eliminar chat </a></p>
                        </div>
                    </div>
                }
                {/* {this.state.showModalDeleteContact ? <ModalBox body={this.renderBodyDeleteContact(this.props.chat.name)} /> : null}
                {this.state.showModalFileContact ? <ModalBox body={this.renderBodyFileContact(this.props.chat.name)} /> : null}
                {this.state.showModalDeleteConversationContact ? <ModalBox body={this.renderBodyDeleteConversationContact(this.props.chat.id)} /> : null}
                {this.state.showModalSilenceConversation ? <ModalBox body={this.renderBodySilenceConversation(this.props.chat.id)} /> : null} */}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        alertGeneral: getAlertGeneral(state),
        dots_menu: state.customizing.Images.dots_menu,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        deleteMessage: messageId => {
            dispatch(deleteMessage(messageId))
        }, updateContacts: (listContacts) => {
            dispatch(updateContacts(listContacts))
        }, fetchConversation: () => {
            dispatch(fetchConversation())
        }, deleteConversation: () => {
            dispatch(deleteConversation(null))
        }, showAlertGeneral: (msj) => {
            dispatch(showAlertGeneral(msj))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(dotsMenuContact)
