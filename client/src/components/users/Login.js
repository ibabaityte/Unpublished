import React from 'react';
import {Redirect} from 'react-router-dom'

// styles imports
import {withStyles} from "@material-ui/core/styles";
import userFormStyles from "../../utils/styles/userFormStyles";
import {UserFormStyles} from "../../utils/styles/userFormStyles";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

// util imports
import {
    handleChangeLogin,
    handleLogin,
} from "../../utils/users/loginRegisterUtils";

const Login = (props) => {
    const {
        user,
        setUser,
        setIsAuthenticated
    } = props;

    const styles = UserFormStyles();
    const classes = props.classes;

    // will have to delete this later
    if (user.UserType === "ADMIN") {
        return <Redirect to="/admin"/>
    }

    if (user.UserType === "USER") {
        return <Redirect to="/entries"/>
    }

    return (
        <div className={styles.userForm}>
            <div className={styles.label}>Sign In to your account</div>

            <form onSubmit={e => handleLogin(e, user, setUser, setIsAuthenticated)}>
                <div className="inputs">

                    <TextField
                        className={`${styles.input} ${classes.input}`}
                        type="text"
                        value={user.username}
                        name="username"
                        label="username"
                        onChange={e => handleChangeLogin(e, user, setUser)}
                    />

                    <br/>

                    <TextField
                        className={`${styles.input} ${classes.input}`}
                        type="password"
                        value={user.password}
                        name="password"
                        label="password"
                        onChange={e => handleChangeLogin(e, user, setUser)}
                    />

                </div>
                <Button className={`${styles.btn} ${classes.btn}`} type="submit">Sign In</Button>
            </form>

        </div>
    );
}

export default withStyles(userFormStyles)(Login);