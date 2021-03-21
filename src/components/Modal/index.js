
import React from 'react';

function Modal ({onClose}) {
    
    return(
        // JSX

        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">Title</h3>
                <button onClick={onClose} type= "button">
                    Close this modal
                </button>

            </div>
        </div>
        
    );
}

export default Modal;