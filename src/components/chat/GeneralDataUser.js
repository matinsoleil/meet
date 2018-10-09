import React, { Component } from 'react'
import { getContacts } from '../../redux/selectors/contacts'
import searchContacts from '../../redux/actions/contacts/searchContacts'
import { connect } from 'react-redux'
class GeneralDataUser extends Component {
    filterList = contacts => event => {
        const val = event.target.value.toLowerCase();
        const listContactsFecth = contacts.filter(v => v.name.toLowerCase().includes(val));
        this.props.searchContacts(listContactsFecth);
    };
    render() {
        return (
            <div className="main-chat-general-data-user">
                <div className="grid-container-user-chat">
                    <div className="name-user">{this.props.name}</div>
                    <div className="icon-user">
                        <div className="outer-circle" >
                            <img className="img-icon-user" src={this.props.imgUser} alt="test" />
                            <div className="inner-circle circle">&nbsp;</div>
                        </div>
                    </div>
                    <div className="status-user">{this.props.status}</div>
                    <div className="search-contact">
                        <input type="text" className="input-search" placeholder="Buscar" onChange={this.filterList(this.props.contacts)}></input>
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
export default connect(mapStateToProps, mapDispatchToProps)(GeneralDataUser);