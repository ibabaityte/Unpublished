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
import Button from "@material-ui/core/Button";

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

    const styles = EntryInputStyles();

    return (
        <Container>
            <h1 className={styles.title}>Update Entry</h1>
            <form onSubmit={e => handleSubmit(e, entry, entries, setEntries, selectedEntry, setSelectedEntry)}>

                <h2 className={styles.label}>Title</h2>
                <input
                    type="text"
                    value={selectedEntry.title}
                    // find how to merge className and name into one
                    className={`${styles.field} ${styles.titleField}`}
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

                <Button className={styles.btn} type="submit" value="Update" onClick={() => handleRedirect()}>Update</Button>
            </form>
        </Container>
    );
}


export default UpdateEntry;