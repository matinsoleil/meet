import GeneralDataUser from './GeneralDataUser'
import ListChats from './ListChats'
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
        super(props)
        this.state = {
            listChats: [],
        };
        this.showSectionGroupsClick = this.showSectionGroupsClick.bind(this)
        this.filterList = this.filterList.bind(this)
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

    showSectionGroupsClick(listContact) {
        this.props.showSectionGroups(this.props.contacts)
    }

    grouplistChast() {
        const contacts = this.props.contacts
        const groups = this.props.groups.groups
        const list = []
        contacts.map(contact => list.push(contact))
        groups.map(group => list.push(group))
        return this.orderByPinner(list);
    }

    filterList = (event) => {
        const val = event.target.value.toLowerCase()
        let result = [];
        if (val.length === 0) {
            result = this.grouplistChast()
        } else {
            result = this.grouplistChast().filter(v => v.name.toLowerCase().includes(val))
        }
        this.setState({listChats: result})
    }

    render() {
        if (this.props.alertGeneral.show === true) {
            setTimeout(function () {
                this.props.hideAlertGeneral()
            }.bind(this), 3000)
        }
        return (
            <div className="contacts-section-container">
                <span className="tab-contacts"></span>
                <GeneralDataUser user={this.props.user} filterList={this.filterList} />
                <div className="chat-state">
                    <h2 className="title-chat">Chats</h2>
                    <div className="dropdown">
                        <button className="dropbtn"><p className="plus-text">Nuevo</p><img alt="plus-a" className="plus-a" src={this.props.add_icon} /></button>
                        <div className="dropdown-content">
                            <a onClick={this.showSectionGroupsClick} >Nuevo chat grupal</a>
                        </div>
                    </div>
                </div>
                {this.props.alertGeneral.show === true ?
                    <div className="message-popup">
                        <p className="text-message-popup"> <span className="msg"> {this.props.alertGeneral.msj} </span> </p>
                    </div>
                    : null
                }
                <ListChats listChats={this.grouplistChast()} />

                {/* <ListChats listChats={this.state.listChats} /> */}
                
            </div>
        )
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
            dispatch(showSectionGroups(listaContact))
        },
        hideAlertGeneral: () => {
            dispatch(hideAlertGeneral())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatsListsSectionContainer)