import Landing from "../Home/Landing/Landing";
import Preview from "../Preview/Preview";
import React, {Component} from "react";
import LoginForm from "../../components/Login/LoginForm";

class Login extends Component {
    render() {
        return (
            <div className="LoginPage">
                <LoginForm />
            </div>
        );
    }
}

export default Login;