import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { USER_LOGIN, USER_PASS, USER_TOKEN } from '../../../../storageKeys';
import styles from './button.module.scss';

const loginClick = (state, loginFunc, setLoggedUser, setLoginError) => {
  loginFunc(state).then(async () => {
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

const Button = ({
  str, state, onclickFunc, errorMessage, remember,
}) => {
  const [isLogged, setLoggedUser] = useState(false);
  const [loginError, setLoginError] = useState(false);
  return (
    <div>
      <div className={styles.errorWrapper}>
        {loginError && <p className={styles.error}>{errorMessage}</p>}
      </div>
      <button
        className={styles.button}
        onClick={async () => loginClick(
          state,
          onclickFunc,
          setLoggedUser,
          setLoginError,
          remember,
        )}
      >
        {str}
      </button>
      {isLogged && <Redirect to="/orderList" /> }
    </div>
  );
};

Button.propTypes = {
  str: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
  onclickFunc: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  remember: PropTypes.bool.isRequired,
};

export default Button;
