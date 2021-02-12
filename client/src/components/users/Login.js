import React from 'react';

const Login = (props) => {
    const {user, handleChange, handleSubmit} = props;
    console.log(user);

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
                <input type = "submit"/>
            </form>
        </div>
    );
}

export default Login;