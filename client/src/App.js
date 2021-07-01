import React, {useState} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import axios from "axios";

import './App.css';
import Landing from "./components/Landing";
import EntryList from "./components/entries/EntryList";
import Init from "./components/admin/Admin";

const App = () => {
    const [user, setUser] = useState({});
    const [newUser, setNewUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

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
                setUser(user);
                // setState({...user, userType: result.data.userType});
                localStorage.setItem('LoginToken', result.data.token);
                localStorage.setItem('UserId', result.data.userId);
                localStorage.setItem('UserType', result.data.userType);
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
                // window.location.href="/auth"
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
        login(user);
    }


    const handleRegister = (e, newUser) => {
        e.preventDefault();
        register(newUser);
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

                    {/*<Route path="/entries" render={() => (*/}
                    {/*    <EntryList*/}
                    {/*        userType={userType}*/}
                    {/*        username={username}*/}
                    {/*    />*/}
                    {/*)}/>*/}

                    <Route path="/entries" component={EntryList}/>

                    <Route path="/init" component={Init}/>

                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
