import React from 'react';

const GeneralDataUser = ({ name, status, imgUser }) => {
    return (
        <div className="main-chat-general-data-user">
            <div className="icon-user">
                <img className="imgIcoUser" src={imgUser} alt="test" />
            </div>
            <div>
                <h5>
                    <div className="circleActive circleBase">
                    </div>
                    {name}
                    <p>{status}</p>
                </h5>
            </div>
        </div>
    );
}

export default GeneralDataUser;