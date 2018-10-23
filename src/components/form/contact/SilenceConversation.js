import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './SilenceConversation.scss'

const validate = values => {
    const errors = {}
    if (!values.timeSilence) {
        errors.timeSilence = 'Debe seleccionar una opción.'
    }
    return errors
}

let silenceConversation = props => {
    const { handleSubmit, closeWindow, touched, error, warning } = props
    return (
        <div>
            <span className="contentAnswer" >
            <p className="title-name-contact">Silenciar durante… </p>
            </span>
            <form onSubmit={handleSubmit}>
                <p><Field name="timeSilence" component="input" type="radio" value="1" /> 15 minutos</p>
                <p><Field name="timeSilence" component="input" type="radio" value="2" /> 1 hora</p>
                <p><Field name="timeSilence" component="input" type="radio" value="3" /> 8 horas</p>
                <p><Field name="timeSilence" component="input" type="radio" value="5" /> 1 año</p>
                <p><Field name="timeSilence" component="input" type="radio" value="4" /> 1 semana</p>
                {touched &&
                    ((error && <p><span className="error">{error}</span></p>) ||
                        (warning && <p><span className="warning">{warning}</span></p>))}
                 <span className="contentResponse">       
                <button className="from-create-group-btn response" type="submit">SILENCIAR</button>
                <button className="from-create-group-btn response" onClick={closeWindow}>CANCELAR</button>
                </span>
            </form>
        </div>
    )
}

silenceConversation = reduxForm({
    form: 'silenceContact',
    validate
})(silenceConversation)

export default silenceConversation
