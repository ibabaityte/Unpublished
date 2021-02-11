import React from "react";
import axios from "axios";

class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            username: ""
        }
    }

    componentDidMount() {
        const userId = localStorage.getItem('UserId');
        const loginToken = localStorage.getItem('LoginToken');
        axios.get(`http://localhost:8081/${userId}`, {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : loginToken
            }}).then((response) => {
            this.setState({
                username: response.data.username
            })
            console.log(this.state.username);
        });
    }

    handleLogout = () => {
        const userId = localStorage.getItem('UserId');
        let loginToken = localStorage.getItem('LoginToken');
        axios.get(`http://localhost:8081/${userId}/logout`, {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : loginToken
            }}).then((response ) => {
                    console.log(response);
                    localStorage.removeItem("LoginToken");
        });
    }

    handleProfileDelete = () => {
        const userId = localStorage.getItem('UserId');
        let loginToken = localStorage.getItem('LoginToken');
        axios.delete(`http://localhost:8081/${userId}`, {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : loginToken
            }}).then((response) => {
            console.log(response);
        });
    }


    render() {
        return (
            <div className = "header">
                <div className = "username">{this.state.username}</div>
                <button onClick = {this.handleLogout}>Logout</button>
                <button onClick = {this.handleProfileDelete}>Delete profile</button>
            </div>
        );
    }
}

export default Header;