import React from 'react';
import './ModalBox.scss'

const ModalBox = ({ body }) => {
    return (
        <div className="modal-show" >
            <div className="modal-content">
                {body}
            </div>
        </div>
    );
};
export default ModalBox;