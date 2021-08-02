import React from 'react';
import styles from './login.module.scss';
import Figures from './Figures/Figures';
import LoginFormTelephone from './LoginFormTelephone/LoginFormTelephone';

const Login: React.FC = () => (
  <div>
    <div className={styles.block} />
    <Figures />
    <div className={styles.loginBox2}>
      <LoginFormTelephone />
    </div>
  </div>
);

export default Login;
