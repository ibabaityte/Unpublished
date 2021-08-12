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
import Container from "@material-ui/core/Container";

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

    const styles = TitleInputStyles();

    return (
        <Container>
            <div className={styles.title}>Create Entry</div>
            <form onSubmit={e => handleSubmit(e, entry, entries, setEntries, selectedEntry, setSelectedEntry)}>

                <div className={styles.group}>
                    <input
                        type="text"
                        value={entry.title || ""}
                        // find how to merge className and name into one
                        className={styles.field}
                        name="title"
                        placeholder="Title"
                        onChange={e => handleChange(e, entry, selectedEntry, setSelectedEntry, newEntry, setNewEntry)}
                    />
                    <label className={styles.label}>Title</label>
                </div>

                <TextEditor
                    entry={entry}
                    selectedEntry={selectedEntry}
                    setSelectedEntry={setSelectedEntry}
                    newEntry={newEntry}
                    setNewEntry={setNewEntry}
                />

                <input type="submit" value="Create" onClick={() => handleRedirect()}/>
            </form>
        </Container>
    );
}

export default CreateEntry;