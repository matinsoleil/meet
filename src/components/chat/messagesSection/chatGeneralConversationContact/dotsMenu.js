import React, { Component } from 'react';
import {connect} from 'react-redux';
import {multiSelectState} from './../../../../redux/actions/messagesOptions/messagesOptions';
// import $ from 'jquery';

class DotsMenu extends Component {



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

    render() {
        return (
            <div ref={div=>{this.wrapper_menu_dots=div}} className="menu-wrapper">
                <img ref={img=>{this.dots = img}} className="dots-menu" src={this.props.dots_menu} alt=""/>
                <div id={`dots_dropmenu_${this.props.id}`} ref={div=>{this.menu_dots=div}} className="dots-dropmenu">
                    <a>Responder</a>
                    <a>Reenviar</a>
                    <a onClick={this.multiSelection} >Seleccionar varios</a>
                    <a>Eliminar</a>
                </div>
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
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DotsMenu);
