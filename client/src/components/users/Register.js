import React from "react";
import TextField from '@material-ui/core/TextField';

const Register = (props) => {
    const {newUser, handleChange, handleSubmit} = props;

    return (
        <div className="userForm">
            <div>Sign up</div>
            <form onSubmit={e => handleSubmit(e, newUser)}>
                <TextField
                    id="standard-basic"
                    type="text"
                    value={newUser.username}
                    label="username"
                    name="username"
                    onChange={e => handleChange(e, newUser)}
                />
                <TextField
                    id="standard-basic"
                    type="text"
                    value={newUser.password}
                    label="password"
                    name="password"
                    onChange={e => handleChange(e, newUser)}
                />
                <input type="submit"/>
            </form>
        </div>
    );
}

export default Register;