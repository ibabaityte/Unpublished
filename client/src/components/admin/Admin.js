import React, {useEffect, useState} from "react";
import {Link, Route} from "react-router-dom";
import AdminUserList from "./AdminUserList";
import AdminEntryList from "./AdminEntryList";
import Header from "../users/Header";

import {
    getAdminUserList,
    getAdminEntryList,
    adminDeleteProfile
} from "../../utils/adminUtils";

const AdminPanelComponent = (props) => {

    const {username, userType, handleLogout, handleProfileDelete} = props;

    const [adminEntries, setAdminEntries] = useState([]);
    const [adminUsers, setAdminUsers] = useState([]);

    useEffect(() => {
        getAdminUserList(setAdminUsers);
        getAdminEntryList(setAdminEntries);
    }, []);

    return (
        <div>
            <Header
                username={username}
                userType={userType}
                handleLogout={handleLogout}
                handleProfileDelete={handleProfileDelete}
            />

            <div>ADMIN PANEL</div>
            <Link to={"/admin/allUsers"}>
                <button>See all users</button>
            </Link>
            <Link to="/admin/allEntries">
                <button>See all entries</button>
            </Link>

            <Route path="/admin/allUsers" render={() => (
                <AdminUserList
                    adminUsers={adminUsers}
                    handleProfileDelete={adminDeleteProfile}
                />
            )}/>

            <Route path="/admin/allEntries" render={() => (
                <AdminEntryList
                    userType={userType}
                    adminEntries={adminEntries}
                    setEntries={setAdminEntries}
                />
            )}/>

        </div>
    );
}

export default AdminPanelComponent;