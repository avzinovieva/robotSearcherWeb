import React from 'react';
import './ModalWindowStyle.css';
import './FormStyle.css';

const ModalWindow = (props) => {
    const {active, setActive} = props;
    const {children} = props;
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content active' : 'modal__content'} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};
export default ModalWindow;