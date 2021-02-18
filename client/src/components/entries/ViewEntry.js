import React from "react";
import {Link} from "react-router-dom";

const Header = (props) => {
    const { selectedEntry, deleteEntry } = props;

    return (
        <div className = "header">
            <div>{selectedEntry.title}</div>
            <div>{selectedEntry.content}</div>
            <button onClick={() => deleteEntry(selectedEntry._id)}>Delete</button>
            <Link to = "/updateEntry">
                <button onClick={() => selectedEntry(selectedEntry)}>Update</button>
            </Link>
        </div>
    );
}

export default Header;