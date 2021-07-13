import React from "react";
import deleteEntry from "../../utils/entryListUtils";

const AdminEntryList = (props) => {
    const {userId, adminEntries, setEntries} = props;
    return (
        adminEntries.map((entry) => (
            <div key = {entry._id}>
                <div>{entry.title}</div>
                <div>{entry.content}</div>
                <button onClick={() => deleteEntry(userId, entry._id, adminEntries, setEntries)}>Delete</button>
            </div>
        ))
    );
}

export default AdminEntryList;