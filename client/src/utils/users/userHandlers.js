import {checkAuth, login, register} from "./userUtils";

const handleChangeLogin = (e, user, setUser) => {
    e.preventDefault();
    setUser({
            ...user,
            [e.currentTarget.name]: e.target.value
        }
    );
}

const handleChangeRegister = (e, newUser, setNewUser) => {
    e.preventDefault();
    setNewUser({
            ...newUser,
            [e.currentTarget.name]: e.target.value
        }
    );
}

const handleLogin = (e, user, setUser, setIsAuthenticated, setStatus) => {
    e.preventDefault();
    login(user, setUser, checkAuth, setIsAuthenticated, setStatus);
}

const handleRegister = (e, newUser, setNewUser, setStatus) => {
    e.preventDefault();
    register(newUser, setNewUser, setStatus);
}

export {
    handleChangeLogin,
    handleChangeRegister,
    handleLogin,
    handleRegister
};