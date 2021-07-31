import React from "react";

// styles imports
import {UserFormStyles} from "../../utils/styles/userFormStyles";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// util imports
import {
    handleChangeRegister,
    handleRegister
} from "../../utils/users/LoginRegisterUtils";

const Register = (props) => {
    const {newUser, setNewUser} = props;

    const styles = UserFormStyles();

    return (
        <div className={styles.userForm}>
            <div className={styles.label}>Sign Up in to your account</div>

            <form onSubmit={e => handleRegister(e, newUser, setNewUser)}>
                <div className="inputs">

                    <TextField
                        className={styles.input}
                        type="text"
                        value={newUser.username}
                        label="username"
                        name="username"
                        onChange={e => handleChangeRegister(e, newUser, setNewUser)}
                    />

                    <br/>

                    <TextField
                        className={styles.input}
                        type="password"
                        value={newUser.password}
                        label="password"
                        name="password"
                        onChange={e => handleChangeRegister(e, newUser, setNewUser)}
                    />

                </div>
                <Button className={styles.btn} type="submit">Sign Up</Button>
            </form>

        </div>
    );
}

export default Register;