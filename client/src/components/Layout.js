import React, {useEffect, useState} from "react";
import {Route} from "react-router-dom";
import axios from "axios";

import Header from "./users/Header";
import EntryList from "./entries/EntryList";
import CreateEntry from "./entries/CreateEntry";
import UpdateEntry from "./entries/UpdateEntry";
import ViewEntry from "./entries/ViewEntry";

const Layout = (props) => {

    const {username, userType, handleLogout, handleProfileDelete} = props;

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
        // setDisplayUpdate(true);
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
                    // displayUpdateToggle();
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
            // displayUpdateToggle();
        } else {
            createEntry(entry);
        }
    }

    const handleRedirect = () => {
        window.location.href = "/entries"
    }

    return (
        <div>
            <Header
                username={username}
                userType={userType}
                handleLogout={handleLogout}
                handleProfileDelete={handleProfileDelete}
            />

            <Route exact path="/entries">
                <EntryList
                    entries={entries}
                    setEntries={setEntries}
                    getSelectedEntry={getSelectedEntry}
                />
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
    )
}

export default Layout;