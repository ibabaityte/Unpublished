import React from "react";
import axios from "axios";
import CreateEntry from "./CreateEntry";
import UpdateEntry from "./UpdateEntry";
import Entry from "./Entry";

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
            selectedEntry: null
        }

        this.init();
    }

    updateEntries = entries => this.setState({entries});

    displayUpdateToggle = () => this.setState({displayUpdate: !this.state.displayUpdate});


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


    selectEntry = entry => this.setState({
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


    render() {
        return (
            <div>
                {this.state.entries.map((entry) => (
                    <Entry
                        key={entry._id}
                        entry={entry}
                        selectEntry={this.selectEntry}
                        deleteEntry={this.deleteEntry}
                    />
                ))}

                <CreateEntry
                    entry={this.state.newEntry}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />

                {this.state.displayUpdate ?
                    <UpdateEntry
                        entry={this.state.selectedEntry}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                    /> : null
                }
            </div>
        );
    }
}

export default EntryList;