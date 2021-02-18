import React from "react";
import { Link } from "react-router-dom";

const Entry = (props) => {
    const {entry, selectedEntry, deleteEntry} = props;

    return (
        <div>
            <div>{entry.title}</div>
            <div>{entry.content}</div>
            <button onClick={() => deleteEntry(entry._id)}>Delete</button>
            <Link to = "/updateEntry">
                <button onClick={() => selectedEntry(entry)}>Update</button>
            </Link>
        </div>
    );
};

export default Entry;