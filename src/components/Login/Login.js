import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import styles from './login.module.scss';
import Figures from './Figures/Figures';

const Login = () => (
  <div>
    <div className={styles.block} />
    <Figures />
    <LoginForm />
  </div>
);

export default Login;
