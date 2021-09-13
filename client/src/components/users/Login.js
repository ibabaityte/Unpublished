import React, {useState} from 'react';

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

    return (
        <div className={styles.userForm}>
            <div className={styles.label}>Sign In to your account</div>

            <form onSubmit={e => handleLogin(e, user, setUser, setIsAuthenticated, setStatus)}>
                <h2>{status.message}</h2>

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