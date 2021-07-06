import React from 'react';
import eyeOff from '../../../../img/eyeOff.png';
import eyeOn from '../../../../img/eye.png';
import emailIcon from '../../../../img/email_icon.png';
import styles from './input.module.scss';

interface IProps {
  type: string;
  placeholder: string;
  onChangeFunc: any;
}

function showHidePass(e: React.MouseEvent<HTMLImageElement>) {
  const icon = e.target as any;
  const input = icon.parentNode.childNodes[0];
  let { type } = input;
  type === 'text' ? type = 'password' : type = 'text';
  type === 'text' ? icon.src = eyeOn : icon.src = eyeOff;
  input.type = type;
}

const Input: React.FC<IProps> = ({ type, placeholder, onChangeFunc }: IProps) => (
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
      ) }
    {type === 'text'
    && (
    <img
      src={emailIcon}
      className={styles.email}
      alt="Email"
      onClick={showHidePass}
    />
    )}
  </div>
);

export default Input;
