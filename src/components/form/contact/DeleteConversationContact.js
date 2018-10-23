import React from 'react'
import './DeleteContact.scss'

let deleteConversationContact = props => {
    const { closeWindow, deleteConversationContact } = props
    return (
        <div  className="contentModal">
             <span className="contentAnswer" >
            <p className="answer" >¿Seguro que deseas eliminar el historial del chat?</p>
            </span>
            <span className="contentResponse">
                <button className="from-create-group-btn response" onClick={deleteConversationContact}>ELIMINAR</button>
                <button className="from-create-group-btn response" onClick={closeWindow}>CANCELAR</button>
            </span>
        </div>
    )
}

export default deleteConversationContact