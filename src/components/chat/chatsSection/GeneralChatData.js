import React, { Component } from 'react'
import './GeneralChatData.scss'
import DotsMenuContact from './dotsMenuContact'
import fetchContact from '../../../redux/actions/contact/fetchContact'
import clearContact from '../../../redux/actions/contact/clearContact'
import updatePinerGroup from '../../../redux/actions/groups/updatePinerGroup'
import fileContacts from '../../../redux/actions/contacts/fileContacts'
import deleteConversation from '../../../redux/actions/conversation/deleteConversation'
import { getContact } from '../../../redux/selectors/contact'
import { getContacts } from '../../../redux/selectors/contacts'
import { getContactSection } from '../../../redux/selectors/contactSection'
import showAlertGeneral from '../../../redux/actions/alertGeneral/showAlertGeneral'
import { showModal } from '../../../redux/actions/modalBox/modalBox';
import { connect } from 'react-redux'

class GeneralContactData extends Component {
    constructor(...props) {
        super(...props)
        this.state = {
            menuState: false,
            msjChat: false,
            showModal: false,
            showMenu: false,
            showModalDeleteContact: false,
            showModalDeleteGroup: false,
            showModalLeaveGroup: false,
            showModalFileContact: false,
            showModalDeleteConversationContact: false,
            showModalSilenceConversation: false,
            showModalFixContact: false,
        }
        this.fileContact = this.fileContact.bind(this)
        this.showModalDeleteContactAction = this.showModalDeleteContactAction.bind(this)
        this.leaveGroup = this.leaveGroup.bind(this)
        this.closeModalDeleteConversationContactAction = this.closeModalDeleteConversationContactAction.bind(this)
        this.showModalSilenceConversationAction = this.showModalSilenceConversationAction.bind(this)
        this.showModalDeleteConversationContactAction = this.showModalDeleteConversationContactAction.bind(this)
        this.deleteConversationContact = this.deleteConversationContact.bind(this)
        this.readMessage = this.readMessage.bind(this)
        this.fixContact = this.fixContact.bind(this)
    }

    componentDidMount() {
        this.bubble.addEventListener('mouseenter', this.showDots)
        this.bubble.addEventListener('mouseleave', this.showDots)
    }

    componentWillUnmount() {
        this.bubble.removeEventListener('mouseenter', this.showDots)
        this.bubble.removeEventListener('mouseleave', this.showDots)
    }

    showDots = () => {
        this.setState({
            menuState: !this.state.menuState
        })
    }

    fileContact = () => {
        this.props.chat["file"] = this.props.chat["file"] === true ? false : true
        var msj = this.props.chat["file"] === true ? "Archivaste el chat" : "Desarchivaste el chat"
        this.props.showAlertGeneral(msj)
        this.props.fileContacts(this.props.chat["id"])
        this.showDots()
    }

    fixContact = () => {
        var msj = "";
        this.props.chat["pinner"] = this.props.chat["pinner"] === "1" ? "0" : "1"
        msj = this.props.chat["pinner"] === "1" ? "Fijaste el chat" : "Dejaste de fijar el chat"
        this.props.showAlertGeneral(msj)
        this.showDots()
    }

    leaveGroup = () => {
        console.log("Salir del grupo")
    }

    actionDeleteElementChat = () => {
        var listContacts = this.props.contacts
        var idContact = this.props.chat.id
        this.props.chat["conversations"] = null
        var filter_contacts = this.props.contactSection.filter_contacts
        if (filter_contacts !== null) {
            var index_filter_contacts = filter_contacts.findIndex(item => item.id === idContact)
            filter_contacts.splice(index_filter_contacts, 1)
        }
        if (this.props.contact.id === this.props.chat.id) { this.props.clearContact() }
        this.props.showAlertGeneral('Eliminaste el chat con ' + this.props.chat.name)
    }

    submitCreateSilence = (values) => {
        this.props.chat["silence"] = values.timeSilence
        this.props.showModal();
        this.props.showAlertGeneral("Silenciaste el chat")
        this.showDots()
    }

    deleteConversationContact = () => {
        this.props.showAlertGeneral('Historial del chat eliminado');
        this.showDots()
    }

    showModalDeleteContactAction = () => {
        this.showDots()
        this.props.showModal(
            `¿Seguro que deseas eliminar el chat con ${this.props.chat.name}`,
            [{ name: 'ELIMINAR', action: this.actionDeleteElementChat }, { name: 'CANCELAR' }],
            'Confirm');
    }

    showModalDeleteConversationContactAction = () => {
        this.showDots();
        this.props.showModal(
            `¿Seguro que deseas eliminar el historial del chat de ${this.props.chat.name}`,
            [{ name: 'ELIMINAR', action: this.deleteConversationContact }, { name: 'CANCELAR' }],
            'Confirm'
        );
    }

