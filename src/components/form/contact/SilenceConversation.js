import React from 'react'
import './DeleteContact.scss'

let silenceConversation = props => {
    const { closeWindow } = props
    return (
        <div>
            <p className="title-name-contact">Silenciar durante… </p>
            <p> <input type="radio" name="time"></input> 15 minutos </p>
            <p> <input type="radio" name="time"></input> 1 hora </p>
            <p> <input type="radio" name="time"></input> 8 horas </p>
            <p> <input type="radio" name="time"></input> 1 semana </p>
            <p> <input type="radio" name="time"></input> 1 año </p>
            <p>
                <button className="from-create-group-btn" onClick={closeWindow}>Cancelar</button>
                <button className="from-create-group-btn" onClick={closeWindow}>Silenciar</button>
            </p>
        </div>
    )
}

export default silenceConversation