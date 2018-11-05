import React from 'react';
import './ModalBox.scss'

const ModalBox = ({body}) => {
    return (
        <div className="modal-show" >
            {body}
        </div>
    );
};

export default ModalBox;