import React from "react";

// component imports
import TextEditor from "../textEditor/TextEditor";

// util imports
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
        selectedEntry,
        setSelectedEntry,
        newEntry,
        setNewEntry,
        status,
        setStatus,
    } = props;

    const styles = EntryInputStyles();

    return (
        <Container>
            <h1 className={styles.title}>Create Entry</h1>
            {
                status.statusText !== null ?
                    <div className={`${styles.statusText} ${'alert'} ${'alert-danger'}`} role="alert">
                        {status.statusText}
                    </div> :
                    null
            }
            <form onSubmit={e => handleSubmit(e, entry, setStatus)}>

                <h2 className={styles.label}>Title</h2>
                <input
                    type="text"
                    value={entry.title || ""}
                    className={`${styles.field} ${styles.titleField} ${'title'}`}
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