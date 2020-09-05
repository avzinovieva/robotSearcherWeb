import React from "react";
import styles from "./loginForm.module.scss";
import Input from "./Input/Input";
import Button from "./Button/Button";
import t from  '../../../translations/i18n'

const LoginForm = () => {
    return (
        <div className={styles.loginWrapper} >
            <p className={styles.title}>{`${t('login.header')}`}</p>
            <Input type='text' placeholder={`${t('login.name')}`} />
            <Input type='password' placeholder={`${t('login.password')}`} showSymbols={true}/>
            <Button str = {`${t('login.button')}`}></Button>
        </div>
    );
}

export  default  LoginForm;