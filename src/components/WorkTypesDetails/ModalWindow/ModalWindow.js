import React from 'react';
import styles from './ModalWindowStyle.module.scss';

const ModalWindow = (props) => {
  const { active, setActive } = props;
  const { children } = props;
  return (
    <div className={active ? styles.modal_active : styles.modal} onClick={() => setActive(false)}>
      <div
        className={active ? styles.modal__content_active : styles.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
export default ModalWindow;
