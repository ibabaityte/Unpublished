import React from "react";
import ReactDOM from "react-dom";
import ContentEditable from "react-contenteditable";

const TextEditor = (props) => {

    const {entry, handleChange} = props;

    return (
        <div>
            {/*<div className="sample-toolbar">*/}
            {/*    <div><span className="fa fa-bold fa-fw"></span></div>*/}
            {/*    <div><span className="fa fa-italic fa-fw"></span></div>*/}
            {/*    <div><span className="fa fa-list fa-fw"></span></div>*/}
            {/*</div>*/}

            {/*<input*/}
            {/*    type="text"*/}
            {/*    value={entry.content}*/}
            {/*    name="content"*/}
            {/*    onChange={e => handleChange(e, entry)}*/}
            {/*/>*/}

            <ContentEditable
                // className="editable"
                tagName="content"
                html={entry.content} // innerHTML of the editable div
                // disabled={!this.state.editable} // use true to disable edition
                onChange={e => handleChange(e, entry)} // handle innerHTML change
                // onBlur={this.sanitize}
            />

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