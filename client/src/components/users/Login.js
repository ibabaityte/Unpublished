import React from 'react';
import {Redirect} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';

const Login = (props) => {
    const {user, handleChange, handleSubmit} = props;
    console.log(user);

    if(user.UserType === "ADMIN") {
        return <Redirect to = "/admin" />
    }

    if (user.UserType === "USER") {
        return <Redirect to = "/entries" />
    }

    return (
        <div className = "userForm">
                <div className = "label">Sign In to your account</div>
                <form onSubmit = {e => handleSubmit(e)}>
                    <div className = "inputs">
                        <TextField
                            type = "text"
                            value = {user.username}
                            name = "username"
                            label = "username"
                            onChange = {e => handleChange(e)}
                        />
                        <TextField
                            type = "password"
                            value = {user.password}
                            name = "password"
                            label = "password"
                            onChange = {e => handleChange(e)}
                        />
                    </div>
                    <input type = "submit"/>
                </form>
        </div>
    );
}

export default Login;