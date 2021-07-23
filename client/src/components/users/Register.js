import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {UserFormStyles} from "../../utils/styles/userFormStyles";


const Register = (props) => {
    const {newUser, handleChange, handleSubmit} = props;

    const styles = UserFormStyles();

    return (
        <div className={styles.userForm}>
            <div className={styles.label}>Sign Up in to your account</div>
            <form onSubmit={e => handleSubmit(e, newUser)}>
                <div className="inputs">
                    <TextField
                        className={styles.input}
                        id="standard-basic"
                        type="text"
                        value={newUser.username}
                        label="username"
                        name="username"
                        onChange={e => handleChange(e, newUser)}
                    />
                    <br/>
                    <TextField
                        className={styles.input}
                        id="standard-basic"
                        type="password"
                        value={newUser.password}
                        label="password"
                        name="password"
                        onChange={e => handleChange(e, newUser)}
                    />
                </div>
                <Button className={styles.btn} type="submit">Sign Up</Button>
            </form>
        </div>
    );
}

export default Register;