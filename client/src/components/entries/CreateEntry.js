import React from "react";
import TextEditor from "../TextEditor";

const CreateEntry = (props) => {
    const {entry, handleChange, handleSubmit, handleRedirect, setSelectedEntry } = props;

    return (
        <div>
            <div>Create Entry</div>
            <form onSubmit={e => handleSubmit(e, entry)}>
                <input
                    type="text"
                    value={entry.title || ""}
                    className="title"
                    name="title"
                    onChange={e => handleChange(e, entry)}
                />
                <TextEditor
                    entry={entry}
                    handleChange={handleChange}
                    setSelectedEntry={setSelectedEntry}
                />
                <input type="submit" value="Create" onClick = {() => handleRedirect()}/>
            </form>
        </div>
    );
}

export default CreateEntry;