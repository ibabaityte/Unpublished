import React from "react";
// import router from "react-router-dom";

const Register = (props) => {
    const {newUser, handleChange, handleSubmit} = props;

    return (
        <div>
            <div>Register</div>
            <form onSubmit={e => handleSubmit(e, newUser)}>
                <input
                    type = "text"
                    value = {newUser.username}
                    name = "username"
                    onChange = {e => handleChange(e, newUser)}
                />
                <input
                    type = "text"
                    value = {newUser.password}
                    name = "password"
                    onChange = {e => handleChange(e, newUser)}
                />
                <input type = "submit"/>
            </form>
        </div>
    );
}

export default Register;