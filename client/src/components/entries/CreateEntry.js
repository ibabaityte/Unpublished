import React from "react";
import TextEditor from "../TextEditor";

const CreateEntry = (props) => {
    const {entry, handleChange, handleSubmit, handleRedirect } = props;

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
                {/*<input*/}
                {/*    type="text"*/}
                {/*    value={entry.content || ""}*/}
                {/*    className="content"*/}
                {/*    name="content"*/}
                {/*    onChange={e => handleChange(e, entry)}*/}
                {/*    contentEditable="true"*/}
                {/*/>*/}
                <TextEditor
                    entry={entry}
                    handleChange={handleChange}
                />
                <input type="submit" onClick = {() => handleRedirect()}/>
            </form>
        </div>
    );
}

export default CreateEntry;