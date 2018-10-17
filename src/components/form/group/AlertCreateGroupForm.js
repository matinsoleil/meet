import React from 'react'
import './AlertCreateGroupForm.scss'

let AlertCreateGroupForm = props => {
    const { closeWindow } = props
    return (
        <div className="body-created-group">
            <p className="title-name-group">Debe seleccionar un contacto</p>
            <p>
                <button className="from-create-group-btn" onClick={closeWindow}>Close</button>
            </p>
        </div>
    )
}

export default AlertCreateGroupForm