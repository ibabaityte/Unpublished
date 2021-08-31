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
                    {
                        userType === "USER" ?
                            <Link className={styles.logo} to="/home/entries">unpublished</Link>
                            :
                            <Link className={styles.logo} to="/home/admin/allEntries">unpublished</Link>
                    }
                </Grid>
                <Grid item lg={6} className={styles.panel}>
                    {
                        userType === "USER" ?
                            <Link className={styles.home} to="/home/entries">Home</Link>
                            :
                            <Link className={styles.home} to="/home/admin/allEntries">Home</Link>
                    }
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