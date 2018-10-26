import React, { Component } from 'react'
import './GeneralChatData.scss'
import DotsMenuContact from './dotsMenuContact'
import fetchContact from '../../../redux/actions/contact/fetchContact'
import { connect } from 'react-redux'
import ModalBox from '../../modals/ModalBox'
import DeleteContact from '../../../components/form/contact/DeleteContact'

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
        // this.fileContact = this.fileContact.bind(this)
        this.showModalDeleteContactAction = this.showModalDeleteContactAction.bind(this)
        // this.showModalSilenceConversationAction = this.showModalSilenceConversationAction.bind(this)
        // this.fixContact = this.fixContact.bind(this)
        // this.showMsj = this.showMsj.bind(this)
        // this.showModalDeleteConversationContactAction = this.actionsMenu.bind(this)

    }

    componentDidMount() {
        this.bubble.addEventListener('mouseenter', this.showDots)
        this.bubble.addEventListener('mouseleave', this.showDots)
    }

    componentWillUnmount() {
        this.bubble.removeEventListener('mouseenter', this.showDots)
        this.bubble.removeEventListener('mouseleave', this.showDots)
    }

    renderBodyDeleteContact = () => {
        return (<DeleteContact closeWindow={this.closeModalDeleteContactAction} nameContact={'test'} deleteContact={this.props.deleteElementChat} />)
    }

    showModalDeleteContactAction = () => {
        this.showDots()
        this.setState({
            showModalDeleteContact: true
        })
    }

    fileContact = () => {
        console.log("fileContact")
    }

    showModalSilenceConversationAction = () => {
        console.log("showModalSilenceConversationAction")
    }

    fixContact = () => {
        console.log("fixContact")
    }

    showMsj = () => {
        console.log("showMsj")
    }

    showModalDeleteConversationContactAction = () => {
        console.log("showModalDeleteConversationContactAction")
    }

    clickChat = () => {
        const idChat = this.props.chat.id
        this.props.fetchContact(idChat)
    }

    showDots = () => {
        this.setState({
            menuState: !this.state.menuState
        })
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

    deleteContact = () => {
        // this.props.deleteElementChat( this.props.chat.id )
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
                                    showModalDeleteContactAction={this.showModalDeleteContactAction} />
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

                {this.state.showModalDeleteContact ? <ModalBox body={this.renderBodyDeleteContact()} /> : null}
                {this.state.showModalFileContact ? <ModalBox body={this.renderBodyFileContact(this.props.chat.name)} /> : null}
                {this.state.showModalDeleteConversationContact ? <ModalBox body={this.renderBodyDeleteConversationContact(this.props.chat.id)} /> : null}
                {this.state.showModalSilenceConversation ? <ModalBox body={this.renderBodySilenceConversation(this.props.chat.id)} /> : null}
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
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchContact: (id) => {
            dispatch(fetchContact(id))
        }, fetchContact: (id) => {
            dispatch(fetchContact(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralContactData)