import React from "react";

const AdminEntryList = (props) => {
    const {adminEntries, deleteEntry} = props;
    return (
        adminEntries.map((entry) => (
            <div key = {entry._id}>
                <div>{entry.title}</div>
                <div>{entry.content}</div>
                <button onClick={() => deleteEntry(entry._id)}>Delete</button>
            </div>
        ))
    );
}

export default AdminEntryList;