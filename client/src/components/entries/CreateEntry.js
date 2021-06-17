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
                    value={entry.title}
                    name="title"
                    onChange={e => handleChange(e, entry)}
                />
                {/*<input*/}
                {/*    type="text"*/}
                {/*    value={entry.content}*/}
                {/*    name="content"*/}
                {/*    onChange={e => handleChange(e, entry)}*/}
                {/*/>*/}
                <TextEditor
                    entry = {props.entry}
                    handleChange = {props.handleChange}
                />
                <input type="submit" onClick = {() => handleRedirect()}/>
            </form>
        </div>
    );
}

export default CreateEntry;