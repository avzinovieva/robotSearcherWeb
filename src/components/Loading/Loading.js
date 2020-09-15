import React, {Component} from 'react';
import Corgi from "../Corgi/Corgi";
import t from  '../../translations/i18n'
import {Redirect} from 'react-router-dom';
import {USER_TOKEN} from '../../storageKeys';

/*class Loading extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogged : false,
        };
    }

    render() {
        return (
            <div>
                <h1>{`${t('login.header')}`}</h1>
                <Corgi/>
                {/!*{this.state.isLogged ? <Redirect to="/orderList"/> : <Redirect to="/login"/>}*!/}
                {/!*{this.state.isLogged ? alert("/orderList") : alert("/login")}*!/}
            </div>
        )
    };
}*/
const Loading = () =>{
    return(
        <div>
            {localStorage.getItem(USER_TOKEN) ? <Redirect to="/orderList"/> : <Redirect to="/login"/>}
        </div>
    );

}

export  default  Loading;