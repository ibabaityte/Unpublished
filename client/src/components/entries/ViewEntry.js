import React from "react";
import {Link} from "react-router-dom";
import moment from "moment";

import {deleteEntry} from "../../utils/entryListUtils";

const Header = (props) => {
    const { selectedEntry, entries, setEntries, selectEntry } = props;

    return (
        <div className = "header">
            <div>{selectedEntry.title}</div>
            <div>{selectedEntry.content}</div>
            <div>
                Created at: {moment(selectedEntry.createdAt).format("L")}
            </div>
            <div>
                Last updated at: {
                moment(selectedEntry.updatedAt).format("L") +
                moment(selectedEntry.updatedAt).format(" LT")
            }
            </div>
            <button onClick={() => deleteEntry(selectedEntry._id, entries, setEntries)}>Delete</button>
            <Link to = "/updateEntry">
                <button onClick={() => selectEntry(selectedEntry)}>Update</button>
            </Link>
        </div>
    );
}

export default Header;