import React from "react";

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
} from "../../utils/users/loginRegisterUtils";

const Register = (props) => {
    const {newUser, setNewUser} = props;

    const styles = UserFormStyles();
    const classes = props.classes;

    return (
        <div className={styles.userForm}>
            <div className={styles.label}>Sign Up in to your account</div>

            <form onSubmit={e => handleRegister(e, newUser, setNewUser)}>
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