import React from 'react'
import './SilenceConversation.scss'

let silenceConversation = props => {
    const { closeWindow } = props
    return (
        <div>
            <p className="title-name-contact">Silenciar durante… </p>
            <p className="text-time-silence"> <input type="radio" name="time-silence" value="1"></input> 15 minutos </p>
            <p className="text-time-silence"> <input type="radio" name="time-silence" value="2"></input> 1 hora </p>
            <p className="text-time-silence"> <input type="radio" name="time-silence" value="3"></input> 8 horas </p>
            <p className="text-time-silence"> <input type="radio" name="time-silence" value="4"></input> 1 semana </p>
            <p className="text-time-silence"> <input type="radio" name="time-silence" value="5"></input> 1 año </p>
            <p className="text-time-silence">
                <button className="from-create-group-btn" onClick={closeWindow}>Silenciar</button>
                <button className="from-create-group-btn" onClick={closeWindow}>Cancelar</button>
            </p>
        </div>
    )
}

export default silenceConversation