    showModalSilenceConversationAction = () => {
        if (this.props.chat.silence !== "0") {
            this.props.chat["silence"] = "0"
            this.props.showAlertGeneral("Cancelaste el silencio del chat")
        } else {
            this.props.showModal(
                `Silenciar durante…`,
                { Accept: { name: 'Silenciar', action: this.submitCreateSilence }, Cancel: { name: 'Cancelar' } },
                'contact/SilenceConversation'
            );
        }
    }

    showModalLeaveGroup = () => {
        this.setState({
            showModalLeaveGroup: true,
        })
    }

    clickChat = () => {
        const idChat = this.props.chat.id
        const contacts = this.props.contacts
        const contactLoad = contacts.find(item => item.id === idChat)
        this.props.fetchContact(contactLoad)
    }

    msjGeneralChatData = () => {
        return (
            <div className="message-popup ">
                <p className="text-message-popup">
                    <span className="msg"> text </span>
                </p>
            </div>
        )
    }

    closeModalDeleteContactAction = () => {
        this.setState({
            showModalDeleteContact: false,
        })
    }

    closeModalLeaveGroupAction = () => {
        this.setState({
            showModalLeaveGroup: false,
        })
    }

    closeModalDeleteConversationContactAction = () => {
        this.setState({
            showModalDeleteConversationContact: false
        })
    }

    deleteContact = () => {
        this.setState({
            showModalDeleteContact: false,
        })
    }

    readMessage = () => {
        this.showDots()
        if (this.props.chat.countMessage !== "") {
            this.props.chat["countMessage"] = ""
            this.props.showAlertGeneral("Marcando como leído")
        } else {
            this.props.chat["countMessage"] = null
            this.props.showAlertGeneral("Marcando como no leído")
        }
    }

    render() {
        const idElement = this.props.chat.id
        let seleted_chat_class = idElement === this.props.contact.id ? "contact-chat selected-contact-chat" : "contact-chat";
        return (
            <div className={seleted_chat_class} ref={div => { this.bubble = div }} id={idElement} >
                <div className="grid-container-contact-chat">
                    <div className="icon-contact" onClick={this.clickChat}>
                        <div className="outer-circle" >
                            <img className="img-icon-user" src={this.props.chat.imgContact} alt="icon-user" />
                            <div className="inner-circle circle">&nbsp;</div>
                        </div>
                    </div>
                    <div className="name-contact" onClick={this.clickChat}>
                        <span className="text-contact">
                            <p className="word-contact">{this.props.chat.name}</p>
                            {
                                this.props.chat.silence !== "0" ? <img className="status-contact" src={this.props.mute_a_icon} alt="status-conctact" /> : null
                            }
                            {
                                this.props.chat.file === true ? <img className="status-contact" src={this.props.file_icon} alt="status-conctact" /> : null
                            }
                            {
                                this.props.chat.pinner !== "0" ? <img className="status-contact" src={this.props.status_user_icon} alt="status-conctact" /> : null
                            }
                        </span>
                    </div>
                    <div className="day-last-message" >
                        <div className="inPoints">
                            {
                                (this.state.menuState) &&
                                <DotsMenuContact showDots={this.showDots}
                                    chat={this.props.chat}
                                    showModalDeleteContactAction={this.showModalDeleteContactAction}
                                    showModalDeleteConversationContactAction={this.showModalDeleteConversationContactAction}
                                    fixContact={this.fixContact}
                                    showModalSilenceConversationAction={this.showModalSilenceConversationAction}
                                    fileContact={this.fileContact}
                                    readMessage={this.readMessage}
                                    showModalLeaveGroup={this.showModalLeaveGroup}
                                />
                            }
                        </div>
                        <p className="day-last">{this.props.chat.dayLastMessage}</p>
                    </div>
                    <div className="last-message" onClick={this.clickChat}>
                        {this.props.chat.lastMessage}
                    </div>
                    <div className="count-message" onClick={this.clickChat}>
                        {
                            this.props.chat.countMessage !== "" ? <div className="circle-count-message"> <p className="count-message-number">{this.props.chat.countMessage}</p> </div> : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        status_user_icon: state.customizing.Images.status_user_attach_icon,
        mute_a_icon: state.customizing.Images.mute_a_icon,
        file_icon: state.customizing.Images.file_icon_chat,
        contacts: getContacts(state),
        contact: getContact(state),
        contactSection: getContactSection(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearContact: (infoContact) => {
            dispatch(clearContact(infoContact))
        },
        fetchContact: (infoContact) => {
            dispatch(fetchContact(infoContact))
        },
        deleteConversation: (id) => {
            dispatch(deleteConversation(id))
        },
        showAlertGeneral: (msj) => {
            dispatch(showAlertGeneral(msj))
        },
        fileContacts: (param) => {
            dispatch(fileContacts(param))
        },
        updatePinerGroup: (id) => {
            dispatch(updatePinerGroup(id))
        },
        showModal: (title, buttons, viewPath) => {
            dispatch(showModal(title, buttons, viewPath));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralContactData)