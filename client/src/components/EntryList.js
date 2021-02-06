import React from "react";
import axios from "axios";
import CreateEntry from "./CreateEntry";
import UpdateEntry from "./UpdateEntry";

class EntryList extends React.Component {
    constructor() {
        super();
        this.state = {
            entries: [],
            displayUpdate: false,
            entryId: ""
        }
    }

    updateEntries = entries => this.setState({entries});

    displayUpdateToggle = () => this.setState({displayUpdate: !this.state.displayUpdate});

    componentDidMount() {
        let loginToken = localStorage.getItem('LoginToken');
        axios.get('http://localhost:8081/entries', {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : loginToken
            }}).then((response) => {
                this.updateEntries(response.data);
            });
    }

    handleDelete = (id) => {
        // Keep it stupid, simple
        const currentEntries = this.state.entries;
        const url = `http://localhost:8081/entries/${id}`;
        const headers = {
            Authorization: localStorage.getItem('LoginToken')
        };

        axios.delete(url, {headers}).then(() => {
            const updatedEntries = currentEntries.filter(entry => entry._id !== id);
            this.updateEntries(updatedEntries);
        });
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.entries.map((entry) => (
                        <div className="user" key = {entry._id}>
                            <div>{entry.title}</div>
                            <div>{entry.content}</div>
                            <button onClick = {() => this.handleDelete(entry._id)}>Delete</button>
                            <button onClick={() => this.setState({
                                UpdateEntryOpen: true,
                                entryId: entry._id,
                                selectedEntry: entry,
                                displayUpdate: true})
                            }>
                                Update
                            </button>
                        </div>
                    ))}
                </div>
                <CreateEntry currentStateEntries={this.state.entries} updateEntries={this.updateEntries}/>
                {this.state.displayUpdate ?<UpdateEntry
                    id = {this.state.entryId}
                    entry={this.state.selectedEntry}
                    currentStateEntries={this.state.entries}
                    updateEntries={this.updateEntries}
                    displayUpdateToggle={this.displayUpdateToggle}
                /> : null}
            </div>
        );
    }
}

export default EntryList;