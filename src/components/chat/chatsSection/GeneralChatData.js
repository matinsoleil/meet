import React, { Component } from 'react'
import './GeneralChatData.scss'
import DotsMenuContact from './dotsMenuContact'
import fetchContact from '../../../redux/actions/contact/fetchContact'
import updatePinerGroup from '../../../redux/actions/groups/updatePinerGroup'
import deleteConversation from '../../../redux/actions/conversation/deleteConversation'
import ModalBox from '../../modals/ModalBox'
import { getContacts } from '../../../redux/selectors/contacts'
import { getRightSectionContainer } from '../../../redux/selectors/rightSectionContainer'
import DeleteContact from '../../../components/form/contact/DeleteContact'
import DeleteConversationContact from '../../../components/form/contact/DeleteConversationContact'
import showAlertGeneral from '../../../redux/actions/alertGeneral/showAlertGeneral'
import SilenceConversation from '../../form/contact/SilenceConversation'
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
            showModalFileContact: false,
            showModalDeleteConversationContact: false,
            showModalSilenceConversation: false,
            showModalFixContact: false
        }
        this.fileContact = this.fileContact.bind(this)
        this.showModalDeleteContactAction = this.showModalDeleteContactAction.bind(this)
        this.closeModalDeleteConversationContactAction = this.closeModalDeleteConversationContactAction.bind(this)
        this.showModalSilenceConversationAction = this.showModalSilenceConversationAction.bind(this)
        this.showModalDeleteConversationContactAction = this.showModalDeleteConversationContactAction.bind(this)
        this.deleteConversationContact = this.deleteConversationContact.bind(this)
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

    fileContact() {
        this.props.chat["file"] = this.props.chat["file"] === "1" ? "0" : "1"
        var msj = this.props.chat["file"] === "1" ? "Archivaste el chat" : "Desarchivaste el chat"
        this.props.showAlertGeneral(msj)
        this.showDots()
    }

    fixContact() {
        var msj = "";
        this.props.chat["pinner"] = this.props.chat["pinner"] === "1" ? "0" : "1"
        msj = this.props.chat["pinner"] === "1" ? "Fijaste el chat" : "Dejaste de fijar el chat"
        this.props.showAlertGeneral(msj)
        this.showDots()
    }

    actionDeleteElementChat = () => {
        var listContacts = this.props.contacts
        var idContact = this.props.chat.id
        var indexContact = listContacts.findIndex(item => item.id === idContact)
       listContacts.splice(indexContact, 1)
        var filter_contacts = this.props.rightSectionContainer.filter_contacts
        if (filter_contacts !== null) {
            var index_filter_contacts = filter_contacts.findIndex(item => item.id === idContact)
            filter_contacts.splice(index_filter_contacts, 1)
        }
        this.props.showAlertGeneral('Eliminaste el chat con ' + this.props.chat.name)
    }

    submitCreateSilence = (values) => {
        this.props.chat["silence"] = values.timeSilence
        this.setState({
            showModalSilenceConversation: false
        });
        this.props.showAlertGeneral("Silenciaste el chat")
        this.showDots()
    }

    renderBodySilenceConversation = () => {
        return (<SilenceConversation onSubmit={this.submitCreateSilence} closeWindow={this.closeModalSilenceConversationAction} />)
    }

    renderBodyDeleteContact = () => {
        return (<DeleteContact closeWindow={this.closeModalDeleteContactAction} nameContact={'test'} deleteContact={this.actionDeleteElementChat} />)
    }

    renderBodyDeleteConversationContact = () => {
        return (<DeleteConversationContact closeWindow={this.closeModalDeleteConversationContactAction} id={this.props.chat.name} deleteConversationContact={this.deleteConversationContact} />)
    }

    deleteConversationContact = () => {
        this.props.showAlertGeneral('Historial del chat eliminado')
        this.setState({
            showModalDeleteConversationContact: false
        });
        this.showDots()
    }

    showModalDeleteContactAction = () => {
        this.showDots()
        this.setState({
            showModalDeleteContact: true
        })
    }

    showModalDeleteConversationContactAction = () => {
        this.showDots()
        this.setState({
            showModalDeleteConversationContact: true
        });
    }

    showModalSilenceConversationAction = () => {
        this.showDots()
        if (this.props.chat.silence !== "0") {
            this.props.chat["silence"] = "0"
            this.props.showAlertGeneral("Cancelaste el silencio del chat")
        } else {
            this.setState({
                showModalSilenceConversation: true
            });
        }
    }

    clickChat = () => {
        const idChat = this.props.chat.id
        this.props.fetchContact(idChat)
    }

    msjGeneralChatData = () => {
        return (
            <div className="message-popup ">
                <p className="text-message-popup">
                    <span className="msg"> text </span>
                </p>
                <p className="text-message-popup">
                    <span className="msg" onClick={this.hideMensajeGeneralClick}> Cerrar </span>
                </p>
            </div>
        )
    }

    closeModalDeleteContactAction = () => {
        this.setState({
            showModalDeleteContact: false,
        })
    }

    closeModalDeleteConversationContactAction = () => {
        this.setState({
            showModalDeleteConversationContact: false
        });
    }

    deleteContact = () => {
        this.setState({
            showModalDeleteContact: false,
        })
    }

    render() {
        const idElement = "chat-" + this.props.chat.id
        return (

            <div className="contact-chat" ref={div => { this.bubble = div }} id={idElement} >
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
                                this.props.chat.file !== "0" ? <img className="status-contact" src={this.props.file_icon} alt="status-conctact" /> : null
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
                            this.props.chat.countMessage !== "0" ? <div className="circle-count-message"> <p className="count-message-number">{this.props.chat.countMessage}</p> </div> : null
                        }
                    </div>
                </div>
                {(this.state.msjChat) &&
                    <div className="message-popup ">
                        <p className="text-message-popup">
                            <span className="msg"> {this.props.chat.name} </span>
                        </p>
                        <p className="text-message-popup">
                            <span className="msg" onClick={this.hideMensajeGeneralClick}> Cerrar </span>
                        </p>
                    </div>
                }
                {this.state.showModalFileContact ? <ModalBox body={this.renderBodyFileContact(this.props.chat.name)} /> : null}
                {this.state.showModalSilenceConversation ? <ModalBox body={this.renderBodySilenceConversation(this.props.chat.id)} /> : null}
                {this.state.showModalDeleteConversationContact ? <ModalBox body={this.renderBodyDeleteConversationContact(this.props.chat.id)} /> : null}
                {this.state.showModalDeleteContact ? <ModalBox body={this.renderBodyDeleteContact()} /> : null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        dots_menu: state.customizing.Images.dots_menu,
        status_user_icon: state.customizing.Images.status_user_attach_icon,
        mute_a_icon: state.customizing.Images.mute_a_icon,
        file_icon: state.customizing.Images.file_icon_chat,
        contacts: getContacts(state),
        rightSectionContainer: getRightSectionContainer(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchContact: (id) => {
            dispatch(fetchContact(id))
        },
        deleteConversation: (id) => {
            dispatch(deleteConversation(id))
        },
        showAlertGeneral: (msj) => {
            dispatch(showAlertGeneral(msj))
        },
        updatePinerGroup: (id) => {
            dispatch(updatePinerGroup(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralContactData)