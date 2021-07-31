import React from "react";

// util imports
import {deleteEntry} from "../../utils/entries/entryListUtils";

const AdminEntryList = (props) => {
    const {userId, adminEntries, setEntries} = props;
    return (
        adminEntries.map((entry) => (
            <div key={entry._id}>
                <div>{entry.title}</div>
                <div>{entry.content}</div>
                <button onClick={() => deleteEntry(userId, entry._id, adminEntries, setEntries)}>Delete</button>
            </div>
        ))
    );
}

export default AdminEntryList;