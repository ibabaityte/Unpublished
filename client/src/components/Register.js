import React from "react";
import axios from "axios";
// import router from "react-router-dom";

class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.currentTarget.name]: e.currentTarget.value }, () => {
            console.log(this.state);
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        axios.post('http://localhost:8081/register', { username, password })
            .then((result) => {
                console.log(result);
            });
    }

    render(){
        const { username, password } = this.state;
        return (
            <div>
                <div>Register</div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type = "text"
                        value = {username}
                        name = "username"
                        onChange = {this.handleChange}
                    />
                    <input
                        type = "text"
                        value = {password}
                        name = "password"
                        onChange = {this.handleChange}
                    />
                    <input type = "submit"/>
                </form>
            </div>
        );
    }
}

export default Register;