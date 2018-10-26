import React, { Component } from 'react';
import './GeneralChatData.scss'
import DotsMenuContact from './dotsMenuContact';
import fetchContact from '../../../redux/actions/contact/fetchContact'
import { connect } from 'react-redux'
class GeneralContactData extends Component {
    constructor(...props) {
        super(...props);
        this.state = {
            menuState: false,
            msjChat: false,
        }
    }

    componentDidMount() {
        this.bubble.addEventListener('mouseenter', this.showDots);
        this.bubble.addEventListener('mouseleave', this.showDots);
    }

    componentWillUnmount() {
        this.bubble.removeEventListener('mouseenter', this.showDots);
        this.bubble.removeEventListener('mouseleave', this.showDots);
    }

    clickChat = () => {
        // this.props.fetchContact(idChat);
        const idChat = this.props.chat.id
        this.props.fetchContact(idChat)
    }


    showDots = () => {
        this.setState({
            menuState: !this.state.menuState
        });
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

    render() {
        return (
            <div className="contact-chat" ref={div => { this.bubble = div }}  >
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
                    <div className="day-last-message" onClick={this.clickChat}>
                        <div className="inPoints">
                            {
                                (this.state.menuState) &&
                                <DotsMenuContact showDots={this.showDots} chat={this.props.chat} id={this.props.chat.id} />
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
            dispatch(fetchContact(id));
        }, fetchContact: (id) => {
            dispatch(fetchContact(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralContactData);