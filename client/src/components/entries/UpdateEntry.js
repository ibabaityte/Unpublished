import React from "react";
import TextEditor from "../TextEditor";

const UpdateEntry = (props) => {
    const {selectedEntry, handleChange, handleSubmit, handleRedirect, setSelectedEntry } = props;

    return (
        <div>
            <div>Update Entry</div>
            <form onSubmit={e => handleSubmit(e, selectedEntry)}>
                <input
                    type="text"
                    value={selectedEntry.title}
                    className="title"
                    name="title"
                    onChange={e => handleChange(e, selectedEntry)}
                />
                <TextEditor
                    entry = {selectedEntry}
                    handleChange = {handleChange}
                    setSelectedEntry={setSelectedEntry}
                />
                <input type="submit" value="Update" onClick = {() => handleRedirect()}/>
            </form>
        </div>
    );
}


export default UpdateEntry;