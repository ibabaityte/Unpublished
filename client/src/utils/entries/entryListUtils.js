import axios from "axios";

import {
    generateRequestConfig
} from "../users/headerUtils";
import {ENTRIES_URL} from "../constants/apiConstants";

const createEntry = (entry, entries, setEntries) => {
    const {title, content} = entry;
    axios.post(ENTRIES_URL, {title, content}, generateRequestConfig()).then((result) => {
        entries.push(result.data.data);
        setEntries(entries);
    }).catch(err => {
        console.log(err);
    });
};

const updateEntry = (id, entry, entries, setEntries, selectedEntry, setSelectedEntry) => {
    const {title, content} = entry;
    const url = `${ENTRIES_URL}/${id}`;
    axios.put(url, {title, content}, generateRequestConfig()).then((result) => {
        const updatedEntry = result.data;
        setSelectedEntry(updatedEntry);
        const entryInList = entries.find(entry => entry._id === result.data._id);
        const index = entries.indexOf(entryInList);
        entries[index] = result.data;
        setEntries(entries);
    }).catch(err => {
        console.log(err);
    });
};

const deleteEntry = (userType, entryId, entries, setEntries) => {
    const url = `${ENTRIES_URL}/${entryId}`;
    axios.delete(url, generateRequestConfig()).then(() => {
        const updatedEntries = entries.filter(entry => entry._id !== entryId);
        setEntries(updatedEntries);
        if(userType === "USER") {
            window.location.href = "/entries"
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