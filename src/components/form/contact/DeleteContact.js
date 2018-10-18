import React from 'react'
import './DeleteContact.scss'

let AlertCreateGroupForm = props => {
    const { closeWindow, nameContact } = props
    return (
        <div>
            <p className="title-name-contact">¿Seguro que deseas eliminar el chat con {nameContact}?</p>
            <p>
            <button className="from-create-group-btn" onClick={closeWindow}>Eliminar</button>
                <button className="from-create-group-btn" onClick={closeWindow}>Cancelar</button>
            </p>
        </div>
    )
}

export default AlertCreateGroupForm