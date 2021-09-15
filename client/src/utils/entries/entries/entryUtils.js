import axios from "axios";

import {
    generateRequestConfig
} from "../../users/headerUtils";
import {ENTRIES_URL} from "../../constants/apiConstants";
import {handleRedirect} from "../../redirectUtils";

const createEntry = (entry, setStatus) => {
    const {title, content} = entry;
    axios.post(ENTRIES_URL, {title, content}, generateRequestConfig()).then((result) => {
        handleRedirect();
        const statusCode = result.data.code;
        const statusText = result.data.message;
        localStorage.setItem('ListStatusCode', statusCode.toString());
        localStorage.setItem('ListStatusText', statusText);
        // below logic is not needed because we have init() function which already fetches all information from db
        // console.log(result.data);
        // entries.push(result.data.data);
        // setEntries(entries);
        // const response = result;
    }).catch(err => {
        console.log(err.response.data.message);
        setStatus({
            statusCode: err.response.data.code,
            statusText: err.response.data.message
        });
    });
};

const updateEntry = (id, entry, setStatus) => {
    const {title, content} = entry;
    const url = `${ENTRIES_URL}/${id}`;
    axios.put(url, {title, content}, generateRequestConfig()).then((result) => {handleRedirect();
        const statusCode = result.data.code;
        const statusText = result.data.message;
        localStorage.setItem('ListStatusCode', statusCode.toString());
        localStorage.setItem('ListStatusText', statusText);
        // below logic is not needed because we have init() function which already fetches all information from db
        // const updatedEntry = result.data;
        // const entryInList = entries.find(entry => entry._id === result.data._id);
        // const index = entries.indexOf(entryInList);
        // setSelectedEntry(updatedEntry);
        // entries[index] = result.data;
        // setEntries(entries);
    }).catch(err => {
        console.log(err.response.data);
        setStatus({
            statusCode: err.response.data.code,
            statusText: err.response.data.message
        });
    });
};

const deleteEntry = (userType, entryId) => {
    const url = `${ENTRIES_URL}/${entryId}`;
    axios.delete(url, generateRequestConfig()).then(() => {
        // const updatedEntries = entries.filter(entry => entry._id !== entryId);
        // setEntries(updatedEntries);
        if (userType === "USER") {
            window.location.href = "/home/entries"
        } else {
            window.location.href = "/home/admin/allEntries"
        }
    }).catch(err => {
        console.log(err);
    });
};

export {
    createEntry,
    updateEntry,
    deleteEntry
};