import React from "react";

const Entry = (props) => {
    const {entry, selectEntry, deleteEntry} = props;

    return (
        <div>
            <div>{entry.title}</div>
            <div>{entry.content}</div>
            <button onClick={() => deleteEntry(entry._id)}>Delete</button>
            <button onClick={() => selectEntry(entry)}>Update</button>
        </div>
    );
};

export default Entry;