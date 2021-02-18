import React from "react";
import axios from "axios";
import CreateEntry from "./CreateEntry";
import UpdateEntry from "./UpdateEntry";
import ViewEntry from "./ViewEntry";
import Entry from "./Entry";
import Header from "../users/Header";
import { BrowserRouter, Route, Link } from "react-router-dom";


class EntryList extends React.Component {
    constructor() {
        super();
        this.state = {
            entries: [],
            newEntry: {
                title: "",
                content: ""
            },
            displayUpdate: false,
            entryId: "",
            selectedEntry: null,
            username: ""
        }

        this.init();
        this.getUsername();
    }

    updateEntries = entries => this.setState({entries});

    displayUpdateToggle = () => this.setState({displayUpdate: !this.state.displayUpdate});

    getUsername = () => {

        const userId = localStorage.getItem('UserId');
        const loginToken = localStorage.getItem('LoginToken');
        const url = `http://localhost:8081/${userId}`;
        const headers = {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : loginToken
        }

        axios.get(url, {headers}).then((response) => {
            this.setState({username: response.data.username})
            console.log(response);
        });
    }


    createEntry = (entry) => {
        const { title, content } = entry;
        const entries = this.state.entries;

        const loginToken = localStorage.getItem('LoginToken');
        const url = "http://localhost:8081/entries";
        const headers = {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : loginToken
        }

        axios.post(url, { title, content }, { headers }).then((result) => {
            console.log(result);
            entries.push(result.data.data);
            this.updateEntries(entries);
        }).catch(err => {
            console.log(err.response.data.message);
        });
    }


    updateEntry = (id, entry) => {
        const { title, content } = entry;

        const loginToken = localStorage.getItem('LoginToken');
        const url = `http://localhost:8081/entries/${id}`;
        const headers = {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : loginToken
        }

        axios.put(url, { title, content }, { headers }).then((result) => {
            console.log(result);
            const entries = this.state.entries;

            for(let i = 0; i < entries.length; i++) {
                if(entries[i]._id === result.data._id) {
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
    });


    deleteEntry = (id) => {
        const currentEntries = this.state.entries;
        const url = `http://localhost:8081/entries/${id}`;
        const headers = {
            Authorization: localStorage.getItem('LoginToken')
        };

        axios.delete(url, {headers}).then(() => {
            const updatedEntries = currentEntries.filter(entry => entry._id !== id);
            this.updateEntries(updatedEntries);
            window.location.href="/entries"
        }).catch(err => {
            console.log(err);
        });
    }


    handleChange = (e, entry) => {
        e.preventDefault();
        entry[e.currentTarget.name] = e.currentTarget.value;
        this.setState({entry});
    }


    handleSubmit = (e, entry) => {
        e.preventDefault();
        if(entry._id) {
            this.updateEntry(entry._id, entry);
        }
        else {
            this.createEntry(entry);
        }
    }


    init = () => {
        const loginToken = localStorage.getItem('LoginToken');
        const url = "http://localhost:8081/entries";
        const headers = {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : loginToken
        }

        axios.get(url, { headers }).then((response) => {
                this.updateEntries(response.data);
            });
    }

    handleRedirect = () => {
        window.location.href="/entries"
    }

    logout = () => {
        const userId = localStorage.getItem('UserId');
        const loginToken = localStorage.getItem('LoginToken');
        const url = `http://localhost:8081/${userId}/logout`;
        const headers = {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : loginToken
        }
        axios.get(url, {headers}).then((response ) => {
            console.log(response);
            localStorage.removeItem("LoginToken");
            window.location.href="/"
        });
    }

    deleteProfile = () => {
        const userId = localStorage.getItem('UserId');
        const loginToken = localStorage.getItem('LoginToken');
        const url = `http://localhost:8081/${userId}`;
        const headers = {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : loginToken
        }
        axios.delete(url, { headers }).then((response) => {
            console.log(response);
            localStorage.removeItem("LoginToken");
            window.location.href="/"
        });

    }


    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header
                        username = {this.state.username}
                        handleLogout = {this.logout}
                        handleProfileDelete = {this.deleteProfile}
                    />

                    <Route path = "/createEntry" render={() => (
                        <CreateEntry
                            entry={this.state.newEntry}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            handleRedirect = {this.handleRedirect}
                        />
                    )}/>

                    <Route path = "/viewEntry">
                        <ViewEntry
                            key={this.selectedEntry._id}
                            entry={this.state.selectedEntry}
                            selectedEntry={this.state.selectedEntry}
                            deleteEntry={this.deleteEntry}
                        />
                    </Route>


                    <Route path = "/entries">
                        {this.state.entries.map((entry) => (
                            <Entry
                                key={entry._id}
                                entry={entry}
                                selectedEntry={this.selectedEntry}
                                deleteEntry={this.deleteEntry}
                            />
                        ))}
                        <Link to = "/createEntry">
                            <button type = "button">Create a new Entry</button>
                        </Link>
                    </Route>

                    <Route path = "/updateEntry" >
                        {this.state.displayUpdate ?
                            <UpdateEntry
                                entry={this.state.selectedEntry}
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                handleRedirect = {this.handleRedirect}
                            /> : null
                        }
                    </Route>

                </BrowserRouter>
            </div>
        );
    }
}

export default EntryList;