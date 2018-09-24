import React, { Component } from 'react'
import GeneralContactData from './GeneralContactData'
import { getContact } from '../../redux/selectors/contact'
import fetchContact from '../../redux/actions/contact/fetchContact'
import { connect } from 'react-redux'

class ListGeneralContacts extends Component {
    constructor(...props) {
        super(...props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(v) {
        const ress = this.props.fetchContact();
        console.log(ress);
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
                    >
                    </GeneralContactData>
                )}
            </div>
        )
    }
}




const mapStateToProps = (state, props) => {
    return {
        contact: getContact(state, props),
    }
}


const mapDispatchToProps = dispatch => {
    return{
        fetchContact: ()=>{
            dispatch(fetchContact());
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListGeneralContacts);