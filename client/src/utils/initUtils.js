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
//// redirect handler, dont know where to put this one
//// will need to remove this method later
const handleRedirect = () => {
    window.location.href = "/entries"
}

export {
    init,
    handleRedirect
};