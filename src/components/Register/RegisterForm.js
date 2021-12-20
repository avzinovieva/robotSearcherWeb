import React, {Component} from 'react';
import {Form, FormGroup, FormControl, Button} from 'react-bootstrap';
import "../Login/LoginForm"
import {Redirect} from "react-router";
import {withRouter} from "react-router-dom"
import historyContext from "react-router/modules/HistoryContext";
import Gallery from "../../pages/Home/Segment/Gallery";
import Landing1 from "../../utils/land1.jpg";
import Landing2 from "../../utils/land2.jpg";
import Landing3 from "../../utils/land3.jpg";

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


const RegisterForm = ({history}) => {
    function handleFormSubmit(e) {
        e.preventDefault();
        console.log("FORM SUBMIT!");
        history.push("/robots");
    }

    return (
        <div style={divStyle}>
            <Form horizontal className="LoginForm" id="loginForm">
                <FormGroup controlId="formEmail">
                    <FormControl className="LoginInput" type="email" placeholder="Email Address"/>
                </FormGroup>
                <FormGroup controlId="formPhone">
                    <FormControl className="LoginInput" type="email" placeholder="Phone Number"/>
                </FormGroup>
                <FormGroup controlId="formPassword">
                    <FormControl className="LoginInput" type="password" placeholder="Password"/>
                </FormGroup>
                <FormGroup controlId="formSubmit">
                    <Button className="LoginButton" bsStyle="primary" type="submit" onClick={handleFormSubmit}>
                        Register
                    </Button>
                </FormGroup>
                <p onClick={()=>history.push("/")}>Login</p>
            </Form>
        </div>
    )
}


export default withRouter(RegisterForm);