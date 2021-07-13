import React, {useEffect, useState} from "react";
import {Link, Route} from "react-router-dom";

import Entry from "./Entry";
import CreateEntry from "./CreateEntry";
import UpdateEntry from "./UpdateEntry";
import ViewEntry from "./ViewEntry";
import axios from "axios";

const EntryList = () => {

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

    const getSelectedEntry = (entry) => {
        setSelectedEntry(entry);
    }

    const createEntry = (entry) => {
        const {title, content} = entry;
        const loginToken = localStorage.getItem('LoginToken');
        const url = "http://localhost:8081/entries";
        const headers = {
            'Authorization': loginToken
        }
        axios.post(url, {title, content}, {headers}).then((result) => {
            entries.push(result.data.data);
            setEntries(entries);
        }).catch(err => {
            console.log(err.response.data.message);
        });
    }

    const updateEntry = (id, entry) => {
        const {title, content} = entry;
        const loginToken = localStorage.getItem('LoginToken');
        const url = `http://localhost:8081/entries/${id}`;
        const headers = {
            'Authorization': loginToken
        }
        axios.put(url, {title, content}, {headers}).then((result) => {
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
    }

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
            updateEntry(entry._id, entry);
        } else {
            createEntry(entry);
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
                        selectedEntry={getSelectedEntry}
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
                    selectEntry={getSelectedEntry}
                />
            )}/>
        </div>
    );
}

export default EntryList;