import React from 'react';
import {BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Landing from "./components/Landing";
import Register from "./components/users/Register";
import Login from "./components/users/Login";
import EntryList from "./components/entries/EntryList";
import axios from "axios";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                username: "",
                password: ""
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
        if(status === 200) {
            this.setState({isAuthenticated: true})
        }
    }


    login = (user) => {
        const { username, password } = user;
        const url = "http://localhost:8081/auth";

        axios.post(url, { username, password })
            .then((result) => {
                this.updateUser(user);
                console.log(result);
                localStorage.setItem('LoginToken', result.data.token);
                localStorage.setItem('UserId', result.data.userId);
                this.checkAuth(result.status);
            });
    }

    register = (newUser) => {
        const { username, password } = newUser;
        const url = "http://localhost:8081/register";

        axios.post(url, { username, password })
            .then((result) => {
                console.log(result);
                this.updateNewUser(newUser);
                window.location.href="/auth"
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
                        <Route path = "/" exact component = {Landing}/>
                        <Route path = "/auth" render={() => (
                            <Login
                                user = {this.state.user}
                                handleChange = {this.handleChangeLogin}
                                handleSubmit = {this.handleLogin}
                                isAuthenticated = {this.state.isAuthenticated}
                            />
                        )}/>
                        <Route path = "/register" render={() => (
                            <Register
                                newUser = {this.state.newUser}
                                handleChange = {this.handleChangeRegister}
                                handleSubmit = {this.handleRegister}
                                isAuthenticated = {this.state.isAuthenticated}
                            />
                        )}/>
                        <Route path = "/entries" component = {EntryList}/>
                        </BrowserRouter>
                    </div>
            </div>
        );
    }
}

export default App;
