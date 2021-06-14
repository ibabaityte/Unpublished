import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Landing from "./components/Landing";
import Register from "./components/users/Register";
import Login from "./components/users/Login";
import EntryList from "./components/entries/EntryList";
import Init from "./components/admin/Admin";
import axios from "axios";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: "",
                password: "",
            },
            newUser: {
                username: "",
                password: ""
            },
            isAuthenticated: false
        }
    }

    updateUser = user => this.setState({user});
    updateNewUser = newUser => this.setState({newUser});
    checkAuth = status => {
        if (status === 200) {
            this.setState({isAuthenticated: true})
        }
    }


    login = (user) => {
        const {username, password} = user;
        const url = "http://localhost:8081/auth";

        axios.post(url, {username, password})
            .then((result) => {
                this.updateUser(user);
                this.setState({...this.state.user, userType: result.data.userType});
                localStorage.setItem('LoginToken', result.data.token);
                localStorage.setItem('UserId', result.data.userId);
                this.checkAuth(result.status);
                console.log(this.state.user);
            });
    }

    register = (newUser) => {
        const {username, password} = newUser;
        const url = "http://localhost:8081/register";

        axios.post(url, {username, password})
            .then((result) => {
                console.log(result);
                this.updateNewUser(newUser);
                // window.location.href="/auth"
            });
    }

    handleChangeLogin = (e, user) => {
        e.preventDefault();
        user[e.currentTarget.name] = e.currentTarget.value;
        this.setState({user});
    }

    handleChangeRegister = (e, newUser) => {
        e.preventDefault();
        newUser[e.currentTarget.name] = e.currentTarget.value;
        this.setState({newUser});
    }

    handleLogin = (e, user) => {
        e.preventDefault();
        this.login(user);
    }

    handleRegister = (e, newUser) => {
        e.preventDefault();
        this.register(newUser);
    }

    render() {
        return (
            <div className="App">
                <div>
                    <BrowserRouter>
                        <Route path = "/" render = {(location) => ["/", "/auth", "/register"].includes(location.location.pathname) ?
                            <Landing
                                user={this.state.user}
                                handleLoginChange={this.handleChangeLogin}
                                handleLoginSubmit={this.handleLogin}
                                isAuthenticated={this.state.isAuthenticated}
                                newUser={this.state.newUser}
                                handleRegisterChange={this.handleChangeRegister}
                                handleRegisterSubmit={this.handleRegister}
                            /> : null
                        }>
                        </Route>
                        <Route path="/entries" component={EntryList}/>
                        <Route path="/init" component={Init}/>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default App;
