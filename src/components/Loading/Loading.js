import React, {Component} from 'react';
import Corgi from "../Corgi/Corgi";
import t from  '../../translations/i18n'
import {Redirect} from 'react-router-dom';
import {USER_TOKEN} from '../../storageKeys';


class Loading extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogged : false,
        };
    }
    componentWillMount=async ()=>{
        this.state.isLogged = (!!(await localStorage.getItem(USER_TOKEN)));
        if (this.state.isLogged){
            return (
                <Redirect to="/orderList"/>
            )
        }
        return (
            <Redirect to="/login"/>
        )

    }

    onLoad = async () => {
       this.state.isLogged = (!!(await localStorage.getItem(USER_TOKEN)));
       this.state.isLogged ? <Redirect to="/orderList"/> : <Redirect to="/login"/>;
    }

    render() {
        return (
            <div>
                <h1>{`${t('login.header')}`}</h1>
                <Corgi/>
                {/*{this.state.isLogged ? <Redirect to="/orderList"/> : <Redirect to="/login"/>}*/}
                {/*{this.state.isLogged ? alert("/orderList") : alert("/login")}*/}
            </div>
        )
    };
}
/*
const Loading = () =>{
    return(
        <div>

            {console.log(onLoad())}
            { onLoad().then((v)=> v ?  : )}
        </div>

    );

}
*/

export  default  Loading;