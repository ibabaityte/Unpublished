import axios from "axios";

const init = (setEntries) => {
    const loginToken = localStorage.getItem('LoginToken');
    const url = "http://localhost:8081/entries";
    const headers = {
        'Authorization': loginToken
    }
    axios.get(url, {headers}).then((response) => {
        setEntries(response.data);
    });
}

export {
    init
}