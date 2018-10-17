import React from 'react'
import { Field, reduxForm } from 'redux-form'
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
  const { handleSubmit, closeWindow, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="nameGroup" label="Escribe el nombre del grupo" placeholder="Nombre del grupo" type="input" type="text" component={renderField} />
      <button className="from-create-group-btn" type="submit" >Agregar</button>
      <button className="from-create-group-btn" onClick={closeWindow}>Close</button>
    </form>
  )
}

CreateGroupForm = reduxForm({
  form: 'group',
  validate,
  warn
})(CreateGroupForm)

export default CreateGroupForm