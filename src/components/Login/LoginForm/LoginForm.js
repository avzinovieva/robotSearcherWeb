import React, {useState} from 'react';
import Input from './Input/Input';
import Button from './Button/Button';
import t from '../../../translations/i18n';
import PropTypes from 'prop-types';
import {login} from '../../../state/modules/login/action';
import {connect} from 'react-redux';

import styles from './loginForm.module.scss';

const LoginForm = ({loading, loginFunc}) => {
  const [login, setLogin] = useState('');
  const [password, setPass] = useState('');

  return (
    <div className={styles.loginWrapper} >
      <p className={styles.title}>{t('login.header')}</p>
      <Input
        type='text'
        placeholder={t('login.name')}
        onChangeFunc={(text) => setLogin(text)}
      />
      <Input
        type='password'
        placeholder={t('login.password')}
        onChangeFunc={(text) => setPass(text)}
      />
      <Button
        str = {t('login.button')}
        onclickFunc = {loginFunc}
        state = {{login, password}}
        errorMessage = {t('login.error')}
      />
    </div>
  );
};

LoginForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  loginFunc: PropTypes.func.isRequired,
};

const mapStateToProps = ({login}) => ({
  loading: login.loading,
});

export default connect(
    () => mapStateToProps,
    {loginFunc: login})(LoginForm);
