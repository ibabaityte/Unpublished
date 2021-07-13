import React from "react";
// import axios from "axios";
import {Link} from "react-router-dom";

// import CreateEntry from "./CreateEntry";
// import UpdateEntry from "./UpdateEntry";
// import ViewEntry from "./ViewEntry";
import Entry from "./Entry";

const EntryList = (props) => {

    const {entries, setEntries, getSelectedEntry} = props;

    return (
        <div>
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
        </div>
    );
}

export default EntryList;