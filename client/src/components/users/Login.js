import React from 'react';
import { Redirect } from 'react-router-dom'

const Login = (props) => {
    const {user, handleChange, handleSubmit, isAuthenticated} = props;

    if(isAuthenticated) {
        return <Redirect to = "/entries" />
    }

    return (
        <div>
            <div>Login</div>
            <form onSubmit = {e => handleSubmit(e, user)}>
                <input
                    type = "text"
                    value = {user.username}
                    name = "username"
                    onChange = {e => handleChange(e, user)}
                />
                <input
                    type = "password"
                    value = {user.password}
                    name = "password"
                    onChange = {e => handleChange(e, user)}
                />
                <input type = "submit" />
            </form>
        </div>
    );
}

export default Login;