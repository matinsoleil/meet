import React from 'react';

const GeneralDataUser = ({ imgUser, nameUser, status }) => {
    return (
        <div className="main-chat-general-data-user">
            <div className="icon-user">
                <img src={imgUser} height="42" width="42" />
            </div>
            <div>
                {nameUser}
            </div>
            <div>
                {status}
            </div>

            <div className="boton-action-user">
            </div>
        </div>
    );
}

export default GeneralDataUser;