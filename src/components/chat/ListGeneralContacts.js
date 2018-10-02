import React, { Component } from 'react'
import GeneralContactData from './GeneralContactData'
// import { getContact } from '../../redux/selectors/contact'
import fetchContact from '../../redux/actions/contact/fetchContact'
import { connect } from 'react-redux'
class ListGeneralContacts extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(idContact) {
        this.props.fetchContact(idContact);
    }
    render() {
        return (
            <div className="main-chat-general-list-contact">
                {this.props.contacts.map(c =>
                    <GeneralContactData
                        id={c.id}
                        key={c.id}
                        nameContact={c.name}
                        dayLastMessage={c.dayLastMessage}
                        lastMessage={c.lastMessage}
                        imgContact={c.imgContact}
                        status={c.status}
                        onClick={this.handleClick}
                        countMessage={c.countMessage}
                    >
                    </GeneralContactData>
                )}
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return{
        fetchContact: ( id )=>{
            dispatch(fetchContact( id ));
        },
    }
}
export default connect(null, mapDispatchToProps)(ListGeneralContacts);