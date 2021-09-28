import React from "react";

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
import Button from "@material-ui/core/Button";

const UpdateEntry = (props) => {
    const {
        entry,
        selectedEntry,
        setSelectedEntry,
        newEntry,
        setNewEntry,
        status,
        setStatus
    } = props;

    const styles = EntryInputStyles();

    return (
        <Container>
            <h1 className={styles.title}>Update Entry</h1>
            <form onSubmit={e => handleSubmit(e, entry, setStatus)}>
                {
                    status.statusText !== null ?
                        <div className={`${styles.statusText} ${'alert'} ${'alert-danger'}`} role="alert">
                            {status.statusText}
                        </div> :
                        null
                }

                <h2 className={styles.label}>Title</h2>
                <input
                    type="text"
                    value={selectedEntry.title}
                    className={`${styles.field} ${styles.titleField} ${'title'}`}
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

                <Button className={styles.btn} type="submit" value="Update">Update</Button>
            </form>
        </Container>
    );
}


export default UpdateEntry;