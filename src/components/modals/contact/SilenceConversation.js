import React from 'react'
import { reduxForm } from 'redux-form'
import {connect} from 'react-redux';
import './SilenceConversation.scss'
import { showModal } from '../../../redux/actions/modalBox/modalBox';

// const validate = values => {
//     const errors = {}
//     if (!values.timeSilence) {
//         errors.timeSilence = 'Debe seleccionar una opción.'
//     }
//     return errors
// }

let SilenceConversation = props => {
    const { handleSubmit} = props
    return (
        <div className="contentModalSilence" >
            <span className="contentAnswer" >
            <p  className="answer" >{props.title}</p>
            </span>
            <form onSubmit={handleSubmit}>
                <span className="contentOptions">
                <p className="contentOption"><input name="timeSilence" component="input" type="radio" value="1" /> 15 minutos</p>
                <p className="contentOption"><input name="timeSilence" component="input" type="radio" value="2" /> 1 hora</p>
                <p className="contentOption"><input name="timeSilence" component="input" type="radio" value="3" /> 8 horas</p>
                <p className="contentOption"><input name="timeSilence" component="input" type="radio" value="5" /> 1 año</p>
                <p className="contentOption"><input name="timeSilence" component="input" type="radio" value="4" /> 1 semana</p>
                </span>

                 <span className="contentResponseBroad">       
                <button className="from-create-group-btn response" type="submit">{props.buttons['Accept'].name}</button>
                <button className="from-create-group-btn response" onClick={props.showModal}>{props.buttons['Cancel'].name}</button>
                </span>
            </form>
        </div>
    )
}

SilenceConversation = reduxForm({
    form: 'silenceContact',
    // validate
})(SilenceConversation)

export default connect(null,dispatch=>({
    showModal: () => {dispatch(showModal)}
}))(SilenceConversation);
