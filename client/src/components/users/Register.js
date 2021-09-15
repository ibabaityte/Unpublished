import React, {useState, useEffect} from "react";

// styles imports
import {withStyles} from "@material-ui/core/styles";
import userFormStyles from "../../utils/styles/userFormStyles";
import {UserFormStyles} from "../../utils/styles/userFormStyles";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// util imports
import {
    handleChangeRegister,
    handleRegister
} from "../../utils/users/userHandlers";

const Register = (props) => {

    const [newUser, setNewUser] = useState({
        username: "",
        password: ""
    });

    const {
        status,
        setStatus
    } = props;

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
            <div className={styles.label}>Sign Up in to your account</div>
            {
                status.statusText !== null ?
                    <div className={`${styles.status} ${'alert'} ${'alert-danger'}`} role="alert">
                        {status.message}
                    </div> :
                    null
            }


            <form onSubmit={e => handleRegister(e, newUser, setNewUser, setStatus)}>
                <div className="inputs">

                    <TextField
                        className={`${styles.input} ${classes.input}`}
                        type="text"
                        value={newUser.username}
                        label="username"
                        name="username"
                        onChange={e => handleChangeRegister(e, newUser, setNewUser)}
                    />

                    <br/>

                    <TextField
                        className={`${styles.input} ${classes.input}`}
                        type="password"
                        value={newUser.password}
                        label="password"
                        name="password"
                        onChange={e => handleChangeRegister(e, newUser, setNewUser)}
                    />

                </div>
                <Button className={`${styles.btn} ${classes.btn}`} type="submit">Sign Up</Button>
            </form>

        </div>
    );
}

export default withStyles(userFormStyles)(Register);