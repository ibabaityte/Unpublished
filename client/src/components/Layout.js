import React from "react";
import {Route} from "react-router-dom";

// component imports
import Header from "./users/Header";
import EntryList from "./entries/EntryList";

// styles imports
import Grid from "@material-ui/core/Grid";

const Layout = (props) => {

    const {
        username,
        userType,
    } = props;

    return (
        <div>
            <Grid container>
                <Header
                    username={username}
                    userType={userType}
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