import React, {useEffect, useState} from 'react';

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
} from "../../utils/users/userHandlers";

const Login = (props) => {

    const {
        setIsAuthenticated,
        status,
        setStatus
    } = props;

    const [user, setUser] = useState({
        username: "",
        password: "",
        UserId: "",
        UserType: "",
        Username: ""
    });


    const styles = UserFormStyles();
    const classes = props.classes;

    useEffect(() => {
        setStatus({
            statusCode: null,
            statusText: null
        });
    }, [setStatus]);

    return (
        <div className={styles.userForm}>
            <div className={styles.label}>Sign In to your account</div>

            <form onSubmit={e => handleLogin(e, user, setUser, setIsAuthenticated, setStatus)}>

                {
                    status.statusText !== null ?
                        <div className={`${styles.status} ${'alert'} ${'alert-danger'}`} role="alert">
                            {status.message}
                        </div> :
                        null
                }

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