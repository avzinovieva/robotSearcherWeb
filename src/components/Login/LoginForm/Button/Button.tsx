import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { USER_LOGIN, USER_PASS, USER_TOKEN } from '../../../../storageKeys';
import styles from './button.module.scss';

interface IProps {
    state: any;
    str: string;
    onclickFunc: any;
    errorMessage: string;
}

const loginClick: ({
  state,
  onclickFunc,
  setLoggedUser,
  setLoginError,
}: {
    state: any;
    onclickFunc: any;
    setLoggedUser: any;
    setLoginError: any
}) => void = ({
  state, onclickFunc, setLoggedUser, setLoginError,
}) => {
  onclickFunc(state).then(async () => {
    const token = await localStorage.getItem(USER_TOKEN);
    if (token) {
      await localStorage.setItem(USER_LOGIN, state.login);
      await localStorage.setItem(USER_PASS, state.password);
      setLoggedUser(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  });
};

const Button: React.FC<IProps> = ({
  str, state, onclickFunc, errorMessage,
}: IProps) => {
  const [isLogged, setLoggedUser] = useState(false);
  const [loginError, setLoginError] = useState(false);

  return (
    <div>
      <div className={styles.errorWrapper}>
        {loginError && <p className={styles.error}>{errorMessage}</p>}
      </div>
      <button
        type="button"
        className={styles.button}
        onClick={async () => loginClick({
          state,
          onclickFunc,
          setLoggedUser,
          setLoginError,
        })}
      >
        {str}
      </button>
      {isLogged && <Redirect to="/orderList" />}
    </div>
  );
};

export default Button;
