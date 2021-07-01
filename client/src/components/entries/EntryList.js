import React, {useState, useEffect} from "react";
import axios from "axios";
import {Route, Link, BrowserRouter} from "react-router-dom";
import sanitizeHtml from "sanitize-html";

import CreateEntry from "./CreateEntry";
import UpdateEntry from "./UpdateEntry";
import ViewEntry from "./ViewEntry";
import Entry from "./Entry";
import Header from "../users/Header";
import AdminUserList from "../admin/AdminUserList";
import AdminEntryList from "../admin/AdminEntryList";
import AdminPanelComponent from "../admin/Admin";


const EntryList = () => {
    // constructor() {
    //     super();
    //     this.state = {
    //         entries: [],
    //         newEntry: {
    //             title: "",
    //             content: ""
    //         },
    //         adminEntries: [],
    //         adminUsers: [],
    //         displayUpdate: false,
    //         entryId: "",
    //         selectedEntry: null,
    //         userType: "",
    //         username: ""
    //     }
    // }

    const [entries, setEntries] = useState([]);
    const [adminEntries, setAdminEntries] = useState([]);
    const [adminUsers, setAdminUsers] = useState([]);
    const [newEntry, setNewEntry] = useState({});
    const [selectedEntry, setSelectedEntry] = useState(null);
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

    // componentDidMount() {
    //     this.init();
    //     this.getUsernameAndType();
    //     this.getAdminUserList();
    //     this.getAdminEntryList();
    // }

    const getUsernameAndType = () => {
        const userId = localStorage.getItem('UserId');
        const loginToken = localStorage.getItem('LoginToken');
        const url = `http://localhost:8081/${userId}`;
        const headers = {
            'Authorization': loginToken
        }
        axios.get(url, {headers}).then((response) => {
            // this.setState({username: response.data.username, userType: response.data.userType});
            setUsername(response.data.username);
            setUserType(response.data.userType);
        });
    }

    // const updateEntries = entries => this.setState({entries});
    const updateEntries = entries => setEntries(entries);

    // const displayUpdateToggle = () => this.setState({displayUpdate: !this.state.displayUpdate});
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
            for (let i = 0; i < entries.length; i++) {
                if (entries[i]._id === result.data._id) {
                    entries[i] = result.data;
                    updateEntries(entries);
                    // displayUpdateToggle();
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }


    // const selectedEntry = entry => this.setState({
    //     entryId: entry._id,
    //     selectedEntry: entry,
    //     displayUpdate: true
    // })

    const getSelectedEntry = (entry) => {
        setSelectedEntry(entry);
        setDisplayUpdate(true);
    }

    const deleteEntry = (id) => {
        var currentEntries;
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
        console.log(e.target);
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
        console.log(entry);
        if (entry._id) {
            updateEntry(entry._id, entry);
            displayUpdateToggle();
        } else {
            createEntry(entry);
        }
    }

    const sanitizeConf = {
        allowedTags: ["b", "i", "em", "strong", "a", "p", "h1"],
        allowedAttributes: {a: ["href"]}
    };

//////////// ?????????????????????????
    const sanitize = (entry) => {
        // this.setState({entry: sanitizeHtml(entry, this.sanitizeConf)});
        setNewEntry(sanitizeHtml(entry, sanitizeConf));
        setSelectedEntry(sanitizeHtml(entry, sanitizeConf));
        // updateEntry(entry._id, sanitizeHtml(entry, sanitizeConf));
    };


    // const init = () => {
    //     const loginToken = localStorage.getItem('LoginToken');
    //     const url = "http://localhost:8081/entries";
    //     const headers = {
    //         'Authorization': loginToken
    //     }
    //     axios.get(url, {headers}).then((response) => {
    //         updateEntries(response.data);
    //     });
    // }

    const handleRedirect = () => {
        window.location.href = "/entries"
    }


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


    const deleteProfile = () => {
        const userId = localStorage.getItem('UserId');
        const loginToken = localStorage.getItem('LoginToken');
        var url = `http://localhost:8081/${userId}`;
        const headers = {
            'Authorization': loginToken
        }
        axios.delete(url, {headers}).then((response) => {
            console.log(response);
            localStorage.removeItem("LoginToken");
            window.location.href = "/"
        });
    }


    const adminDeleteProfile = (id) => {
        var url = `http://localhost:8081/${id}`;
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
                        // entry={this.state.selectedEntry}
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
                    {displayUpdate ?
                        <UpdateEntry
                            selectedEntry={selectedEntry}
                            sanitize={sanitize}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            handleRedirect={handleRedirect}
                        /> : null
                    }
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