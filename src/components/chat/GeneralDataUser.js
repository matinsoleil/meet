import React from 'react';

const GeneralDataUser = ({ imgUser, nameUser, status }) => {
    return (
        <div className="main-chat-general-data-user">
            <div className="icon-user">
                <img className="imgIcoUser" src={imgUser} alt="test" />
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