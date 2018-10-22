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
            <p className="title-name-contact">Silenciar durante… </p>
            <form onSubmit={handleSubmit}>
                <p><Field name="timeSilence" component="input" type="radio" value="1" /> 15 minutos</p>
                <p><Field name="timeSilence" component="input" type="radio" value="2" /> 1 hora</p>
                <p><Field name="timeSilence" component="input" type="radio" value="3" /> 8 horas</p>
                <p><Field name="timeSilence" component="input" type="radio" value="5" /> 1 año</p>
                <p><Field name="timeSilence" component="input" type="radio" value="4" /> 1 semana</p>
                {touched &&
                    ((error && <p><span className="error">{error}</span></p>) ||
                        (warning && <p><span className="warning">{warning}</span></p>))}
                <button className="from-create-group-btn" type="submit">Silenciar</button>
                <button className="from-create-group-btn" onClick={closeWindow}>Cancelar</button>
            </form>
        </div>
    )
}

silenceConversation = reduxForm({
    form: 'silenceContact',
    validate
})(silenceConversation)

export default silenceConversation
