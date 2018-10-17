import React, { Component } from 'react';
import {connect} from 'react-redux';
import {multiSelectState} from './../../../../redux/actions/messagesOptions/messagesOptions';
import { deleteMessage } from '../../../../redux/actions/conversation/fetchConversation';
import ModalBox from '../../../modals/ModalBox';
// import $ from 'jquery';

class DotsMenu extends Component {

    constructor(props){
        super(props);
        this.state = {
            showModal:false,
        }
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal,
        });
    }
    
    componentDidMount(){
        this.dots.addEventListener('click',(e)=>{
            var style = '';
            if(this.menu_dots.style.display === 'flex'){
                style = 'none'
            }else{
                style = 'flex';
                
            }
            this.menu_dots.style.display = style;
        });
    }

    componentDidUpdate(){
        this.dots.style.display = (this.props.display) ? 'block' : 'none';
        this.menu_dots.style.display = (!this.props.display) && 'none';
    }

    multiSelection = (e) => {
        this.props.multiSelectState(!this.props.multiSelect);
    }

    accept = () =>{
        this.toggleModal();
        this.props.deleteMessage(this.props.id);
    }

    render() {
        return (
            <div ref={div=>{this.wrapper_menu_dots=div}} className="menu-wrapper">
                <img ref={img=>{this.dots = img}} className="dots-menu" src={this.props.dots_menu} alt=""/>
                <div id={`dots_dropmenu_${this.props.id}`} ref={div=>{this.menu_dots=div}} className="dots-dropmenu">
                    <a>Responder</a>
                    <a>Reenviar</a>
                    <a onClick={this.multiSelection} >Seleccionar varios</a>
                    <a onClick={this.toggleModal} >Eliminar</a>
                </div>
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

const mapStateToProps = state =>{
    return{
        dots_menu: state.customizing.Images.dots_menu,
        multiSelect: state.messagesOptions.multiSelect
    }
}

const mapDispatchToProps = dispatch => {
    return{
        multiSelectState: (state) => {
            dispatch(multiSelectState(state));
        },
        deleteMessage: messageId =>{
            dispatch(deleteMessage(messageId));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DotsMenu);
