import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import {
    checkAuth,
    login,
    register,
    logout,
    deleteProfile
} from "./utils/userUtils";

import './App.css';

import Landing from "./components/Landing";
import Layout from "./components/Layout";
import AdminPanelComponent from "./components/admin/Admin";
import {Background} from "./utils/styles/background";

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

    const styles = Background();

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
        login(user, setUser, checkAuth, setIsAuthenticated);
    }

    const handleRegister = (e, newUser) => {
        e.preventDefault();
        register(newUser, setNewUser);
    }

    return (
        <div className="App">
            <div className={styles.img}/>
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
