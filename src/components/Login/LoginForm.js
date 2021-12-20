import React, {Component, useState} from 'react';
import {Form, FormGroup, FormControl, Button} from 'react-bootstrap';
import "./LoginPage.css"
import {Redirect} from "react-router";
import {withRouter} from "react-router-dom"
import historyContext from "react-router/modules/HistoryContext";
import Gallery from "../../pages/Home/Segment/Gallery";
import Landing1 from "../../utils/land1.jpg";
import Landing2 from "../../utils/land2.jpg";
import Landing3 from "../../utils/land3.jpg";
import {connect} from "react-redux";
import {login} from "../../redux/Login/action";
import {USER_LOGIN, USER_PASS, USER_TOKEN} from "../../storageKeys";

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: -100
};

const panelStyle = {
    backgroundColor: 'rgba(255,255,255,0.5)',
    border: 0,
    paddingLeft: 20,
    paddingRight: 20,
    width: 300,
};

const buttonStyle = {
    marginBottom: 0
};


const LoginForm = ({history, loginFunc}) => {

    const [login, setLogin] = useState(localStorage.getItem('log') || '');
    const [password, setPass] = useState(localStorage.getItem('pass') || '');
    const [isLogged, setLogged] = useState(false);
    const [clickRegister, setToRegister] = useState(false);

    function handleFormSubmit(e) {
        // e.preventDefault();
        // console.log(login);
        // console.log(password);
        // console.log(loginFunc);

        loginFunc(login, password);
        const token = localStorage.getItem(USER_TOKEN);
        if (token) {
            localStorage.setItem(USER_LOGIN, login);
            localStorage.setItem(USER_PASS, password);
            localStorage.setItem('isLogged', 'true');
            setLogged(true);
            console.log(token)
        } else {
            console.log("error")
        }
        setLogged(true);
        console.log("FORM SUBMIT!");
    }

    return (
        <div style={divStyle}>
            <div  className="LoginForm" id="loginForm">
                <div >
                    <input className="LoginInput" type="text" placeholder="Email Address" onChange={text => setLogin(text.target.value)}/>
                </div>
                <div>
                    <input className="LoginInput" type="password" placeholder="Password" onChange={text => setPass(text.target.value)}/>
                </div>
                <div >
                    <Button className="LoginButton" bsStyle="primary" type="submit" onClick={()=>handleFormSubmit()}>
                        Login
                    </Button>
                </div>
                <p onClick={()=>setToRegister(true)}>Register</p>
                {isLogged && <Redirect to="/robots" />}
                {clickRegister && <Redirect to="/register" />}
            </div>
        </div>
    )
}

const mapStateToProps = ( login ) => ({
    loading: login.loading,
});

export default connect(
    () => mapStateToProps,
    { loginFunc: login },
)(LoginForm);