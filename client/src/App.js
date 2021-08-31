import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

// component imports
import Landing from "./components/Landing";
import Layout from "./components/Layout";

// style imports
import './App.css';
import {Background} from "./utils/styles/background";

const App = () => {
    const {
        LoginToken,
        UserId,
        UserType,
        Username
    } = localStorage;

    const [user, setUser] = useState({});
    const [newUser, setNewUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // will need useEffect hook to init state with users details and isAuthenticated
    useEffect(() => {
        if(!isAuthenticated) {
            setIsAuthenticated(!!LoginToken);
        }
        setUser({
            UserId,
            UserType,
            Username
        });
    }, [LoginToken, UserId, UserType, Username, isAuthenticated]);

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
