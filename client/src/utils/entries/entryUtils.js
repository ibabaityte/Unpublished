import axios from "axios";

import {
    generateRequestConfig
} from "../users/headerUtils";
import {ENTRIES_URL} from "../constants/apiConstants";
import {handleRedirect} from "./redirectUtils";
import {init} from "./initUtils";


const createEntry = (entry, entries, setEntries, setStatus) => {
    const {title, content} = entry;
    axios.post(ENTRIES_URL, {title, content}, generateRequestConfig()).then((result) => {
        // console.log(result.data);
        entries.push(result.data.data);
        setEntries(entries);
        handleRedirect();
    }).catch(err => {
        console.log(err.response.data);
        setStatus(err.response.data);
    });
};

const updateEntry = (id, entry, entries, setEntries, selectedEntry, setSelectedEntry, setStatus) => {
    const {title, content} = entry;
    const url = `${ENTRIES_URL}/${id}`;
    axios.put(url, {title, content}, generateRequestConfig()).then((result) => {
        const updatedEntry = result.data;
        const entryInList = entries.find(entry => entry._id === result.data._id);
        const index = entries.indexOf(entryInList);
        setSelectedEntry(updatedEntry);
        entries[index] = result.data;
        setEntries(entries);
        handleRedirect();
        // setStatus(result.data);
    }).catch(err => {
        console.log(err.response.data);
        setStatus(err.response.data);
    });
};

const deleteEntry = (userType, entryId, entries, setEntries) => {
    const url = `${ENTRIES_URL}/${entryId}`;
    axios.delete(url, generateRequestConfig()).then(() => {
        const updatedEntries = entries.filter(entry => entry._id !== entryId);
        setEntries(updatedEntries);
        if (userType === "USER") {
            window.location.href = "/home/entries"
        } else {
            window.location.href = "/home/admin/allEntries"
        }
    }).catch(err => {
        console.log(err);
    });
};

const searchEntries = (e, setEntries, query, setStatus) => {
    e.preventDefault();
    const url = `${ENTRIES_URL}/search`;
    axios.get(url, generateRequestConfig(query)).then((response) => {
        if(response.data.length === 0 || response.data.length < 1) {
            setEntries([]);
            setStatus({code: "404", message: "There is no such entry"});
        } else {
            setEntries(response.data);
            setStatus({code: "200", message: ""});
        }
    }).catch(err => {
        console.log(err);
    });
};

const clearSearch = (setQuery, setEntries, setStatus) => {
    init(setEntries);
    setQuery("");
    setStatus({code: "", message: ""});
};

export {
    createEntry,
    updateEntry,
    deleteEntry,
    searchEntries,
    clearSearch
};