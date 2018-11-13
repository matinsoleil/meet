import React from 'react'
import './AlertCreateGroupForm.scss'

let AlertCreateGroupForm = props => {
    const { closeWindow } = props
    return (
        <div className="contentModal">
             <span className="contentAnswer" > 
            <p className="title-name-group">Debe seleccionar un contacto</p>
            </span> 
            <span className="contentResponse">
            <p>
                <button className="from-create-group-btn" onClick={closeWindow}>CERRAR</button>
            </p>
            </span>
        </div>
    )
}

export default AlertCreateGroupForm



           
       