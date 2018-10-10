import React, { Component } from 'react'
import { getContacts } from '../../../redux/selectors/contacts'
import searchContacts from '../../../redux/actions/contacts/searchContacts'
import ContactAddGroup from './ContactAddGroup'
import { connect } from 'react-redux'
import './HeaderGroupSection.scss'
class HeaderGroupSection extends Component {
    filterList = contacts => event => {
        const val = event.target.value.toLowerCase();
        const listContactsFecth = this.props.contacts.filter(v => v.name.toLowerCase().includes(val));
        this.props.searchContacts(listContactsFecth);
    };
    render() {
        return (
            <div className="main-header-group-section">
                <div className="grid-container-header-section">
                    <div className="header-group">
                        <div>
                            <ContactAddGroup
                                id="1"
                                key="1"
                                nameContact="name"
                                dayLastMessage="dayLastMessage"
                                lastMessage="lastMessage"
                                imgContact="https://cdn3.iconfinder.com/data/icons/misc-file-formats/512/20-512.png"
                                status="status"
                                onClick="null"
                                countMessage="s" >
                            </ContactAddGroup>
                        </div>
                    </div>
                    <div className="search-contact">
                        <input type="text" className="input-search" placeholder="Buscar" onChange={this.filterList(this.props.user.contacts)}></input>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        contacts: getContacts(state),
    }
}
const mapDispatchToProps = dispatch => {
    return {
        searchContacts: (listContactsFecth) => {
            dispatch(searchContacts(listContactsFecth));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderGroupSection);