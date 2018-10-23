import React from 'react'
import './DeleteContact.scss'

let AlertCreateGroupForm = props => {
    const { closeWindow, nameContact, deleteContact } = props
    return (
        <div className="contentModal">
            <span className="contentAnswer" >
                <p className="answer">¿Seguro que deseas eliminar el chat con {nameContact}?</p>
            </span>
            <span className="contentResponse">
                <button className="from-create-group-btn response" onClick={deleteContact}>ELIMINAR</button>
                <button className="from-create-group-btn response" onClick={closeWindow}>CANCELAR</button>
            </span>
        </div>
    )
}

export default AlertCreateGroupForm