import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input/Input';
import Button from './Button/Button';
import t from '../../../translations/i18n';
import { login } from '../../../state/modules/login/action';
import styles from './loginForm.module.scss';
import lockIcon from '../../../img/lockIcon.png';

const LoginForm = ({ loginFunc }) => {
  const [login, setLogin] = useState('');
  const [password, setPass] = useState('');
  const [remember, setRemember] = useState(false);

  const loginHandler = (event) => {
    const checkedValue = event.target.checked;
    setRemember(checkedValue);
  };
  return (
    <div className={styles.loginWrapper}>
      <p className={styles.title}>{t('login.header')}</p>
      <div>
        <Input
          type="text"
          placeholder={t('login.name')}
          onChangeFunc={(text) => setLogin(text)}
          values={localStorage.getItem('remember')}
        />
      </div>
      <Input
        type="password"
        placeholder={t('login.password')}
        onChangeFunc={(text) => setPass(text)}
      />
      <img
        src={lockIcon}
        className={styles.lockIcon}
        alt="eye"
      />
      <div className={styles.loginFunctionBox}>
        <div className={styles.labelBox}>
          <input type="checkbox" value="lsRememberMe" id="rememberMe" onChange={loginHandler} />
          <label className={styles.forgotPasswordButton} htmlFor="rememberMe">{t('login.rememberMe')}</label>
        </div>
        <button className={styles.forgotPasswordButton}>{t('login.forgotPassword')}</button>
      </div>
      <Button
        str={t('login.button')}
        onclickFunc={loginFunc}
        state={{ login, password }}
        errorMessage={t('login.error')}
        remember={remember}
      />
    </div>
  );
};

LoginForm.propTypes = {
  loginFunc: PropTypes.func.isRequired,
};

const mapStateToProps = ({ login }) => ({
  loading: login.loading,
});

export default connect(
  () => mapStateToProps,
  { loginFunc: login },
)(LoginForm);
