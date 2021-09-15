import {
    createEntry,
    updateEntry
} from "./entryUtils";

const handleEntry = (e, entry, selectedEntry, setSelectedEntry, newEntry, setNewEntry) => {
    if (entry._id) {
        setSelectedEntry({
                ...selectedEntry,
                [e.target.name]: e.target.value
            }
        );
    }
    else {
        setNewEntry({
                ...newEntry,
                [e.target.name]: e.target.value
            }
        );
    }
};

const handleEntryContent = (e, entry, selectedEntry, setSelectedEntry, newEntry, setNewEntry) => {
    if (entry._id) {
        setSelectedEntry({
                ...selectedEntry,
                content: e.target.value
            }
        );
    }
    else {
        setNewEntry({
                ...newEntry,
                content: e.target.value
            }
        );
    }
};

const handleChange = (e, entry, selectedEntry, setSelectedEntry, newEntry, setNewEntry) => {
    e.preventDefault();
    handleEntry(e, entry, selectedEntry, setSelectedEntry, newEntry, setNewEntry);
};

const handleContentEditableChange = (e, entry, selectedEntry, setSelectedEntry, newEntry, setNewEntry) => {
    handleEntryContent(e, entry, selectedEntry, setSelectedEntry, newEntry, setNewEntry);
};

const handleSubmit = (e, entry, setStatus) => {
    e.preventDefault();
    if (entry._id) {
        updateEntry(entry._id, entry, setStatus);
    }
    else {
        createEntry(entry, setStatus);
    }
};

export {
    handleChange,
    handleContentEditableChange,
    handleSubmit
};