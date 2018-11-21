import GeneralDataUser from './GeneralDataUser';
import GeneralChatData from './GeneralChatData'
import { fetchContactSection } from '../../../redux/actions/contactSection/fetchContactSection'
import showSectionRight from '../../../redux/actions/rightSection/showSectionRight';
import updateFilterContactSection from '../../../redux/actions/contactSection/updateFilterContactSection';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import './ContactSectionContainer.scss'

class ContactSectionContainer extends Component {
    constructor(props) {
        super(props);
        this.showSectionGroupsClick = this.showSectionGroupsClick.bind(this);
        this.filterList = this.filterList.bind(this);
        this.open = 1;
    }

    componentDidMount() {
        this.props.fetchContactSection();
    }

    orderByFix(list) {
        const byFix = list.slice(0);
        return byFix.sort(function (a, b) {
            var x = a.fix;
            var y = b.fix;
            return x > y ? -1 : x < y ? 1 : 0;
        })
    }

    showSectionGroupsClick = () => {
        this.props.showSectionRight('GroupSectionContainer');
        this.open = 0;
    }

    filterList = (event) => {
        const val = event.target.value.toLowerCase();
        let result = [];
        if (val.length === 0) {
            result = this.props.contacts;
        } else {
            result = this.props.contacts.filter(v => v.name.toLowerCase().includes(val));
        }
        this.props.updateFilterContactSection(result);
    }

    render() {
        let listContact = this.props.contacts.filter(function (contact) {
            return contact.conversations !== null;
        })
        const filter_contacts = this.props.contactSection.filter_contacts;
        let contacts = [];
        if (!filter_contacts) { contacts = listContact; } else { contacts = filter_contacts; }
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
                <div className="main-chat-general-list-contact" >
                    {this.orderByFix(contacts).map(chat =>
                        <GeneralChatData chat={chat}
                            key={chat.id}
                        />
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        add_icon: state.customizing.Images.add_icon,
        contactSection: state.contactSection,
        user: state.users,
        contacts: state.contacts,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showSectionRight: (showSection) => {
            dispatch(showSectionRight(showSection))
        },
        updateFilterContactSection: (listaContact) => {
            dispatch(updateFilterContactSection(listaContact))
        },
        fetchContactSection: () => {
            dispatch(fetchContactSection())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactSectionContainer)