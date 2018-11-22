import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { showModal } from '../../../redux/actions/modalBox/modalBox';
import './CreateGroupForm.scss'


const validate = values => {
  const errors = {}
  if (!values.nameGroup) {
    errors.nameGroup = 'Debe colocar un nombre al grupo'
  } else if (values.nameGroup.length < 3) {
    errors.nameGroup = 'El nombre del grupo debe ser mayor a 3 caracteres'
  } else if (values.nameGroup.length > 15) {
    errors.nameGroup = 'El nombre del grupo debe ser menor a 15 caracteres'
  }
  return errors
}

const warn = values => {
  const warnings = {}
  if (values.nameGroup === "19") {
    warnings.nameGroup = 'Warning'
  }
  return warnings
}

const renderField = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error, warning }
}) => (
    <div>
      <label className="title-name-group">{label}</label>
      <div>
        <input {...input} placeholder={placeholder} type={type} className="input-name-group" />
        {touched &&
          ((error && <p><span className="error">{error}</span></p>) ||
            (warning && <p><span className="warning">{warning}</span></p>))}
      </div>
    </div>
  )

let CreateGroupForm = props => {
  const { handleSubmit} = props
  return (
    <div className="modal-content">
    <form onSubmit={handleSubmit}>
    <span className="contentAnswer" > 
      <Field name="nameGroup" label={props.title} placeholder="Nombre del grupo" type="text" component={renderField} />
     </span> 
     <span className="button-section">
      <button type="submit" >AGREGAR</button>
      <button onClick={props.showModal}>CERRAR</button>
     </span> 
    </form>
    </div>
  )
}

CreateGroupForm = reduxForm({
  form: 'group',
  validate,
  warn
})(CreateGroupForm)

export default connect(null,dispatch => ({
  showModal: ()=>{dispatch(showModal())},
}))(CreateGroupForm);