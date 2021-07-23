import React from 'react';
import {Redirect} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import {UserFormStyles} from "../../utils/styles/userFormStyles";
import Button from "@material-ui/core/Button";

const Login = (props) => {
    const {user, handleChange, handleSubmit} = props;

    const styles = UserFormStyles();

    if (user.UserType === "ADMIN") {
        return <Redirect to="/admin"/>
    }

    if (user.UserType === "USER") {
        return <Redirect to="/entries"/>
    }

    return (
        <div className={styles.userForm}>
            <div className={styles.label}>Sign In to your account</div>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="inputs">
                    <TextField
                        className={styles.input}
                        type="text"
                        value={user.username}
                        name="username"
                        label="username"
                        onChange={e => handleChange(e)}
                    />
                    <br/>
                    <TextField
                        className={styles.input}
                        type="password"
                        value={user.password}
                        name="password"
                        label="password"
                        onChange={e => handleChange(e)}
                    />
                </div>
                <Button className={styles.btn} type="submit">Sign In</Button>
            </form>
        </div>
    );
}

export default Login;