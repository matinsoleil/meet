import React from 'react'
import './FileContact.scss'

let FileContactForm = props => {
    const { closeWindow, nameContact, fileContact } = props
    return (
        <div>
            <p className="title-name-contact">¿Seguro que deseas archivar el chat con {nameContact}?</p>
            <p>
                <button className="from-create-group-btn" onClick={fileContact}>Archivar</button>
                <button className="from-create-group-btn" onClick={closeWindow}>Cancelar</button>
            </p>
        </div>
    )
}

export default FileContactForm