import React from "react";

// component imports
import TextEditor from "../TextEditor";

// util imports
import {handleRedirect} from "../../utils/entries/redirectUtils";
import {
    handleChange,
    handleSubmit
} from "../../utils/entries/entryHandlers";

const CreateEntry = (props) => {
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
            <div>Create Entry</div>
            <form onSubmit={e => handleSubmit(e, entry, entries, setEntries, selectedEntry, setSelectedEntry)}>

                <input
                    type="text"
                    value={entry.title || ""}
                    className="title"
                    name="title"
                    onChange={e => handleChange(e, entry, selectedEntry, setSelectedEntry, newEntry, setNewEntry)}
                />

                <TextEditor
                    entry={entry}
                    selectedEntry={selectedEntry}
                    setSelectedEntry={setSelectedEntry}
                    newEntry={newEntry}
                    setNewEntry={setNewEntry}
                />

                <input type="submit" value="Create" onClick={() => handleRedirect()}/>
            </form>
        </div>
    );
}

export default CreateEntry;