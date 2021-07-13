import React, {useEffect, useState} from "react";
import {Link, Route} from "react-router-dom";
import axios from "axios";
import AdminUserList from "./AdminUserList";
import AdminEntryList from "./AdminEntryList";
import Header from "../users/Header";

const AdminPanelComponent = (props) => {

    const {username, userType, handleLogout, handleProfileDelete} = props;

    const [adminEntries, setAdminEntries] = useState([]);
    const [adminUsers, setAdminUsers] = useState([]);

    useEffect(() => {
        getAdminUserList();
        getAdminEntryList();
    }, []);

    const getAdminUserList = () => {
        const loginToken = localStorage.getItem('LoginToken');
        const headers = {
            'Authorization': loginToken
        }
        const url = "http://localhost:8081/admin/allUsers";
        axios.get(url, {headers}).then((response) => {
            setAdminUsers(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    const getAdminEntryList = () => {
        const loginToken = localStorage.getItem('LoginToken');
        const headers = {
            'Authorization': loginToken
        }
        const url = "http://localhost:8081/admin/allEntries";
        axios.get(url, {headers}).then((response) => {
            console.log(response);
            setAdminEntries(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    const adminDeleteProfile = (id) => {
        let url = `http://localhost:8081/${id}`;
        const loginToken = localStorage.getItem('LoginToken');
        const headers = {
            'Authorization': loginToken
        }
        axios.delete(url, {headers}).then((response) => {
            console.log(response);
            const updatedUsers = adminUsers.filter(user => user._id !== id);
            setAdminUsers(updatedUsers);
        });
    }

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