import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import GeneralContactDataGroup from './contactRow'
import './ContactList.scss';

class ContactList extends Component {
    constructor(props) {
        super(props)
    }

    orderByName(listContacts) {
        const byName = listContacts.slice(0);
        return byName.sort(function (a, b) {
            var x = a.name.toLowerCase()
            var y = b.name.toLowerCase()
            return x < y ? -1 : x > y ? 1 : 0
        })
    }

    filterList(){
        let result = this.props.contacts.filter(e=>{
            return (e.name.toLowerCase().indexOf(this.props.filter.toLowerCase())>-1);
        });
        return result;
    }

    render() {
        let indexAlphabet = '';
        let flagAlphabet = '';
        let contacts = (!this.props.filter)? this.orderByName(this.props.contacts) : this.orderByName(this.filterList(this.props.contacts));
        return (
            <div id='list-contact-group' className="contact-list"
                 style={(this.props.selectedContacts.length>0)?{paddingBottom:'86px'}:{}}>

                {
                    contacts.map(contact => {

                        if (indexAlphabet.includes(contact.name.charAt(0)) === false) {
                            indexAlphabet = contact.name.charAt(0)
                            flagAlphabet = contact.name.charAt(0)

                        } else {
                            flagAlphabet = ""
                        }
                        return (
                            <Fragment key={contact.id}>
                                {(flagAlphabet!=='')&&
                                <div className={"flag"}>
                                    <span>{flagAlphabet}</span>
                                </div>}
                                <GeneralContactDataGroup
                                    className="contact-group"
                                    key={contact.id}
                                    contact={contact}
                                    flagAlphabet={flagAlphabet}
                                />
                            </Fragment>)

                    })
                }
            </div>
        )
    }
}

const mapStateToProps = ({groupsSection,views,contacts}) => {
    return {
        contacts:contacts,
        filter: views.supportSection.filter,
        selectedContacts: views.supportSection.selectedContacts
    }
}
export default connect(mapStateToProps)(ContactList);