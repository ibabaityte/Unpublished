import React, {useEffect} from "react";

// component imports
import TextEditor from "../TextEditor";

// util imports
import {
    handleChange,
    handleSubmit
} from "../../utils/entries/entries/entryHandlers";

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
        setNewEntry,
        status,
        setStatus
    } = props;

    const styles = EntryInputStyles();

    useEffect(() => {
        setStatus({});
        localStorage.removeItem('StatusCode');
        localStorage.removeItem('StatusText');
    }, []);

    return (
        <Container>
            <h1 className={styles.title}>Create Entry</h1>
            <h2>{status.statusText}</h2>
            <form onSubmit={e => handleSubmit(e, entry, entries, setEntries, selectedEntry, setSelectedEntry, setStatus)}>

                <h2 className={styles.label}>Title</h2>
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

                <Button className={styles.btn} type="submit" value="Create">Create</Button>
            </form>
        </Container>
    );
}

export default CreateEntry;