import React from "react";
import TextEditor from "../TextEditor";

const UpdateEntry = (props) => {
    const {selectedEntry, handleChange, handleSubmit, handleRedirect } = props;

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
                {/*<input*/}
                {/*    type="text"*/}
                {/*    value={selectedEntry.content}*/}
                {/*    className="content"*/}
                {/*    name="content"*/}
                {/*    onChange={e => handleChange(e, selectedEntry)}*/}
                {/*    contentEditable="true"*/}
                {/*/>*/}
                <TextEditor
                    entry = {selectedEntry}
                    handleChange = {handleChange}
                />
                <input type="submit" onClick = {() => handleRedirect()}/>
            </form>
        </div>
    );
}


export default UpdateEntry;