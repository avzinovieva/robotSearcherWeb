import React, { useState } from 'react';
import eyeOff from '../../../../img/eyeOff.png';
import eyeOn from '../../../../img/eye.png';
import emailIcon from '../../../../img/email_icon.png';
import styles from './input.module.scss';

interface IProps {
  type: string;
  placeholder: string;
  onChangeFunc: any;
  isLogged: any;
}

function showHidePass(e: React.MouseEvent<HTMLImageElement>) {
  const icon = e.target as any;
  const input = icon.parentNode.childNodes[0];
  let { type } = input;
  type === 'text' ? type = 'password' : type = 'text';
  type === 'text' ? icon.src = eyeOn : icon.src = eyeOff;
  input.type = type;
}

const Input: React.FC<IProps> = ({
  type, placeholder, onChangeFunc, isLogged,
}: IProps) => {
  const loginStorage = localStorage.getItem('log');
  const passStorage = localStorage.getItem('pass');
  const [login, setLogin] = useState<any>(loginStorage || '');
  const [pass, setPass] = useState<any>(passStorage || '');

  const handler: any = (e: any) => {
    if (e.target.type === 'password') {
      setPass(e.target.value);
      /* e.target.value = pass; */
    }
    if (e.target.type === 'text') {
      setLogin(e.target.value);
      /*      e.target.value = login; */
    }
  };

  return (
    <div className={styles.inputBlock}>
      <input
        value={type === 'password' ? pass : login}
        type={type}
        placeholder={placeholder}
        className={styles.input}
        onChange={(el) => {
          onChangeFunc(el.target.value);
          handler(el);
        }}

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
};

export default Input;
