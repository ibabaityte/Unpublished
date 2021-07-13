import axios from "axios";
import {generateRequestConfig} from "./headerUtils";

const API_URL = "http://localhost:8081/";
const ADMIN_URL = API_URL + "/admin";
const ADMIN_USERS_URL = ADMIN_URL + "/allUsers";
const ADMIN_ENTRIES_URL = ADMIN_URL + "/allEntries";

const getAdminUserList = (setState) => {
    axios.get(ADMIN_USERS_URL, generateRequestConfig()).then((response) => {
        setState(response.data);
    }).catch((error) => {
        console.log(error);
    });
}

const getAdminEntryList = (setState) => {
    axios.get(ADMIN_ENTRIES_URL, generateRequestConfig()).then((response) => {
        console.log(response);
        setState(response.data);
    }).catch((error) => {
        console.log(error);
    });
}

const adminDeleteProfile = (id, list, setState) => {
    axios.delete(`${API_URL}${id}`, generateRequestConfig()).then((response) => {
        console.log(response);
        const updatedUsers = list.filter(user => user._id !== id);
        setState(updatedUsers);
    });
}

export {
    getAdminUserList,
    getAdminEntryList,
    adminDeleteProfile
};