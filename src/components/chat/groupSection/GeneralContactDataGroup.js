import React, { Component } from 'react'
import './GeneralContactDataGroup.scss'
import { connect } from 'react-redux'

class GeneralContactData extends Component {

    constructor(props) {
        super(props)
        this.addContactGroupClick = this.addContactGroupClick.bind(this)
    }

    addContactGroupClick() {
        this.props.onClick(this.props.contact.id)
    }

    render() {
        return (
            <div className="contact-group">
                <div className={'markerListContactGroup'}>
                    {this.props.contact.name[0]}
                </div>
                <div className="contact-chat-group" onClick={this.addContactGroupClick} >
                    <div className="grid-container-contact-chat-group">
                        <div className="icon-contact-group">
                            <div className="outer-circle-group" >
                                <img className="img-icon-user-group" src={this.props.contact.imgContact} alt="user" />
                                <img className="inner-circle-group circle-group" src={this.props.claro_user_icon} alt="claro-user-icon" />
                            </div>
                        </div>
                        <div className="name-contact-group">{this.props.contact.name} </div>
                        <div className="count-message-group">
                                {  1 == "0" ?<img className="stateUserGroup" src={this.props.check_mark_check} />:null }
                                {  0 == "0" ?<img className="stateUserGroup" src={this.props.check_mark_uncheck} />:null } 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        claro_user_icon: state.customizing.Images.claro_user_icon,
        check_mark_check:  state.customizing.Images.check_mark_check ,
        check_mark_uncheck:  state.customizing.Images.check_mark_uncheck
    }
}

export default connect(mapStateToProps, null)(GeneralContactData)