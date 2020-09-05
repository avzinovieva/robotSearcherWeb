import React from 'react';
import Corgi from "../Corgi/Corgi";
import t from  '../../translations/i18n'

const  Loading = () =>{
    return(
        <div>
            <h1>{`${t('loading.header')}`}</h1>
            <Corgi/>
        </div>
    );
}

export  default  Loading;