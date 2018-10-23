import React from 'react'
import './DeleteContact.scss'

let deleteConversationContact = props => {
    const { closeWindow, deleteConversationContact } = props
    return (
        <div>
            <p className="title-name-contact">¿Seguro que deseas eliminar el historial del chat?</p>
            <p>
                <button className="from-create-group-btn" onClick={deleteConversationContact}>Eliminar</button>
                <button className="from-create-group-btn" onClick={closeWindow}>Cancelar</button>
            </p>
        </div>
    )
}

export default deleteConversationContact