import {
    createEntry,
    updateEntry
} from "../entries/entryListUtils";

const handleChange = (e, entry, selectedEntry, setSelectedEntry, newEntry, setNewEntry) => {
    e.preventDefault();
    if (entry._id) {
        setSelectedEntry({
                ...selectedEntry,
                [e.target.className]: e.target.value
            }
        );
    } else {
        setNewEntry({
                ...newEntry,
                [e.target.className]: e.target.value
            }
        );
    }
}

const handleSubmit = (e, entry, entries, setEntries, selectedEntry, setSelectedEntry) => {
    e.preventDefault();
    if (entry._id) {
        updateEntry(entry._id, entry, entries, setEntries, selectedEntry, setSelectedEntry);
    } else {
        createEntry(entry, entries, setEntries);
        console.log(entry);
    }
}

export {
    handleChange,
    handleSubmit
};