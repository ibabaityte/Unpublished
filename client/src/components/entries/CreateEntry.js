import React from "react";

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
                <input
                    type="text"
                    value={entry.content}
                    name="content"
                    onChange={e => handleChange(e, entry)}
                />
                <input type="submit" onClick = {() => handleRedirect()}/>
            </form>
        </div>
    );
}

export default CreateEntry;