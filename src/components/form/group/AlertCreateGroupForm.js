import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './AlertCreateGroupForm.scss'

let AlertCreateGroupForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div className="body-created-group">
                <p className="title-name-group">Debe seleccionar un contacto</p>
                <p>
                    <button className="from-create-group-btn" onClick={this.createCreateGroup}>Ok</button>
                </p>
            </div>
        </form>
    )
}

AlertCreateGroupForm = reduxForm({
    // a unique name for the form
    form: 'contact'
})(AlertCreateGroupForm)

export default AlertCreateGroupForm