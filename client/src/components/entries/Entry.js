import React from "react";
import {Link} from "react-router-dom";
import moment from "moment";
import sanitize from "sanitize-html";
import {deleteEntry} from "../../utils/entryListUtils";

const Entry = (props) => {
    const {entry, entries, setEntries, setSelectedEntry, userType} = props;
    const sanitized = sanitize(entry.content);

    return (
        <div>
            <div>{entry.title}</div>
            <div>
                <span
                    dangerouslySetInnerHTML={{__html: sanitized}}
                />
            </div>
            <div>Created at: {moment(entry.createdAt).format("L")}</div>
            <div>
                Last updated at: {
                moment(entry.updatedAt).format("L") +
                moment(entry.updatedAt).format(" LT")
            }
            </div>
            <Link to="/entries/viewEntry">
                <button onClick={() => setSelectedEntry(entry)}>View</button>
            </Link>
            <button onClick={() => deleteEntry(userType, entry._id, entries, setEntries)}>Delete</button>
            <Link to="/entries/updateEntry">
                <button onClick={() => setSelectedEntry(entry)}>Update</button>
            </Link>
        </div>
    );
};

export default Entry;