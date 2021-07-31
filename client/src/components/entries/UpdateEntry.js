import React from "react";

// component imports
import TextEditor from "../TextEditor";

// util imports
import {handleRedirect} from "../../utils/entries/initUtils";
import {
    handleChange,
    handleSubmit
} from "../../utils/users/userHandlers";

const UpdateEntry = (props) => {
    const {
        entry,
        entries,
        setEntries,
        selectedEntry,
        setSelectedEntry,
        newEntry,
        setNewEntry
    } = props;

    return (
        <div>
            <div>Update Entry</div>
            <form onSubmit={e => handleSubmit(e, entry, entries, setEntries, selectedEntry, setSelectedEntry)}>

                <input
                    type="text"
                    value={selectedEntry.title}
                    className="title"
                    name="title"
                    onChange={e => handleChange(e, entry, selectedEntry, setSelectedEntry, newEntry, setNewEntry)}
                />

                <TextEditor
                    entry={selectedEntry}
                    selectedEntry={selectedEntry}
                    setSelectedEntry={setSelectedEntry}
                    newEntry={newEntry}
                    setNewEntry={setNewEntry}
                />

                <input type="submit" value="Update" onClick={() => handleRedirect()}/>
            </form>
        </div>
    );
}


export default UpdateEntry;