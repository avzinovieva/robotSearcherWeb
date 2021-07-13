import React, { useState } from 'react';
import { connect } from 'react-redux';
import Input from './Input/Input';
import Button from './Button/Button';
import t from '../../../translations/i18n';
import { login } from '../../../state/modules/login/action';
import styles from './loginForm.module.scss';
import lockIcon from '../../../img/lockIcon.png';

interface IProps{
    loginFunc: any;
}

const LoginForm: React.FC<IProps> = ({ loginFunc }: IProps) => {
  const [login, setLogin] = useState(localStorage.getItem('log') || '');
  const [password, setPass] = useState(localStorage.getItem('pass') || '');
  const [isRememberMeChecked, setIsRememberMeChecked] = useState(false);
  const isLogged = isRememberMeChecked ? localStorage.getItem('isLogged') : false;
  localStorage.setItem('isLogged', isRememberMeChecked ? 'true' : 'false');

  const rememberHandler = () => {
    setIsRememberMeChecked(!isRememberMeChecked);
  };

  return (
    <div className={styles.loginWrapper}>
      <p className={styles.title}>{t('login.header')}</p>
      <div>
        <Input
          isLogged={isLogged}
          type="text"
          placeholder={t('login.name')}
          onChangeFunc={(text: string) => setLogin(text)}
        />
      </div>
      <Input
        isLogged={isLogged}
        type="password"
        placeholder={t('login.password')}
        onChangeFunc={(text: string) => setPass(text)}
      />
      <img
        src={lockIcon}
        className={styles.lockIcon}
        alt="eye"
      />
      <div className={styles.loginFunctionBox}>
        <div className={styles.labelBox}>
          <input type="checkbox" value="lsRememberMe" id="rememberMe" onChange={rememberHandler} />
          <label className={styles.forgotPasswordButton} htmlFor="rememberMe">{t('login.rememberMe')}</label>
        </div>
        <button className={styles.forgotPasswordButton} type="button">{t('login.forgotPassword')}</button>
      </div>
      <Button
        str={t('login.button')}
        onclickFunc={loginFunc}
        state={{ login, password }}
        errorMessage={t('login.error')}
      />
    </div>
  );
};

const mapStateToProps = ({ login }: any) => ({
  loading: login.loading,
});

export default connect(
  () => mapStateToProps,
  { loginFunc: login },
)(LoginForm);
