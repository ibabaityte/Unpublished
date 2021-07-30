import {checkAuth, login, register} from "./userUtils";

const handleChangeLogin = (e, user, setUser) => {
    e.preventDefault();
    const userCopy = user;
    userCopy[e.currentTarget.name] = e.currentTarget.value;
    setUser(userCopy);
}

const handleChangeRegister = (e, newUser, setNewUser) => {
    e.preventDefault();
    const newUserCopy = newUser;
    newUserCopy[e.currentTarget.name] = e.currentTarget.value;
    setNewUser(newUserCopy);
}

const handleLogin = (e, user, setUser, setIsAuthenticated) => {
    e.preventDefault();
    login(user, setUser, checkAuth, setIsAuthenticated);
}

const handleRegister = (e, newUser, setNewUser) => {
    e.preventDefault();
    register(newUser, setNewUser);
}

export {
    handleChangeLogin,
    handleChangeRegister,
    handleLogin,
    handleRegister
};