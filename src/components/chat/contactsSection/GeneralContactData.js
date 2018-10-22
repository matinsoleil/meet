import React, { Component } from 'react';
import './GeneralContactData.scss'
import DotsMenuContact from './dotsMenuContact';
import { connect } from 'react-redux'

class GeneralContactData extends Component {
    constructor(...props) {
        super(...props);
        this.clickChat = this.clickChat.bind(this);
        this.state = {
            menuState: false,
        }
    }

    clickChat() {
        this.props.onClick(this.props.contact.id)
    }

    componentDidMount() {
        this.bubble.addEventListener('mouseenter', this.showDots);
        this.bubble.addEventListener('mouseleave', this.showDots);
    }

    componentWillUnmount() {
        this.bubble.removeEventListener('mouseenter', this.showDots);
        this.bubble.removeEventListener('mouseleave', this.showDots);
    }

    showDots = () => {
        this.setState({
            menuState: !this.state.menuState
        });
    }

    render() {
        return (
            <div className="contact-chat" ref={div => { this.bubble = div }}>
                <div className="grid-container-contact-chat">
                    <div className="icon-contact" onClick={this.clickChat}>
                        <div className="outer-circle" >
                            <img className="img-icon-user" src={this.props.contact.imgContact} alt="icon-user" />
                            <div className="inner-circle circle">&nbsp;</div>
                        </div>
                    </div>
                    <div className="name-contact" onClick={this.clickChat}>
                        <span className="text-contact">
                            <p className="word-contact">{this.props.contact.name}</p>
                            {
                                this.props.contact.silence !== "0" ? <img className="status-contact" src={this.props.mute_a_icon} alt="status-conctact" /> : null
                            }
                            {
                                this.props.contact.file !== "0" ? <img className="status-contact" src={this.props.file_icon} alt="status-conctact" /> : null
                            }
                            {
                                this.props.contact.pinner !== "0" ? <img className="status-contact" src={this.props.status_user_icon} alt="status-conctact" /> : null
                            }
                        </span>
                    </div>
                    <div className="day-last-message" onClick={this.clickChat}><p className="day-last">{this.props.contact.dayLastMessage}</p></div>
                    <div className="last-message" onClick={this.clickChat}>{this.props.contact.lastMessage}</div>
                    <div className="count-message" onClick={this.clickChat}>
                        {
                            this.props.contact.countMessage !== "0" ? <div className="circle-count-message"> <p className="count-message-number">{this.props.contact.countMessage}</p> </div> : null
                        }
                    </div>
                    {
                        (this.state.menuState) &&
                        <DotsMenuContact showDots={this.showDots} display={this.state.menuState} contact={this.props.contact} id={this.props.contact.id} type={null} selectable={this.state.selectable} />
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        dots_menu: state.customizing.Images.dots_menu,
        status_user_icon: state.customizing.Images.status_user_attach_icon,
        mute_a_icon: state.customizing.Images.mute_a_icon,
        file_icon: state.customizing.Images.file_icon,
    }
}

export default connect(mapStateToProps, null)(GeneralContactData);