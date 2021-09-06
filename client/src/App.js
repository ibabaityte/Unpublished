import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

// component imports
import Landing from "./components/Landing";
import Layout from "./components/Layout";

// util imports
import {automaticLogout} from "./utils/users/userUtils";

// style imports
import './App.css';
import {Background} from "./utils/styles/background";

const App = () => {
    const {
        LoginToken,
        UserId,
        UserType,
        Username,
        ExpirationTimestamp
    } = localStorage;

    const [user, setUser] = useState({});
    const [newUser, setNewUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [status, setStatus] = useState({});

    // will need useEffect hook to init state with users details and isAuthenticated
    useEffect(() => {
        if (!isAuthenticated) {
            setIsAuthenticated(!!LoginToken);
        }
        setUser({
            UserId,
            UserType,
            Username
        });
        automaticLogout(ExpirationTimestamp);
    }, [LoginToken, UserId, UserType, Username, isAuthenticated, ExpirationTimestamp]);

    const styles = Background();

    return (
        <div className="App">
            <div className={styles.img}/>
            <div>
                <BrowserRouter>
                    <Route path="/"
                           render={(location) => ["/", "/auth", "/register"].includes(location.location.pathname) ?
                               <Landing
                                   user={user}
                                   setUser={setUser}
                                   newUser={newUser}
                                   setNewUser={setNewUser}
                                   setIsAuthenticated={setIsAuthenticated}
                                   status={status}
                                   setStatus={setStatus}
                               /> : null
                           }>
                    </Route>

                    <Route path="/home">
                        <Layout
                            username={Username}
                            userType={UserType}
                        />
                    </Route>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
