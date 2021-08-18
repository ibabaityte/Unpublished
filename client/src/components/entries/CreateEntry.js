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
import {EntryInputStyles} from "../../utils/styles/entryInputStyles";
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';

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

    const styles = EntryInputStyles();

    return (
        <Container>
            <div className={styles.title}>Create Entry</div>
            <form onSubmit={e => handleSubmit(e, entry, entries, setEntries, selectedEntry, setSelectedEntry)}>

                <span className={styles.label}>Title</span>
                <br/>
                <input
                    type="text"
                    value={entry.title || ""}
                    // find how to merge className and name into one
                    className={`${styles.field} ${styles.titleField}`}
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

                <Button className={styles.btn} type="submit" value="Create" onClick={() => handleRedirect()}>Create</Button>
            </form>
        </Container>
    );
}

export default CreateEntry;