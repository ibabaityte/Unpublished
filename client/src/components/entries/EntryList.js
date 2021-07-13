import React, {useState, useEffect} from "react";
import axios from "axios";
import {Route, Link, BrowserRouter} from "react-router-dom";

import CreateEntry from "./CreateEntry";
import UpdateEntry from "./UpdateEntry";
import ViewEntry from "./ViewEntry";
import Entry from "./Entry";

const EntryList = () => {

    const [entries, setEntries] = useState([]);
    const [newEntry, setNewEntry] = useState({});
    const [selectedEntry, setSelectedEntry] = useState({});
    const [displayUpdate, setDisplayUpdate] = useState(false);

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

    const displayUpdateToggle = () => setDisplayUpdate(!displayUpdate);

    const createEntry = (entry) => {
        const {title, content} = entry;
        const loginToken = localStorage.getItem('LoginToken');
        const url = "http://localhost:8081/entries";
        const headers = {
            'Authorization': loginToken
        }
        axios.post(url, {title, content}, {headers}).then((result) => {
            entries.push(result.data.data);
            // updateEntries(entries);
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
                    // updateEntries(entries);
                    setEntries(entries);
                    console.log(selectedEntry);
                    // displayUpdateToggle();
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }

    const getSelectedEntry = (entry) => {
        setSelectedEntry(entry);
        setDisplayUpdate(true);
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
            displayUpdateToggle();
        } else {
            createEntry(entry);
        }
    }

    const handleRedirect = () => {
        window.location.href = "/entries"
    }

    // logout should go to app.js
    // const logout = () => {
    //     const userId = localStorage.getItem('UserId');
    //     const loginToken = localStorage.getItem('LoginToken');
    //     const url = `http://localhost:8081/${userId}/logout`;
    //     const headers = {
    //         'Authorization': loginToken
    //     }
    //     axios.get(url, {headers}).then((response) => {
    //         console.log(response);
    //         localStorage.removeItem("LoginToken");
    //     });
    //     window.location.href = "/"
    // }


    // // app.js method
    // const deleteProfile = () => {
    //     const userId = localStorage.getItem('UserId');
    //     const loginToken = localStorage.getItem('LoginToken');
    //     let url = `http://localhost:8081/${userId}`;
    //     const headers = {
    //         'Authorization': loginToken
    //     }
    //     axios.delete(url, {headers}).then((response) => {
    //         console.log(response);
    //         localStorage.removeItem("LoginToken");
    //         window.location.href = "/"
    //     });
    // }

    return (
        <div>
            <BrowserRouter>

                <Route path="/viewEntry" render={() => (
                    <ViewEntry
                        key={selectedEntry._id}
                        selectedEntry={selectedEntry}
                        entries={entries}
                        setEntries={setEntries}
                        selectEntry={getSelectedEntry}
                    />
                )}/>

                <Route path="/createEntry" render={() => (
                    <CreateEntry
                        entry={newEntry}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        handleRedirect={handleRedirect}
                    />
                )}/>

                <Route path="/entries">
                    {entries.map((entry) => (
                        <Entry
                            key={entry._id}
                            entry={entry}
                            entries={entries}
                            setEntries={setEntries}
                            selectedEntry={getSelectedEntry}
                        />
                    ))}
                    <Link to="/createEntry">
                        <button type="button">Create a new Entry</button>
                    </Link>
                </Route>

                <Route path="/updateEntry">
                        <UpdateEntry
                            selectedEntry={selectedEntry}
                            setSelectedEntry={setSelectedEntry}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            handleRedirect={handleRedirect}
                        />
                </Route>

            </BrowserRouter>
        </div>
    );
}

export default EntryList;