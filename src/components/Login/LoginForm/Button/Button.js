import React, {useState} from 'react';
import {USER_LOGIN, USER_PASS, USER_TOKEN} from '../../../../storageKeys';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import styles from './button.module.scss';

const loginClick = (state, loginFunc, setLoggedUser) =>{
    loginFunc(state).then(async () => {
        const token = await localStorage.getItem(USER_TOKEN);
        if (token) {
            await localStorage.setItem(USER_LOGIN, state.login);
            await localStorage.setItem(USER_PASS, state.password);
            setLoggedUser(true);
        }
    });
}

const Button = ({str, state, onclickFunc}) => {
    const [isLogged, setLoggedUser] = useState( false);
    return (
        <div>
            <button
                className={styles.button}
                onClick={async ()=> loginClick(state, onclickFunc, setLoggedUser)}
                >
                {str}
            </button>
            {isLogged && <Redirect to='/orderList'/> }
        </div>
    );
}

Button.propTypes = {
    str: PropTypes.string.isRequired,
    state: PropTypes.object.isRequired,
    onclickFunc: PropTypes.func.isRequired,
};

export default Button;
