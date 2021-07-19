import axios from "axios";

import {
    generateRequestConfig
} from "./headerUtils";

const ENTRIES_URL = "http://localhost:8081/entries";

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
        console.log(result);
        const updatedEntry = result.data;
        setSelectedEntry(updatedEntry);
        for (let i = 0; i < entries.length; i++) {
            if (entries[i]._id === result.data._id) {
                entries[i] = result.data;
                setEntries(entries);
                console.log(selectedEntry);
            }
        }
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