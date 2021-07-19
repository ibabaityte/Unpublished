import React from "react";
import {Route} from "react-router-dom";

import Header from "./users/Header";
import EntryList from "./entries/EntryList";

const Layout = (props) => {

    const {username, userType, handleLogout, handleProfileDelete} = props;

    return (
        <div>
            <Header
                username={username}
                userType={userType}
                handleLogout={handleLogout}
                handleProfileDelete={handleProfileDelete}
            />

            <Route path="/entries">
                <EntryList
                    userType={userType}
                />
            </Route>
        </div>
    )
}

export default Layout;