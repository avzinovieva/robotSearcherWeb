import React, {Component} from 'react';
import Corgi from '../Corgi/Corgi';
import t from  '../../translations/i18n';
import {Redirect} from 'react-router-dom';
import {USER_TOKEN} from '../../storageKeys';

const Loading = () =>{
    return(
        <div>
            {localStorage.getItem(USER_TOKEN) ? <Redirect to="/orderList"/> : <Redirect to="/login"/>}
        </div>
    );

}

export  default  Loading;