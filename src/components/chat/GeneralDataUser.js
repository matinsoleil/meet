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
            <img className="imgIcoUser" src="https://cdn3.iconfinder.com/data/icons/web-basics-vol-03/512/menu_options_three_points_selection_select-512.png" />
            <img className="imgIcoUser" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvd2q7aXYYT1nqoFwD5F6KXJ2mJmTysH5jdRyGegOkaiSgV8Vk" />
            <input type="text" className="input-send"></input>
        </div>
    );
}

export default GeneralDataUser;