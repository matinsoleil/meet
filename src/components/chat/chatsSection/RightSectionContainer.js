import GeneralDataUser from './GeneralDataUser'
import ListChats from './ListChats'
import { getContacts } from '../../../redux/selectors/contacts'
import { getGroups } from '../../../redux/selectors/groups'
import fetchContacts from '../../../redux/actions/contacts/fetchContacts'
import showSectionGroups from '../../../redux/actions/groups/showSectionGroups'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import './RightSectionContainer.scss'
class RightSectionContainer extends Component {
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

    // grouplistChast() {
    //     const contacts = this.props.contacts
    //     return this.orderByPinner(list);
    // }

    filterList = (event) => {
        const val = event.target.value.toLowerCase()
        let result = [];
        if (val.length === 0) {
            result = this.props.contacts
        } else {
            result = this.props.contacts.filter(v => v.name.toLowerCase().includes(val))
        }
        this.setState({
            listChats: result
        });
    }

    render() {
        const contacts = this.orderByPinner(this.props.contacts)
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

                <ListChats listChats={contacts} />               
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        add_icon: state.customizing.Images.add_icon,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchContacts: () => {
            dispatch(fetchContacts())
        },
        showSectionGroups: (listaContact) => {
            dispatch(showSectionGroups(listaContact))
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightSectionContainer)