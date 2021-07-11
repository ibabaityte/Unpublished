import React, {useState, useEffect} from "react";
import axios from "axios";
import {Route, Link, BrowserRouter} from "react-router-dom";

import CreateEntry from "./CreateEntry";
import UpdateEntry from "./UpdateEntry";
import ViewEntry from "./ViewEntry";
import Entry from "./Entry";

//should go into the layout component
import Header from "../users/Header";
// These should go into the panel
import AdminUserList from "../admin/AdminUserList";
import AdminEntryList from "../admin/AdminEntryList";

// Admin panel should be its own major route in app.js
import AdminPanelComponent from "../admin/Admin";

const EntryList = () => {

    const [entries, setEntries] = useState([]);
    const [adminEntries, setAdminEntries] = useState([]);
    const [adminUsers, setAdminUsers] = useState([]);
    const [newEntry, setNewEntry] = useState({});
    const [selectedEntry, setSelectedEntry] = useState({});
    const [displayUpdate, setDisplayUpdate] = useState(false);
    const [userType, setUserType] = useState("");
    const [username, setUsername] = useState("");

    useEffect(() => {
        const init = () => {
            const loginToken = localStorage.getItem('LoginToken');
            const url = "http://localhost:8081/entries";
            const headers = {
                'Authorization': loginToken
            }
            axios.get(url, {headers}).then((response) => {
                updateEntries(response.data);
            });
        }

        init();
        getUsernameAndType();
        getAdminUserList();
        getAdminEntryList();
    }, []);

    const getUsernameAndType = () => {
        const userId = localStorage.getItem('UserId');
        const loginToken = localStorage.getItem('LoginToken');
        const url = `http://localhost:8081/${userId}`;
        const headers = {
            'Authorization': loginToken
        }
        axios.get(url, {headers}).then((response) => {
            setUsername(response.data.username);
            setUserType(response.data.userType);
        });
    }

    const updateEntries = entries => setEntries(entries);

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
            updateEntries(entries);

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
                    updateEntries(entries);
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

    const deleteEntry = (id) => {
        let currentEntries;
        if (userType === "USER") {
            currentEntries = entries;
        } else {
            currentEntries = adminEntries;
        }
        const url = `http://localhost:8081/entries/${id}`;
        const headers = {
            Authorization: localStorage.getItem('LoginToken')
        };
        axios.delete(url, {headers}).then(() => {
            const updatedEntries = currentEntries.filter(entry => entry._id !== id);
            updateEntries(updatedEntries);
            window.location.href = "/entries"
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
            displayUpdateToggle();
        } else {
            createEntry(entry);
        }
    }

    const handleRedirect = () => {
        window.location.href = "/entries"
    }

    // logout should go to app.js
    const logout = () => {
        const userId = localStorage.getItem('UserId');
        const loginToken = localStorage.getItem('LoginToken');
        const url = `http://localhost:8081/${userId}/logout`;
        const headers = {
            'Authorization': loginToken
        }
        axios.get(url, {headers}).then((response) => {
            console.log(response);
            localStorage.removeItem("LoginToken");
        });
        window.location.href = "/"
    }


    // app.js method
    const deleteProfile = () => {
        const userId = localStorage.getItem('UserId');
        const loginToken = localStorage.getItem('LoginToken');
        let url = `http://localhost:8081/${userId}`;
        const headers = {
            'Authorization': loginToken
        }
        axios.delete(url, {headers}).then((response) => {
            console.log(response);
            localStorage.removeItem("LoginToken");
            window.location.href = "/"
        });
    }

    // admin panel method
    const adminDeleteProfile = (id) => {
        let url = `http://localhost:8081/${id}`;
        const loginToken = localStorage.getItem('LoginToken');
        const headers = {
            'Authorization': loginToken
        }
        axios.delete(url, {headers}).then((response) => {
            console.log(response);
        });
    }

    const getAdminUserList = () => {
        const loginToken = localStorage.getItem('LoginToken');
        const headers = {
            'Authorization': loginToken
        }
        const url = "http://localhost:8081/admin/allUsers";
        axios.get(url, {headers}).then((response) => {
            // this.setState({adminUsers: response.data});
            setAdminUsers(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    const getAdminEntryList = () => {
        const loginToken = localStorage.getItem('LoginToken');
        const headers = {
            'Authorization': loginToken
        }
        const url = "http://localhost:8081/admin/allEntries";
        axios.get(url, {headers}).then((response) => {
            console.log(response);
            // this.setState({adminEntries: response.data});
            setAdminEntries(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div>
            <BrowserRouter>
                <Header
                    username={username}
                    userType={userType}
                    handleLogout={logout}
                    handleProfileDelete={deleteProfile}
                />

                <Route path="/viewEntry" render={() => (
                    <ViewEntry
                        key={selectedEntry._id}
                        selectedEntry={selectedEntry}
                        selectEntry={getSelectedEntry}
                        deleteEntry={deleteEntry}
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
                            selectedEntry={getSelectedEntry}
                            deleteEntry={deleteEntry}
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

                <Route path="/admin">
                    <AdminPanelComponent/>
                </Route>

                <Route path="/admin/allUsers" render={() => (
                    <AdminUserList
                        adminUsers={adminUsers}
                        handleProfileDelete={adminDeleteProfile}
                    />
                )}/>

                <Route path="/admin/allEntries" render={() => (
                    <AdminEntryList
                        adminEntries={adminEntries}
                        deleteEntry={deleteEntry}
                    />
                )}/>
            </BrowserRouter>
        </div>
    );
}

export default EntryList;