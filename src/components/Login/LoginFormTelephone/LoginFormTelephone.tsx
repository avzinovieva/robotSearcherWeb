import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styles from './loginFormTelephone.module.scss';
import { loginSms } from '../../../state/modules/loginSMS/action';
import { USER_CODE, USER_PHONE, USER_TOKEN } from '../../../storageKeys';
import { login } from '../../../state/modules/login/action';
import arrowLeft from '../../../img/arrowLeft.svg';
import t from '../../../translations/i18n';

interface IProps {
    loginTelephoneFunc: any;
    loginFunc: any;
}

const LoginFormTelephone: React.FC<IProps> = ({ loginTelephoneFunc, loginFunc }:IProps) => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [isSendSms, setIsSendSms] = useState(false);
  const [isWaitForInputSms, setSsWaitForInputSms] = useState(true);

  const numberHandler = (e: any) => {
    setPhone(e.target.value);
  };

  const sendSms = () => {
    loginTelephoneFunc(phone);
    setIsSendSms(true);
    setSsWaitForInputSms(false);
  };

  const loginByPhone = async () => {
    await localStorage.setItem(USER_PHONE, phone);
    await localStorage.setItem(USER_CODE, code);
    await loginFunc(phone, code);
    await localStorage.getItem(USER_TOKEN);
    const result = await localStorage.getItem(USER_TOKEN);
    if (result) {
      setIsLogged(true);
    }
  };
  const codeHandler = (e: any) => {
    setCode(e.target.value);
  };
  const returnToSms = () => {
    setSsWaitForInputSms(true);
    setIsSendSms(false);
  };
  return (
    <div className={styles.formTelephoneLogin}>
      {isWaitForInputSms && (
      <div className={styles.loginFormNumber}>
        <span>{`${t('loginByMobile.phone')}`}</span>
        <input type="tel" value={phone} onChange={numberHandler} pattern="[0-9]{10}" />
        <button type="button" onClick={sendSms}>{`${t('loginByMobile.sendSms')}`}</button>
      </div>
      )}
      {isSendSms && (
      <div className={styles.loginFormNumber}>
        <img src={arrowLeft} alt="arrow" onClick={returnToSms} className={styles.backLogin} />
        <span>Code from sms</span>
        <input type="text" value={code} onChange={codeHandler} />
        <button onClick={loginByPhone} type="button">{`${t('login.button')}`}</button>
      </div>
      )}
      {isLogged && <Redirect to="/orderList" />}
    </div>
  );
};

const mapStateToProps = ({ login }: any) => ({
  loading: login.loading,
});

export default connect(
  () => mapStateToProps,
  {
    loginTelephoneFunc: loginSms,
    loginFunc: login,
  },
)(LoginFormTelephone);
