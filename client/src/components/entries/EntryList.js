import React, {useEffect, useState} from "react";
import {Link, Route} from "react-router-dom";

import {
    createEntry,
    updateEntry
} from "../../utils/entryListUtils";

import Entry from "./Entry";
import CreateEntry from "./CreateEntry";
import UpdateEntry from "./UpdateEntry";
import ViewEntry from "./ViewEntry";
import axios from "axios";

const EntryList = (props) => {

    const {userType} = props;

    const [entries, setEntries] = useState([]);
    const [newEntry, setNewEntry] = useState({});
    const [selectedEntry, setSelectedEntry] = useState({});

    useEffect(() => {
        const init = () => {
            const loginToken = localStorage.getItem('LoginToken');
            const url = "http://localhost:8081/entries";
            const headers = {
                'Authorization': loginToken
            }
            axios.get(url, {headers}).then((response) => {
                setEntries(response.data);
            });
        }

        init();
    }, []);

    const handleChange = (e, entry) => {
        e.preventDefault();
        if(entry._id) {
            setSelectedEntry({
                ...selectedEntry,
                [e.target.className]: e.target.value}
            );
        } else {
            setNewEntry({
                ...newEntry,
                [e.target.className]: e.target.value}
            );
        }
    }

    const handleSubmit = (e, entry) => {
        e.preventDefault();
        if (entry._id) {
            updateEntry(entry._id, entry, entries, setEntries, selectedEntry, setSelectedEntry);
        } else {
            createEntry(entry, entries, setEntries);
        }
    }

    const handleRedirect = () => {
        window.location.href = "/entries"
    }

    return (
        <div>
            <Route exact path="/entries">
                {entries.map((entry) => (
                    <Entry
                        key={entry._id}
                        entry={entry}
                        entries={entries}
                        setEntries={setEntries}
                        setSelectedEntry={setSelectedEntry}
                        userType={userType}
                    />
                ))}
                <Link to="/entries/createEntry">
                    <button type="button">Create a new Entry</button>
                </Link>
            </Route>

            <Route path="/entries/createEntry" render={() => (
                <CreateEntry
                    entry={newEntry}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    handleRedirect={handleRedirect}
                    setSelectedEntry={setSelectedEntry}
                />
            )}/>

            <Route path="/entries/updateEntry">
                <UpdateEntry
                    selectedEntry={selectedEntry}
                    setSelectedEntry={setSelectedEntry}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    handleRedirect={handleRedirect}
                />
            </Route>

            <Route path="/entries/viewEntry" render={() => (
                <ViewEntry
                    key={selectedEntry._id}
                    selectedEntry={selectedEntry}
                    entries={entries}
                    setEntries={setEntries}
                />
            )}/>
        </div>
    );
}

export default EntryList;