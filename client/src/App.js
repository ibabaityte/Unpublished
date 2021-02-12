import React from 'react';
import './App.css';
import Landing from "./components/Landing";
import Header from "./components/users/Header";
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
            username: ""
        }
        this.getUsername();
    }

    updateUser = user => this.setState({user});
    updateNewUser = newUser => this.setState({newUser});


    login = (user) => {
        const { username, password } = user;
        const url = "http://localhost:8081/auth";

        axios.post(url, { username, password })
            .then((result) => {
                this.updateUser(user);
                console.log(result);
                localStorage.setItem('LoginToken', result.data.token);
                localStorage.setItem('UserId', result.data.userId);
            });
    }

    register = (newUser) => {
        const { username, password } = newUser;
        const url = "http://localhost:8081/register";

        axios.post(url, { username, password })
            .then((result) => {
                console.log(result);
                this.updateNewUser(newUser);
            });
    }

    getUsername = () => {

        const userId = localStorage.getItem('UserId');
        const loginToken = localStorage.getItem('LoginToken');
        const url = `http://localhost:8081/${userId}`;
        const headers = {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : loginToken
        }

        axios.get(url, {headers}).then((response) => {
            this.setState({username: response.data.username})
            console.log(response);
        });
    }

    logout = () => {
        const userId = localStorage.getItem('UserId');
        const loginToken = localStorage.getItem('LoginToken');
        const url = `http://localhost:8081/${userId}/logout`;
        const headers = {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : loginToken
        }
        axios.get(url, {headers}).then((response ) => {
            console.log(response);
            localStorage.removeItem("LoginToken");
        });
    }

    deleteProfile = () => {
        const userId = localStorage.getItem('UserId');
        const loginToken = localStorage.getItem('LoginToken');
        const url = `http://localhost:8081/${userId}`;
        const headers = {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : loginToken
        }
        axios.delete(url, { headers }).then((response) => {
            console.log(response);
            localStorage.removeItem("LoginToken");
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
                <Header
                    username = {this.state.username}
                    handleLogout = {this.logout}
                    handleProfileDelete = {this.deleteProfile}
                />
                {/*<Landing/>*/}
                <Register
                    newUser = {this.state.newUser}
                    handleChange = {this.handleChangeRegister}
                    handleSubmit = {this.handleRegister}
                />
                <Login
                    user = {this.state.user}
                    handleChange = {this.handleChangeLogin}
                    handleSubmit = {this.handleLogin}
                />
                {/*<EntryList/>*/}
            </div>
        );
    }
}

export default App;
