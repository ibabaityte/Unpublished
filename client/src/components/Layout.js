import React from "react";
import {Route} from "react-router-dom";

// component imports
import Header from "./header/Header";
import EntryList from "./entries/EntryList";

// styles imports
import Grid from "@material-ui/core/Grid";
import AdminPanelComponent from "./admin/Admin";

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
                {
                    userType === "ADMIN" ?
                        <Route path="/home/admin">
                            <AdminPanelComponent
                                username={username}
                                userType={userType}
                            />
                        </Route>
                        :
                        <Route path="/home/entries">
                            <EntryList
                                userType={userType}
                            />
                        </Route>
                }
            </Grid>
        </div>
    )
}

export default Layout;