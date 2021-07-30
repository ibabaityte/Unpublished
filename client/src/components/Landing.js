import React from "react";
import {
    Link,
    Route
} from 'react-router-dom';

// component imports
import Login from "./users/Login";
import Register from "./users/Register";

// styles imports
import { LandingStyles } from "../utils/styles/landingStyles";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";

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

    const styles = LandingStyles();

    return (
        <div>
            <img className={styles.img} src="/images/landing images/detail.jpg" alt=""/>
            <div className={styles.imgOverlay}/>
            <Grid container className={styles.container}>
                <Grid item lg={7} className={styles.landingTextGrid}>
                    <h1 className={styles.landingH1}>Unpublished</h1>
                    <h2 className={styles.landingH2}>Your personal online Diary</h2>
                    <h3 className={styles.landingH3}>So many great stories that are left Unpublished</h3>
                    <Link to="/register" className={styles.landingLink}><Button className={styles.btn} variant="outlined">Sign up</Button></Link>
                    <Link to="/auth" className={styles.landingLink}><Button className={styles.btn} variant="outlined">Sign in</Button></Link>
                </Grid>
                <Grid item lg={5}>
                    <div className={styles.landingFormGrid}>
                        <Route path="/auth" render={() => (
                            <Login
                                user={user}
                                handleChange={handleLoginChange}
                                handleSubmit={handleLoginSubmit}
                                isAuthenticated={isAuthenticated}
                            />
                        )}/>
                        <Route path="/register" render={() => (
                            <Register
                                newUser={newUser}
                                handleChange={handleRegisterChange}
                                handleSubmit={handleRegisterSubmit}
                                isAuthenticated={isAuthenticated}
                            />
                        )}/>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Landing;