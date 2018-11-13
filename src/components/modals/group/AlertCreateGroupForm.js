import React from 'react'
import {connect} from 'react-redux';
import { showModal } from '../../../redux/actions/modalBox/modalBox';
import './AlertCreateGroupForm.scss'

let AlertCreateGroupForm = props => {
    return (
        <div className="contentModal">
             <span className="contentAnswer" > 
            <p className="title-name-group">Debe seleccionar un contacto</p>
            </span> 
            <span className="contentResponse">
            <p>
                <button className="from-create-group-btn" onClick={props.showModal}>CERRAR</button>
            </p>
            </span>
        </div>
    )
}

export default connect(null,dispatch => ({
    showModal: () => {dispatch(showModal());}
}))(AlertCreateGroupForm);



           
       