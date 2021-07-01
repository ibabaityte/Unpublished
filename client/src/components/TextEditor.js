import React from "react";
// import ContentEditable from "react-contenteditable";

const TextEditor = () => {

    // const {entry, handleChange, sanitize} = props;
    console.log(entry.content);

    return (
        <div>
            {/*<ContentEditable*/}
            {/*    className="content"*/}
            {/*    html={entry.content} // innerHTML of the editable div*/}
            {/*    onKeyPress={e => handleChange(e, entry)} // handle innerHTML change*/}
            {/*    onBlur={sanitize}*/}
            {/*/>*/}

            <h3>actions</h3>
            <EditButton cmd="italic" />
            <EditButton cmd="bold" />
            <EditButton cmd="formatBlock" arg="h1" name="heading" />
            <EditButton
                cmd="createLink"
                arg="https://github.com/lovasoa/react-contenteditable"
                name="hyperlink"
            />
        </div>
    )
}

function EditButton(props) {
    return (
        <button
            key={props.cmd}
            onMouseDown={evt => {
                evt.preventDefault(); // Avoids loosing focus from the editable area
                document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
            }}
        >
            {props.name || props.cmd}
        </button>
    );
}

export default TextEditor;