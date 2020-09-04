import React from "react";
import styles from "./loginForm.module.scss";
import Input from "./Input/Input";
import Button from "./Button/Button";

const LoginForm = () => {
    return (
        <div className={styles.loginWrapper} >
            <p className={styles.title}>Login</p>
            <Input type='text' placeholder='Username' />
            <Input type='password' placeholder='Password' showSymbols={true}/>
            <Button str = 'Login'></Button>
        </div>
    );
}

export  default  LoginForm;