import React, { Component } from 'react';
import './GeneralContactData.scss'
import { connect } from 'react-redux'

class GeneralContactData extends Component {
    constructor(...props) {
        super(...props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onClick(this.props.contact.id)
    }
    render() {
        return (
            <div className="contact-chat" onClick={this.handleClick} >
                <div className="grid-container-contact-chat">
                    <div className="icon-contact">
                        <div className="outer-circle" >
                            <img className="img-icon-user" src={this.props.contact.imgContact} alt="icon-user" />
                            <div className="inner-circle circle">&nbsp;</div>
                        </div>
                    </div>
                    <div className="name-contact"><span className="text-contact"><p className="word-contact">{this.props.contact.name}</p><img className="status-contact" src={this.props.status_user_icon} alt="status-conctact"/></span></div>
                    <div className="day-last-message"><p className="day-last">{this.props.contact.dayLastMessage}</p></div>
                    <div className="last-message">{this.props.contact.lastMessage}</div>
                    <div className="count-message">
                        <div className="circle-count-message">
                            <p className="count-message-number">{this.props.contact.countMessage}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        status_user_icon: state.customizing.Images.status_user_attach_icon,
       
    }
}

export default connect(mapStateToProps,null)(GeneralContactData);