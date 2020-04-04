import React from 'react';
import '../../../assets/sass/modal.sass';

const Modal = props => {
    return (
        <div className="modal">
            <div className="message">
                {props.message}
            </div>
        </div>
    );
}

export default Modal;