import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import {deleteEntry} from "../../utils/entryListUtils";

const Entry = (props) => {
    const { entry, entries, setEntries, selectedEntry } = props;

    return (
        <div>
            <div>{entry.title}</div>
            <div>{entry.content}</div>
            <div>Created at: {moment(entry.createdAt).format("L")}</div>
            <div>
                Last updated at: {
                moment(entry.updatedAt).format("L") +
                moment(entry.updatedAt).format(" LT")
            }
            </div>
            <Link to = "/viewEntry">
                <button onClick={() => selectedEntry(entry)}>View</button>
            </Link>
            <button onClick={() => deleteEntry(entry._id, entries, setEntries)}>Delete</button>
            <Link to = "/updateEntry">
                <button onClick={() => selectedEntry(entry)}>Update</button>
            </Link>
        </div>
    );
};

export default Entry;