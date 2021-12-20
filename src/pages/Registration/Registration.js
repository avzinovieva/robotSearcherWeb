import React, {Component} from "react";
import RegisterForm from "../../components/Register/RegisterForm";


class Register extends Component {
    render() {
        return (
            <div className="LoginPage">
                <RegisterForm />
            </div>
        );
    }
}

export default Register;