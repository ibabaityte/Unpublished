import axios from "axios";
import {generateRequestConfig} from "../users/headerUtils";
import {ADMIN_ENTRIES_URL, ADMIN_USERS_URL, API_URL} from "../constants/apiConstants";

const getAdminUserList = (setState) => {
    axios.get(ADMIN_USERS_URL, generateRequestConfig()).then((response) => {
        setState(response.data);
        // console.log(response);
    }).catch((error) => {
        console.log(error);
    });
}

const getAdminEntryList = (setState) => {
    axios.get(ADMIN_ENTRIES_URL, generateRequestConfig()).then((response) => {
        setState(response.data);
        // console.log(response);
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