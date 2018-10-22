import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteMessage } from '../../../redux/actions/conversation/fetchConversation';
import updateContacts from '../../../redux/actions/contacts/updateContacts'
import { fetchConversation } from '../../../redux/actions/conversation/fetchConversation'
import { getConversation } from '../../../redux/selectors/conversation'
import { deleteConversation } from '../../../redux/actions/conversation/deleteConversation'
import { getContacts } from '../../../redux/selectors/contacts'
import DeleteContact from '../../../components/form/contact/DeleteContact'
import FileContact from '../../../components/form/contact/FileContact'
import DeleteConversationContact from '../../../components/form/contact/DeleteConversationContact'
import SilenceConversation from '../../form/contact/SilenceConversation'
import ModalBox from '../../modals/ModalBox';
import './dotsMenuContact.scss'
class dotsMenuContact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showMenu: false,
            showModalDeleteContact: false,
            showModalFileContact: false,
            showModalDeleteConversationContact: false,
            showModalSilenceConversation: false,
            showModalSilenceConversation: false
        }
        this.closeModalDeleteContactAction = this.closeModalDeleteContactAction.bind(this);
        this.closeModalDeleteConversationContactAction = this.closeModalDeleteConversationContactAction.bind(this);
        this.closeModalSilenceConversationAction = this.closeModalSilenceConversationAction.bind(this);
        this.closeModalFileContactAction = this.closeModalFileContactAction.bind(this);
        this.showModalSilenceConversationAction = this.showModalSilenceConversationAction.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
        this.fileContact = this.fileContact.bind(this);
        this.deleteConversationContact = this.deleteConversationContact.bind(this);
    }

    closeModalDeleteContactAction() {
        this.setState({
            showModalDeleteContact: false
        });
    }

    closeModalFileContactAction() {
        this.setState({
            showModalFileContact: false
        });
    }

    closeModalDeleteConversationContactAction() {
        this.setState({
            showModalDeleteConversationContact: false
        });
    }

    closeModalSilenceConversationAction() {
        this.setState({
            showModalSilenceConversation: false
        });
    }

    deleteConversationContact() {
        this.setState({
            showModalDeleteConversationContact: true,
        });
    }

    deleteContact() {
        var listContacts = this.props.contacts
        var idContact = this.props.id
        var indexContact = listContacts.findIndex(item => item.id === idContact)
        listContacts.splice(indexContact, 1)
        this.props.updateContacts(listContacts)
        this.setState({
            showModalDeleteContact: false,
            showMenu: false,
        });
    }

    fileContact() {
        var listContacts = this.props.contacts
        var idContact = this.props.id
        var indexContact = listContacts.findIndex(item => item.id === idContact)
        var infoContact = listContacts.find(item => item.id === idContact)
        infoContact.file = "1";
        listContacts.splice(indexContact, 1)
        listContacts.push(infoContact)
        this.props.updateContacts(listContacts)
        this.setState({
            showModalFileContact: false,
            showMenu: false,
        })
    }

    showModalDeleteConversationContactAction = () => {
        this.setState({
            showModalDeleteConversationContact: true,
        });
    }

    showModalSilenceConversationAction = () => {
        this.setState({
            showModalSilenceConversation: true,
        });
    }

    showModalFileContactAction = () => {
        this.setState({
            showModalFileContact: true,
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

    renderBodyFileContact = (nameContact) => {
        return (<FileContact closeWindow={this.closeModalFileContactAction} nameContact={nameContact} fileContact={this.fileContact} />);
    }

    renderBodyDeleteConversationContact = (id) => {
        return (<DeleteConversationContact closeWindow={this.closeModalDeleteConversationContactAction} id={id} deleteConversationContact={this.deleteConversationContact} />);
    }

    renderBodySilenceConversation = (id) => {
        return (<SilenceConversation closeWindow={this.closeModalSilenceConversationAction} />);
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
                        <div className="sideMenu">
                            <p className="optionSideMenu"><a onClick={this.showModalDeleteContactAction}> Eliminar chat </a></p>
                            <p className="optionSideMenu"><a onClick={this.showModalFileContactAction}> Archivar chat </a></p>
                            <p className="optionSideMenu"><a onClick={this.showModalSilenceConversationAction}> Silenciar chat </a></p>
                            <p className="optionSideMenu"><a> Dejar de fijar chat </a></p>
                            <p className="optionSideMenu"><a> Marcar como no leido </a></p>
                            <p className="optionSideMenu" onClick={this.showModalDeleteConversationContactAction} ><a> Eliminar historial del chat </a></p>
                        </div>
                        {this.state.showModalDeleteContact ? <ModalBox body={this.renderBodyDeleteContact(this.props.name)} /> : null}
                        {this.state.showModalFileContact ? <ModalBox body={this.renderBodyFileContact(this.props.name)} /> : null}
                        {this.state.showModalDeleteConversationContact ? <ModalBox body={this.renderBodyDeleteConversationContact(this.props.id)} /> : null}
                        {this.state.showModalSilenceConversation ? <ModalBox body={this.renderBodySilenceConversation(this.props.id)} /> : null}
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        contacts: getContacts(state),
        conversation: getConversation(state),
        dots_menu: state.customizing.Images.dots_menu,
        multiSelect: state.messagesOptions.multiSelect
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteMessage: messageId => {
            dispatch(deleteMessage(messageId));
        }, updateContacts: (listContacts) => {
            dispatch(updateContacts(listContacts));
        }, fetchConversation: () => {
            dispatch(fetchConversation());
        }, deleteConversation: () => {
            dispatch(deleteConversation(null));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(dotsMenuContact);
