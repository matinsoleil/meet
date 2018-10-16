import React from 'react';
import './ModalBox.scss'

const modalBox = ({ body }) => {
    return (
        <div className="modal-show" >
            <div className="modal-content">
                {body}
            </div>
        </div>
    );
};
export default modalBox;