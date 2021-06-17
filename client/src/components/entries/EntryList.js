import React from "react";
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


class EntryList extends React.Component {
    constructor() {
        super();
        this.state = {
            entries: [],
            newEntry: {
                title: "",
                content: ""
            },
            adminEntries: [],
            adminUsers: [],
            displayUpdate: false,
            entryId: "",
            selectedEntry: null,
            userType: "",
            username: ""
        }
    }


    componentDidMount() {
        this.init();
        this.getUsernameAndType();
        this.getAdminUserList();
        this.getAdminEntryList();
    }

    getUsernameAndType = () => {
        const userId = localStorage.getItem('UserId');
        const loginToken = localStorage.getItem('LoginToken');
        const url = `http://localhost:8081/${userId}`;
        const headers = {
            'Authorization': loginToken
        }
        axios.get(url, {headers}).then((response) => {
            this.setState({username: response.data.username, userType: response.data.userType})
        });
    }

    updateEntries = entries => this.setState({entries});


    displayUpdateToggle = () => this.setState({displayUpdate: !this.state.displayUpdate});


    createEntry = (entry) => {
        const {title, content} = entry;
        const entries = this.state.entries;
        const loginToken = localStorage.getItem('LoginToken');
        const url = "http://localhost:8081/entries";
        const headers = {
            'Authorization': loginToken
        }
        axios.post(url, {title, content}, {headers}).then((result) => {
            console.log(result);
            entries.push(result.data.data);
            this.updateEntries(entries);
        }).catch(err => {
            console.log(err.response.data.message);
        });
    }


    updateEntry = (id, entry) => {
        const {title, content} = entry;
        const loginToken = localStorage.getItem('LoginToken');
        const url = `http://localhost:8081/entries/${id}`;
        const headers = {
            'Authorization': loginToken
        }
        axios.put(url, {title, content}, {headers}).then((result) => {
            console.log(result);
            const entries = this.state.entries;

            for (let i = 0; i < entries.length; i++) {
                if (entries[i]._id === result.data._id) {
                    entries[i] = result.data;
                    this.updateEntries(entries);
                    this.displayUpdateToggle();
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }


    selectedEntry = entry => this.setState({
        entryId: entry._id,
        selectedEntry: entry,
        displayUpdate: true
    })


    deleteEntry = (id) => {
        var currentEntries;
        if (this.state.userType === "USER") {
            currentEntries = this.state.entries;
        } else {
            currentEntries = this.state.adminEntries;
        }
        const url = `http://localhost:8081/entries/${id}`;
        const headers = {
            Authorization: localStorage.getItem('LoginToken')
        };
        axios.delete(url, {headers}).then(() => {
            const updatedEntries = currentEntries.filter(entry => entry._id !== id);
            this.updateEntries(updatedEntries);
            window.location.href = "/entries"
        }).catch(err => {
            console.log(err);
        });
    }


    handleChange = (e, entry) => {
        // e.preventDefault();
        entry[e.currentTarget.tagName.toLowerCase()] = e.target.value;
        this.setState({entry});
    }

    sanitizeConf = {
        allowedTags: ["b", "i", "em", "strong", "a", "p", "h1"],
        allowedAttributes: { a: ["href"] }
    };

    sanitize = (entry) => {
        this.setState({ entry: sanitizeHtml(entry, this.sanitizeConf) });
    };


    handleSubmit = (e, entry) => {
        e.preventDefault();
        if (entry._id) {
            this.updateEntry(entry._id, entry);
        } else {
            this.createEntry(entry);
        }
    }


    init = () => {
        const loginToken = localStorage.getItem('LoginToken');
        const url = "http://localhost:8081/entries";
        const headers = {
            'Authorization': loginToken
        }
        axios.get(url, {headers}).then((response) => {
            this.updateEntries(response.data);
            console.log(response);
        });
    }

    handleRedirect = () => {
        window.location.href = "/entries"
    }


    logout = () => {
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


    deleteProfile = () => {
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


    adminDeleteProfile = (id) => {
        var url = `http://localhost:8081/${id}`;
        const loginToken = localStorage.getItem('LoginToken');
        const headers = {
            'Authorization': loginToken
        }
        axios.delete(url, {headers}).then((response) => {
            console.log(response);
        });
    }


    getAdminUserList = () => {
        const loginToken = localStorage.getItem('LoginToken');
        const headers = {
            'Authorization': loginToken
        }
        const url = "http://localhost:8081/admin/allUsers";
        const userType = localStorage.getItem('UserType');
        console.log(userType);
        axios.get(url, {headers}).then((response) => {
            this.setState({adminUsers: response.data});
        }).catch((error) => {
            console.log(error);
        });
    }


    getAdminEntryList = () => {
        const loginToken = localStorage.getItem('LoginToken');
        const headers = {
            'Authorization': loginToken
        }
        const url = "http://localhost:8081/admin/allEntries";
        axios.get(url, {headers}).then((response) => {
            console.log(response);
            this.setState({adminEntries: response.data});
        }).catch((error) => {
            console.log(error);
        });
    }


    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header
                        username={this.state.username}
                        userType={this.state.userType}
                        handleLogout={this.logout}
                        handleProfileDelete={this.deleteProfile}
                    />


                    <Route path="/viewEntry" render={() => (
                        <ViewEntry
                            key={this.selectedEntry._id}
                            entry={this.state.selectedEntry}
                            selectedEntry={this.state.selectedEntry}
                            selectEntry={this.selectedEntry}
                            deleteEntry={this.deleteEntry}
                        />
                    )}/>


                    <Route path="/createEntry" render={() => (
                        <CreateEntry
                            entry={this.state.newEntry}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            handleRedirect={this.handleRedirect}
                        />
                    )}/>


                    <Route path="/entries">
                        {this.state.entries.map((entry) => (
                            <Entry
                                key={entry._id}
                                entry={entry}
                                selectedEntry={this.selectedEntry}
                                deleteEntry={this.deleteEntry}
                            />
                        ))}
                        <Link to="/createEntry">
                            <button type="button">Create a new Entry</button>
                        </Link>
                    </Route>


                    <Route path="/updateEntry">
                        {this.state.displayUpdate ?
                            <UpdateEntry
                                entry={this.state.selectedEntry}
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                handleRedirect={this.handleRedirect}
                            /> : null
                        }
                    </Route>

                    <Route path="/admin">
                        <AdminPanelComponent/>
                    </Route>

                    <Route path="/admin/allUsers" render={() => (
                        <AdminUserList
                            adminUsers={this.state.adminUsers}
                            handleProfileDelete={this.adminDeleteProfile}
                        />
                    )}/>


                    <Route path="/admin/allEntries" render={() => (
                        <AdminEntryList
                            adminEntries={this.state.adminEntries}
                            deleteEntry={this.deleteEntry}
                        />
                    )}/>
                </BrowserRouter>
            </div>
        );
    }
}

export default EntryList;