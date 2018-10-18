import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { deleteMessage } from '../../../../redux/actions/conversation/fetchConversation';
import { deleteMessage } from '../../../redux/actions/conversation/fetchConversation';
import ModalBox from '../../modals/ModalBox';
import './dotsMenuContact.scss'
class dotsMenuContact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showMenu: false
        }
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal,
        });
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
                        <p><a>Archivar chat</a></p>
                        <p><a>Silenciar chat</a></p>
                        <p><a>Dejar de fijar chat</a></p>
                        <p><a>Marcar como no leido</a></p>
                        <p><a>Eliminar historial del chat</a></p>
                        <p><a>Eliminar chat</a></p>
                    </div>
                }
                {(this.state.showModal) &&
                    <ModalBox body={
                        <div>
                            <div className='title'>{'¿Seguro que desea eliminar este mensaje?'}</div>
                            <div className='button-section'>
                                <button onClick={this.toggleModal}>Cancelar</button>
                                <button onClick={this.accept}>Eliminar</button>
                            </div>
                        </div>
                    } />
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        dots_menu: state.customizing.Images.dots_menu,
        multiSelect: state.messagesOptions.multiSelect
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // multiSelectState: (state) => {
        //     dispatch(multiSelectState(state));
        // },
        deleteMessage: messageId => {
            dispatch(deleteMessage(messageId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(dotsMenuContact);
