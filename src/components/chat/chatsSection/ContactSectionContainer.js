import GeneralDataUser from './GeneralDataUser'
import ListChats from './ListChats'
import showSectionRight from '../../../redux/actions/rightSection/showSectionRight'
import hideSectionRight from '../../../redux/actions/rightSection/hideSectionRight'
import updateFilterContactSection from '../../../redux/actions/contactSection/updateFilterContactSection'
import showSectionGroups from '../../../redux/actions/groups/showSectionGroups'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import './RightSectionContainer.scss'
class RightSectionContainer extends Component {
    constructor(props) {
        super(props)
        this.showSectionGroupsClick = this.showSectionGroupsClick.bind(this)
        this.filterList = this.filterList.bind(this);
        this.open = 1;
    }

    orderByPinner(list) {
        const byPinner = list.slice(0)
        return byPinner.sort(function (a, b) {
            var x = a.pinner.toLowerCase()
            var y = b.pinner.toLowerCase()
            return x > y ? -1 : x < y ? 1 : 0;
        })
    }

    showSectionGroupsClick = () => {
        console.log(this.props);
      
        this.props.showSectionRight('GroupSectionContainer')
        //this.props.showSectionGroups()
        this.open = 0;
        
    }

    filterList = (event) => {
        const val = event.target.value.toLowerCase()
        let result = [];
        if (val.length === 0) {
            result = this.props.contacts
        } else {
            result = this.props.contacts.filter(v => v.name.toLowerCase().includes(val))
        }
        this.props.updateFilterContactSection(result)
    }

    render() {
        const filter_contacts = this.props.contactSection.filter_contacts
        let contacts = []
        if (!filter_contacts) { contacts = this.props.contacts } else { contacts = filter_contacts }
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
                <ListChats listChats={this.orderByPinner(contacts)} />
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
        showSectionRight: (showSection) => {
            dispatch(showSectionRight(showSection))
        },
        showSectionGroups: () => {
            dispatch(showSectionGroups())
        },   
        hideSectionRight: () =>{
            dispatch(hideSectionRight())
        },
        updateFilterContactSection: (listaContact) => {
            dispatch(updateFilterContactSection(listaContact))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightSectionContainer)