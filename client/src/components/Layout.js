import React from "react";
import {Route} from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import Header from "./users/Header";
import EntryList from "./entries/EntryList";

const Layout = (props) => {

    const {username, userType, handleLogout, handleProfileDelete} = props;

    return (
        <div>
            <Grid container>
                <Header
                    username={username}
                    userType={userType}
                    handleLogout={handleLogout}
                    handleProfileDelete={handleProfileDelete}
                />
            </Grid>
            <Grid container>
                <Route path="/entries">
                    <EntryList
                        userType={userType}
                    />
                </Route>
            </Grid>
        </div>
    )
}

export default Layout;