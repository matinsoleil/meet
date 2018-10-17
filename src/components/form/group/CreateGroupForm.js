import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './CreateGroupForm.scss'

let CreateGroupForm = props => {
  const { handleSubmit, closeWindow } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="title-name-group">Escribe el nombre del grupo</label>
        <Field name="nameGroup" component="input" type="text" className="input-name-group" />
      </div>
      <button className="from-create-group-btn" onClick={this.createGroup}>Agregar</button>
      <button className="from-create-group-btn" onClick={closeWindow}>Close</button>
    </form>
  )
}

CreateGroupForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(CreateGroupForm)

export default CreateGroupForm