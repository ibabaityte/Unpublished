import React from "react";

// component imports
import TextEditor from "../TextEditor";

// util imports
import {handleRedirect} from "../../utils/entries/redirectUtils";
import {
    handleChange,
    handleSubmit
} from "../../utils/entries/entryHandlers";

// style imports
import {TitleInputStyles} from "../../utils/styles/titleInputStyles";

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

    const styles = TitleInputStyles();

    return (
        <div>
            <div className={styles.title}>Update Entry</div>
            <form onSubmit={e => handleSubmit(e, entry, entries, setEntries, selectedEntry, setSelectedEntry)}>

                <div className={styles.group}>
                    <input
                        type="text"
                        value={selectedEntry.title}
                        // find how to merge className and name into one
                        className={styles.field}
                        name="title"
                        placeholder="Title"
                        onChange={e => handleChange(e, entry, selectedEntry, setSelectedEntry, newEntry, setNewEntry)}
                    />
                    <label className={styles.label}>Title</label>
                </div>

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