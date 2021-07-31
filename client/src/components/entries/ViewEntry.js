import React from "react";
import {Link} from "react-router-dom";

// data formatting import
import moment from "moment";

// util imports
import {deleteEntry} from "../../utils/entries/entryListUtils";

const ViewEntry = (props) => {
    const {
        entries,
        setEntries,
        selectedEntry,
        setSelectedEntry} = props;

    return (
        <div className="viewEntry">
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

            <Link to="/entries/updateEntry">
                <button onClick={() => setSelectedEntry(selectedEntry)}>Update</button>
            </Link>

        </div>
    );
}

export default ViewEntry;