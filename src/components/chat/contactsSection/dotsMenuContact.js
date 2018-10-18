import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteMessage } from '../../../redux/actions/conversation/fetchConversation';
import ModalBox from '../../modals/ModalBox';
import { getContacts } from '../../../redux/selectors/contacts'
import DeleteContact from '../../../components/form/contact/DeleteContact'
import fetchContacts from '../../../redux/actions/contacts/fetchContacts'

import './dotsMenuContact.scss'
class dotsMenuContact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showMenu: false,
            showModalDeleteContact: false
        }
        this.closeModalDeleteContactAction = this.closeModalDeleteContactAction.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
    }

    closeModalDeleteContactAction() {
        this.setState({
            showModalDeleteContact: false
        });
    }

    deleteContact() {
        alert("Elimino al contacto");
        var listContacts = this.props.contacts
        var idContact = this.props.id;
        var indexContact = listContacts.findIndex(item => item.id === idContact)
        listContacts.splice(indexContact, 1)
        this.setState({
            showModalDeleteContact: false
        });
    }

    showModalDeleteContactAction = () => {
        this.setState({
            showModalDeleteContact: true,
        });
    }

    renderBodyDeleteContact = (nameContact) => {
        return (<DeleteContact closeWindow={this.closeModalDeleteContactAction} nameContact={nameContact} deleteContact={this.deleteContact} />);
    }

    toggleMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        });
    }

    componentDidMount() {
        this.dots.addEventListener('click', this.toggleMenu);
    }

    componentWillUnmount() {
        this.dots.removeEventListener('click', this.toggleMenu);
    }


    accept = () => {
        this.toggleModal();
        // this.props.deleteMessage(this.props.id);
    }

    render() {
        return (
            <div ref={div => { this.wrapper_menu_dots = div }} className="menu-wrapper">
                <img ref={img => { this.dots = img }} className="dots-menu" src={this.props.dots_menu} alt="" />
                {
                    (this.state.showMenu) &&
                    <div id={`dots_dropmenu_${this.props.id}`} ref={div => { this.menu_dots = div }} className="dots-dropmenu">
                        <p><a onClick={this.showModalDeleteContactAction}>Eliminar chat</a></p>
                        <p><a>Archivar chat</a></p>
                        <p><a>Silenciar chat</a></p>
                        <p><a>Dejar de fijar chat</a></p>
                        <p><a>Marcar como no leido</a></p>
                        <p><a>Eliminar historial del chat</a></p>
                        {this.state.showModalDeleteContact ? <ModalBox body={this.renderBodyDeleteContact(this.props.name)} /> : null}
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        contacts: getContacts(state),
        dots_menu: state.customizing.Images.dots_menu,
        multiSelect: state.messagesOptions.multiSelect
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteMessage: messageId => {
            dispatch(deleteMessage(messageId));
        }, fetchContacts: () => {
            dispatch(fetchContacts());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(dotsMenuContact);
