import React from "react";
import {Link, Route} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Login from "./users/Login";
import Register from "./users/Register";

const Landing = (props) => {
    const {
        user,
        newUser,
        isAuthenticated,
        handleLoginChange,
        handleLoginSubmit,
        handleRegisterChange,
        handleRegisterSubmit
    } = props;
    return(
        <div>
            <div className = "landingBackground"/>
                <Grid container className = "container">
                    <Grid item lg = {6} className = "content">
                        <h1>Unpublished</h1>
                        <h2>Your personal online Diary</h2>
                        <h3>So many great stories that are left Unpublished</h3>
                        <Link to = "/register"><Button variant="outlined">Sign up</Button></Link>
                        <Link to = "/auth"><Button variant="outlined">Sign in</Button></Link>
                    </Grid>
                    <Grid item lg = {6}>
                        <Route path = "/auth" render={() => {
                            return <Login
                                user={user}
                                handleChange={handleLoginChange}
                                handleSubmit={handleLoginSubmit}
                                isAuthenticated={isAuthenticated}
                            />
                        }}/>
                        <Route path = "/register" render={() => (
                            <Register
                                newUser = {newUser}
                                handleChange = {handleRegisterChange}
                                handleSubmit = {handleRegisterSubmit}
                                isAuthenticated = {isAuthenticated}
                            />
                        )}/>
                    </Grid>
                </Grid>
        </div>
    );
}

export default Landing;