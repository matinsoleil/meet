import GeneralDataUser from '../../../components/chat/contactsSection/GeneralDataUser'
import ListGeneralContacts from '../../../components/chat/contactsSection/ListGeneralContacts'
import showSectionGroups from '../../../redux/actions/groups/showSectionGroups'
// import showAlertGeneral from '../../../redux/actions/alertGeneral/showAlertGeneral'
import { getAlertGeneral } from '../../../redux/selectors/alertGeneral';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import './ContactSectionContainer.scss'

class ContactSectionContainer extends Component {
    constructor(props) {
        super(props);
        this.showSectionGroupsClick = this.showSectionGroupsClick.bind(this);
    }
    showSectionGroupsClick(listContact) {
        this.props.showSectionGroups(this.props.contacts)
    }
    render() {
        return (
            <div className="contacts-section-container">
                <GeneralDataUser user={this.props.user} contacts={this.props.contacts} />
                <div className="chat-state">
                    <h2 className="title-chat">Chats</h2>
                    <div className="dropdown">
                    <button className="dropbtn"><p className="plus-text">Nuevo</p><img alt="plus-a" className="plus-a" src={this.props.add_icon} /></button>
                        <div className="dropdown-content">
                        
                            <a onClick={this.showSectionGroupsClick} >Nuevo chat grupal</a>
                        </div>
                    </div>
                </div>
                {this.props.alertGeneral.show === true ? <div className="message-popup "> <p className="text-message-popup"> <span className="msg"> {this.props.alertGeneral.msj} </span> </p> </div> : null}
                <ListGeneralContacts contacts={this.props.listContact} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        add_icon: state.customizing.Images.add_icon,
        alertGeneral: getAlertGeneral(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showSectionGroups: (listaContact) => {
            dispatch(showSectionGroups(listaContact));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactSectionContainer);