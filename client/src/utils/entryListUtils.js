import axios from "axios";

const deleteEntry = (userType, entryId, entries, setEntries) => {
    const url = `http://localhost:8081/entries/${entryId}`;
    const headers = {
        Authorization: localStorage.getItem('LoginToken')
    };
    axios.delete(url, {headers}).then(() => {
        const updatedEntries = entries.filter(entry => entry._id !== entryId);
        setEntries(updatedEntries);
        if(userType === "USER") {
            window.location.href = "/entries"
        }
    }).catch(err => {
        console.log(err);
    });
}

export default deleteEntry;