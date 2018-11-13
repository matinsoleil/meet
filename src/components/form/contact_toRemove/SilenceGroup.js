import React from 'react'

let AlertSilenceGroupForm = props => {
    const { closeWindow, nameContact, leaveGroup } = props
    return (
        <div className="contentModal">
            <span className="contentAnswer" >
                <p className="answer">¿Seguro que deseas salir del grupo {nameContact}?</p>
            </span>
            <span className="contentResponse">
                <button className="response" onClick={leaveGroup}>Salir</button>
                <button className="response" onClick={closeWindow}>Cancelar</button>
            </span>
        </div>
    )
}

export default AlertSilenceGroupForm