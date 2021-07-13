import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import axios from "axios";

import './App.css';

import Landing from "./components/Landing";
import Layout from "./components/Layout";
import AdminPanelComponent from "./components/admin/Admin";

const App = () => {
    const {LoginToken, UserId, UserType, Username} = localStorage;

    const [user, setUser] = useState({});
    const [newUser, setNewUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // will need useEffect hook to init state with user details and isAuthenticated
    useEffect(() => {
        setIsAuthenticated(!!LoginToken);
        setUser({
            UserId,
            UserType,
            Username
        });
    }, [LoginToken, UserId, UserType, Username]);

    const checkAuth = status => {
        if (status === 200) {
            setIsAuthenticated(true);
        }
    }

    const login = () => {
        const {username, password} = user;
        const url = "http://localhost:8081/auth";
        axios.post(url, {username, password})
            .then((result) => {
                setUser({
                    UserId,
                    UserType,
                    Username
                });
                localStorage.setItem('LoginToken', result.data.token);
                localStorage.setItem('UserId', result.data.userId);
                localStorage.setItem('UserType', result.data.userType);
                localStorage.setItem('Username', result.data.username);
                checkAuth(result.status);
            });
    }

    const register = (newUser) => {
        const {username, password} = newUser;
        const url = "http://localhost:8081/register";
        axios.post(url, {username, password})
            .then((result) => {
                console.log(result);
                setNewUser(newUser);
                window.location.href = "/auth"
            });
    }

    const handleChangeLogin = (e) => {
        e.preventDefault();
        const userCopy = user;
        userCopy[e.currentTarget.name] = e.currentTarget.value;
        setUser(userCopy);
    }

    const handleChangeRegister = (e) => {
        e.preventDefault();
        const newUserCopy = newUser;
        newUserCopy[e.currentTarget.name] = e.currentTarget.value;
        setNewUser(newUserCopy);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        login();
    }

    const handleRegister = (e, newUser) => {
        e.preventDefault();
        register(newUser);
    }

    // will go to Header.js from props
    const logout = () => {
        const userId = localStorage.getItem('UserId');
        const loginToken = localStorage.getItem('LoginToken');
        const url = `http://localhost:8081/${userId}/logout`;
        const headers = {
            'Authorization': loginToken
        }
        axios.get(url, {headers}).then((response) => {
            console.log(response);
            localStorage.clear();
            window.location.href = "/"
        });
    }

    // will go to Header.js from props
    const deleteProfile = () => {
        const userId = localStorage.getItem('UserId');
        const loginToken = localStorage.getItem('LoginToken');
        let url = `http://localhost:8081/${userId}`;
        const headers = {
            'Authorization': loginToken
        }
        axios.delete(url, {headers}).then((response) => {
            console.log(response);
            localStorage.removeItem("LoginToken");
            window.location.href = "/"
        });
    }

    return (
        <div className="App">
            <div>
                <BrowserRouter>
                    <Route path="/"
                           render={(location) => ["/", "/auth", "/register"].includes(location.location.pathname) ?
                               <Landing
                                   user={user}
                                   handleLoginChange={handleChangeLogin}
                                   handleLoginSubmit={handleLogin}
                                   isAuthenticated={isAuthenticated}
                                   newUser={newUser}
                                   handleRegisterChange={handleChangeRegister}
                                   handleRegisterSubmit={handleRegister}
                               /> : null
                           }>
                    </Route>

                    <Route path="/entries">
                        <Layout
                            username={Username}
                            userType={UserType}
                            handleLogout={logout}
                            handleProfileDelete={deleteProfile}
                        />
                    </Route>

                    <Route path="/admin">
                        <AdminPanelComponent
                            username={Username}
                            userType={UserType}
                            handleLogout={logout}
                            handleProfileDelete={deleteProfile}
                        />
                    </Route>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
