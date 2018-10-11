import React, {Component} from 'react';
import {connect} from 'react-redux';
import './inactiveChat.scss'

class InactiveChat extends Component {
    render(){
        return(
            <div className='chat-inactive'>
                <div className="title">{'Mantén tu teléfono conectado'}</div>
                <div className="subtitle" >{'Para obtener todas las funciones de Claro connect descarga la aplicación para escritorio.'}</div>
                <img src={this.props.logo} alt=""/>
            </div>
        );  
    }
}

const mapStateToProps = state =>{
    return{
        logo: state.customizing.Images.claro_connect_logo,
    }
}

export default connect(mapStateToProps,null)(InactiveChat);