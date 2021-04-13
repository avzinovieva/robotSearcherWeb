import React from 'react';
import PropTypes from 'prop-types';
import eyeOff from '../../../../img/eye-off.png';
import eyeOn from '../../../../img/eye-on.png';

import styles from './input.module.scss';

function showHidePass(e) {
  const icon = e.target;
  const input = icon.parentNode.childNodes[0];
  let { type } = input;
  type === 'text' ? type = 'password' : type = 'text';
  type === 'text' ? icon.src = eyeOn : icon.src = eyeOff;
  input.type = type;
}

const Input = ({ type, placeholder, onChangeFunc }) => (
  <div className={styles.inputBlock}>
    <input
      type={type}
      placeholder={placeholder}
      className={styles.input}
      onChange={(el) => onChangeFunc(el.target.value)}
    />
    {type === 'password'
      && (
      <img
        src={eyeOff}
        className={styles.showPass}
        alt="eye"
        onClick={showHidePass}
      />
      )}
  </div>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChangeFunc: PropTypes.func.isRequired,
};

export default Input;
