import axios from "axios";
import {generateRequestConfig} from "./headerUtils";

const API_URL = "http://localhost:8081/";
const AUTH_URL = "http://localhost:8081/auth";
const REGISTER_URL = "http://localhost:8081/register";

const getUserData = () => {
    const {LoginToken, UserId, UserType, Username} = localStorage;
    return {
        LoginToken,
        UserId,
        UserType,
        Username
    }
};

const checkAuth = (status, setState) => {
    if (status === 200) {
        setState(true);
    }
};

const login = (user, setUser, checkAuth, setIsAuthenticated) => {
    const {username, password} = user;
    const {UserId, UserType, Username} = getUserData();
    axios.post(AUTH_URL, {username, password})
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
            checkAuth(result.status, setIsAuthenticated);
        });
}

const register = (newUser, setNewUser) => {
    const {username, password} = newUser;
    axios.post(REGISTER_URL, {username, password}).then((result) => {
        console.log(result);
        setNewUser(newUser);
        window.location.href = "/auth"
    });
}

const logout = (e, anchorRef, setOpen) => {
    // const userId = localStorage.getItem('UserId');
    // const url = `${API_URL}${userId}/logout`;
    // axios.get(url, generateRequestConfig()).then((response) => {
    //     console.log(response);
    // });
    localStorage.clear();
    window.location.href = "/"
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
        return;
    }
    setOpen(false);
}

const deleteProfile = (e, anchorRef, setOpen) => {
    const userId = localStorage.getItem('UserId');
    axios.delete(`${API_URL}${userId}`, generateRequestConfig()).then((response) => {
        console.log(response);
        localStorage.clear();
        window.location.href = "/";
        if (anchorRef.current && anchorRef.current.contains(e.target)) {
            return;
        }

        setOpen(false);
    });
}

export {
    getUserData,
    checkAuth,
    login,
    register,
    logout,
    deleteProfile
}