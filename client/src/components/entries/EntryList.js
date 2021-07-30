import React, {useEffect, useState} from "react";
import {
    Link,
    Route
} from "react-router-dom";

// component imports
import Entry from "./Entry";
import CreateEntry from "./CreateEntry";
import UpdateEntry from "./UpdateEntry";
import ViewEntry from "./ViewEntry";

// util imports
import {init} from "../../utils/initUtils";

const EntryList = (props) => {

    const {
        userType
    } = props;

    const [entries, setEntries] = useState([]);
    const [newEntry, setNewEntry] = useState({});
    const [selectedEntry, setSelectedEntry] = useState({});

    useEffect(() => {
        init(setEntries);
    }, []);

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
                    entries={entries}
                    setEntries={setEntries}
                    selectedEntry={selectedEntry}
                    setSelectedEntry={setSelectedEntry}
                    newEntry={newEntry}
                    setNewEntry={setNewEntry}
                />
            )}/>

            <Route path="/entries/updateEntry">
                <UpdateEntry
                    entry={selectedEntry}
                    entries={entries}
                    setEntries={setEntries}
                    selectedEntry={selectedEntry}
                    setSelectedEntry={setSelectedEntry}
                    newEntry={newEntry}
                    setNewEntry={setNewEntry}
                />
            </Route>

            <Route path="/entries/viewEntry" render={() => (
                <ViewEntry
                    key={selectedEntry._id}
                    entries={entries}
                    setEntries={setEntries}
                    selectedEntry={selectedEntry}
                    setSelectedEntry={setSelectedEntry}
                />
            )}/>
        </div>
    );
}

export default EntryList;