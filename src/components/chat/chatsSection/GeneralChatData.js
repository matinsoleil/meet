import React, { Component } from 'react'
import './GeneralChatData.scss'
import DotsMenuContact from './dotsMenuContact'
import fetchContact from '../../../redux/actions/contact/fetchContact'
import clearContact from '../../../redux/actions/contact/clearContact'
import updateContacts from '../../../redux/actions/contacts/updateContacts'
import { showModal,View } from '../../../redux/actions/modalBox/modalBox';
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
        this.props.chat["file"] = this.props.chat["file"] === true ? false : true;
        let msj = this.props.chat["file"] === true ? this.props.Translator.t('Archivaste el chat') : this.props.Translator.t('Desarchivaste el chat');
        //this.props.showAlertGeneral(msj);
        this.props.togglePopup(msj);
        this.props.updateContacts(this.props.chat["id"]);
        this.showDots();
    }

    fixContact = () => {
        let msj = "";
        this.props.chat["fix"] = this.props.chat["fix"] === true ? false : true;
        msj = this.props.chat["fix"] === true ? this.props.Translator.t('Fijaste el chat') : this.props.Translator.t('Archivaste el chat');
        //this.props.showAlertGeneral(msj);
        this.props.togglePopup(msj);
        this.props.updateContacts(this.props.chat["id"]);
        this.showDots();
    }

    leaveGroup = () => {
        console.log("Salir del grupo");
    }

    actionDeleteElementChat = () => {
        let idContact = this.props.chat.id;
        this.props.chat["conversations"] = null;
        let filter_contacts = this.props.contactSection.filter_contacts;
        if (filter_contacts !== null) {
            let index_filter_contacts = filter_contacts.findIndex(item => item.id === idContact);
            filter_contacts.splice(index_filter_contacts, 1);
        }
        if (this.props.contact.id === this.props.chat.id) { this.props.clearContact(); }
        //this.props.showAlertGeneral(this.props.Translator.t('Eliminaste el chat con ') + this.props.chat.name);
        this.props.togglePopup(this.props.Translator.t('Eliminaste el chat con')+ this.props.chat.name);
    }

    submitCreateSilence = (values) => {
        this.props.chat["silence"] = values.timeSilence
        this.props.showModal();
        //this.props.showAlertGeneral(this.props.Translator.t('Silenciaste el chat'))
        this.props.togglePopup(this.props.Translator.t('Silenciaste el chat'));
        this.props.updateContacts(this.props.chat["id"]);
        this.showDots()
    }

    deleteConversationContact = () => {
        //this.props.showAlertGeneral(this.props.Translator.t('Historial del chat eliminado'));
        this.props.togglePopup(this.props.Translator.t('Historial del chat eliminado'));
        this.props.updateContacts(this.props.chat["id"]);
        this.showDots()
    }

    showModalDeleteContactAction = () => {
        this.showDots()
        this.props.showModal(
            `${this.props.Translator.t('¿Seguro que deseas eliminar el chat con')} ${this.props.chat.name}`,
            [{ name: 'ELIMINAR', action: this.actionDeleteElementChat }, { name: 'CANCELAR' }],
            View.CONFIRM);
    }

    showModalDeleteConversationContactAction = () => {
        this.showDots();
        this.props.showModal(
            `${this.props.Translator.t('¿Seguro que deseas eliminar el historial del chat de')} ${this.props.chat.name}`,
            [{ name: 'ELIMINAR', action: this.deleteConversationContact }, { name: 'CANCELAR' }],
            View.CONFIRM
        );
    }

    showModalSilenceConversationAction = () => {
        if (this.props.chat.silence !== "0") {
            this.props.chat["silence"] = "0"
            //this.props.showAlertGeneral(this.props.Translator.t('Cancelaste el silencio del chat'))
            this.props.togglePopup(this.props.Translator.t('Cancelaste el silencio del chat'));
            this.props.updateContacts(this.props.chat["id"]);
        } else {
            this.props.showModal(
                `${this.props.Translator.t('Silenciar durante…')}`,
                { Accept: { name: 'Silenciar', action: this.submitCreateSilence }, Cancel: { name: 'Cancelar' } },
                View.SILENCE_CONVERSATION,
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
            //this.props.showAlertGeneral(this.props.Translator.t('Marcando como leído'))
            this.props.togglePopup(this.props.Translator.t('Marcando como leído'));
        } else {
            this.props.chat["countMessage"] = null
            //this.props.showAlertGeneral(this.props.Translator.t('Marcando como no leído'))
            this.props.togglePopup(this.props.Translator.t('Marcando como no leído'));
        }
        this.props.updateContacts(this.props.chat["id"]);
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
                                this.props.chat.fix === true ? <img className="status-contact" src={this.props.status_user_icon} alt="status-conctact" /> : null
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
        contacts: state.contacts,
        contact: state.contacts,
        contactSection: state.contactSection,
        Translator: state.country.translator,
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
        // showAlertGeneral: (msj) => {
        //     dispatch(showAlertGeneral(msj))
        // },
        togglePopup:(message,timeToHide)=>{
            dispatch(togglePopup(message,timeToHide));
        },
        updateContacts: (id) => {
            dispatch(updateContacts(id))
        },
        showModal: (title, buttons, viewPath) => {
            dispatch(showModal(title, buttons, viewPath));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralContactData)