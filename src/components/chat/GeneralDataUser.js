import React from 'react';

const GeneralDataUser = ({ name, status, imgUser }) => {
    return (
        <div className="main-chat-general-data-user">
            <div className="icon-user">
                <img className="imgIcoUser" src={imgUser} alt="test" />
            </div>
            <div class="circleActive circleBase">
            </div>
            <div>
                <h5>
                    {name}
                    <p>{status}</p>
                </h5>
            </div>
            <div className="boton-action-user">
            </div>
        </div>
    );
}

export default GeneralDataUser;