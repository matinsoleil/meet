import GeneralDataUser from './GeneralDataUser'
import ListGeneralChats from './ListGeneralChats'
import { getContacts } from '../../../redux/selectors/contacts'
import { getGroups } from '../../../redux/selectors/groups'
import fetchContacts from '../../../redux/actions/contacts/fetchContacts'
import fetchGroups from '../../../redux/actions/groups/fetchGroups'
import showSectionGroups from '../../../redux/actions/groups/showSectionGroups'
import hideAlertGeneral from '../../../redux/actions/alertGeneral/hideAlertGeneral'
import { getAlertGeneral } from '../../../redux/selectors/alertGeneral'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import './ChatsListsSectionContainer.scss'
class ChatsListsSectionContainer extends Component {
    constructor(props) {
        super(props);
        this.showSectionGroupsClick = this.showSectionGroupsClick.bind(this);
        this.hideMensajeGeneralClick = this.hideMensajeGeneralClick.bind(this);
    }
    showSectionGroupsClick(listContact) {
        this.props.showSectionGroups(this.props.contacts)
    }
    hideMensajeGeneralClick() {
        this.props.hideAlertGeneral()
    }
    orderByName(list) {
        const byName = list.slice(0);
        return byName.sort(function (a, b) {
            var x = a.name.toLowerCase();
            var y = b.name.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });
    }
    orderByPinner(list) {
        const byPinner = list.slice(0);
        return byPinner.sort(function (a, b) {
            var x = a.pinner.toLowerCase();
            var y = b.pinner.toLowerCase();
            return x > y ? -1 : x < y ? 1 : 0;
        });
    }
    grouplistChast() {
        const contacts = this.props.contacts
        const groups = this.props.groups.groups
        const list = []
        contacts.map(contact => list.push(contact))
        groups.map(group => list.push(group))
        return this.orderByPinner(list);
    }
    render() {
        const listChats = this.grouplistChast()
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
                {this.props.alertGeneral.show === true ? <div className="message-popup "> <p className="text-message-popup"> <span className="msg"> {this.props.alertGeneral.msj} </span> </p> <p className="text-message-popup"> <span className="msg" onClick={this.hideMensajeGeneralClick}> Cerrar </span> </p> </div> : null}
                <ListGeneralChats listChats={listChats} />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        contacts: getContacts(state),
        groups: getGroups(state),
        add_icon: state.customizing.Images.add_icon,
        alertGeneral: getAlertGeneral(state)
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchContacts: () => {
            dispatch(fetchContacts())
        },
        fetchGroups: () => {
            dispatch(fetchGroups())
        },
        showSectionGroups: (listaContact) => {
            dispatch(showSectionGroups(listaContact));
        },
        hideAlertGeneral: () => {
            dispatch(hideAlertGeneral());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatsListsSectionContainer);