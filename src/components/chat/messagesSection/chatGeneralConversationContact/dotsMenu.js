import React, { Component } from 'react';
import { connect } from 'react-redux';
import { multiSelectState, messageSelected } from './../../../../redux/actions/messagesOptions/messagesOptions';
import { deleteMessage } from '../../../../redux/actions/conversation/fetchConversation';
import ModalBox from '../../../modals/ModalBox';
import { showSectionGroups } from '../../../../redux/actions/groups/showSectionGroups';
// import $ from 'jquery';
class DotsMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showMenu: false
        }
    }

    componentDidMount() {
        this.dots.addEventListener('click', this.toggleMenu);
    }

    componentWillUnmount(){
        this.dots.removeEventListener('click',this.toggleMenu);
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

    reply = () => {
        this.toggleMenu();
        this.props.showDots();
        this.props.messageSelected(this.props.id,true);
    }

    multiSelection = (e) => {
        this.toggleMenu();
        this.props.showDots();
        this.props.multiSelectState(!this.props.multiSelect);
    }

    accept = () => {
        this.toggleModal();
        this.props.showDots();
        this.props.deleteMessage(this.props.id);
    }

    render() {
        return (
            <div ref={div => { this.wrapper_menu_dots = div }} className="menu-wrapper">
                <img ref={img => { this.dots = img }} className="dots-menu" src={this.props.dots_menu} alt="" />
                {
                    (this.state.showMenu) &&
                    <div id={`dots_dropmenu_${this.props.id}`} ref={div => { this.menu_dots = div }} className="dots-dropmenu">
                        <a onClick={this.reply}>{'Responder'}</a>
                        <a>{'Reenviar'}</a>
                        <a onClick={this.multiSelection} >{'Seleccionar varios'}</a>
                        <a onClick={this.toggleModal} >{'Eliminar'}</a>
                    </div>
                }
                {(this.state.showModal) &&
                    <ModalBox body={
                        <div>
                            <div className='title'>{'¿Seguro que desea eliminar este mensaje?'}</div>
                            <div className='button-section'>
                                <button onClick={()=>{this.toggleModal();this.props.showDots();}}>Cancelar</button>
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
        multiSelectState: (state) => {
            dispatch(multiSelectState(state));
        },
        deleteMessage: messageId => {
            dispatch(deleteMessage(messageId));
        },
        showSectionGroups: listContacs => {
            dispatch(showSectionGroups(listContacs));
        },
        messageSelected: (messageId,state) => {
            dispatch(messageSelected(messageId,state));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DotsMenu);
