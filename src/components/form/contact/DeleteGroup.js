import React from 'react'
import './DeleteContact.scss'

let AlertDeleteGroupForm = props => {
    const { closeWindow, nameContact, deleteContact } = props
    return (
        <div className="contentModal">
            <span className="contentAnswer" >
                <p className="answer">¿Seguro que deseas salir del grupo {nameContact}?</p>
            </span>
            <span className="contentResponse">
                <button className="response" onClick={deleteContact}>ELIMINAR</button>
                <button className="response" onClick={closeWindow}>CANCELAR</button>
            </span>
        </div>
    )
}

export default AlertDeleteGroupForm