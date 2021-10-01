import axios from "axios";
import {generateRequestConfig} from "./headerUtils";
import {API_URL, AUTH_URL, REGISTER_URL} from "../constants/apiConstants";

const getUserData = () => {
    const {LoginToken, UserId, UserType, Username, ExpirationTimestamp} = localStorage;
    return {
        LoginToken,
        UserId,
        UserType,
        Username,
        ExpirationTimestamp
    }
};

const checkAuth = (status, setState) => {
    if (status === 200) {
        setState(true);
    }
};

const login = (user, setUser, checkAuth, setIsAuthenticated, setStatus) => {
    const {username, password} = user;
    axios.post(AUTH_URL, {username, password})
        .then((result) => {
            setUser({
                username: "",
                password: "",
                UserId: "",
                UserType: "",
                Username: ""
            });
            localStorage.setItem('LoginToken', result.data.token);
            localStorage.setItem('UserId', result.data.userId);
            localStorage.setItem('UserType', result.data.userType);
            localStorage.setItem('Username', result.data.username);
            localStorage.setItem('ExpirationTimestamp', result.data.expirationTimestamp);
            checkAuth(result.status, setIsAuthenticated);
            const {UserType} = getUserData();
            if(UserType === "ADMIN") {
                window.location.href = "/home/admin"
            } else {
                window.location.href = "/home/entries"
            }
        })
        .catch((err) => {
            console.log(err);
            setStatus(err.response.data);
            console.log(err.response.data.message);
        });
}

const register = (newUser, setNewUser, setStatus) => {
    const {username, password} = newUser;
    axios.post(REGISTER_URL, {username, password})
        .then((result) => {
            console.log(result);
            setNewUser(newUser);
            window.location.href = "/auth"
        })
        .catch((err) => {
            setStatus(err.response.data);
        });
}

const logout = (e, anchorRef, setOpen) => {
    localStorage.clear();
    window.location.href = "/"
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
        return;
    }
    setOpen(false);
}

const automaticLogout = (ExpirationTimestamp) => {
    const delay = ExpirationTimestamp - Date.now();
    const expirationTimer = setTimeout(() => {
        if(delay >= 0) {
            localStorage.clear();
            window.location = '/';
        }
    }, delay);
    return () => clearTimeout(expirationTimer);
};

const deleteProfile = (e, anchorRef, setOpenModal, userType, entryId) => {
    const userId = localStorage.getItem('UserId');
    axios.delete(`${API_URL}/${userId}`, generateRequestConfig()).then((response) => {
        console.log(response);
        localStorage.clear();
        window.location.href = "/";
        if (anchorRef.current && anchorRef.current.contains(e.target)) {
            return;
        }
        setOpenModal(false);
    });
}

export {
    getUserData,
    checkAuth,
    login,
    register,
    logout,
    automaticLogout,
    deleteProfile
}