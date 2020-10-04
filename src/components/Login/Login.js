import React from 'react';
import TopBar from '../TopBar/TopBar';
import LoginForm from './LoginForm/LoginForm';
import Corgi from '../Corgi/Corgi';
import Hi from './Hi/Hi';

const Login = () => {
    return (
        <div>
            <TopBar/>
            <LoginForm/>
            <Corgi/>
            <Hi/>
        </div>
    );
}

export default Login;