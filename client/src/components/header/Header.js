import React from "react";
import {Link} from "react-router-dom";

// component imports
import HeaderPopper from "./HeaderPopper";

// styles imports
import {HeaderStyles} from "../../utils/styles/headerStyles";
import Grid from "@material-ui/core/Grid";

const Header = (props) => {

    const {
        username,
        userType,
    } = props;

    const styles = HeaderStyles();

    return (
        <div className={styles.header}>
            <Grid container>
                <Grid item lg={6} className={styles.logoPanel}>
                    <Link className={styles.logo} to="/entries">unpublished</Link>
                </Grid>
                <Grid item lg={6} className={styles.panel}>
                    <Link className={styles.home} to="/entries">Home</Link>
                    <HeaderPopper
                        username={username}
                        userType={userType}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default Header;