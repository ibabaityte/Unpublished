import React from "react";

const UpdateEntry = (props) => {
    const {entry, handleChange, handleSubmit, handleRedirect } = props;

    return (
        <div>
            <div>Update Entry</div>
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

export default UpdateEntry;