import React from "react";
import ContentEditable from "react-contenteditable";

// util imports
import {handleChange, handleContentEditableChange} from "../utils/users/userHandlers";

// icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faBold,
    faItalic,
    faList
} from '@fortawesome/free-solid-svg-icons';
import TextEditorToolButton from "./TextEditorToolButton";

const bold = <FontAwesomeIcon icon={faBold}/>;
const italic = <FontAwesomeIcon icon={faItalic}/>;
const list = <FontAwesomeIcon icon={faList}/>;

const TextEditor = (props) => {

    const {
        entry,
        selectedEntry,
        setSelectedEntry,
        newEntry,
        setNewEntry
    } = props;

    return (
        <div>
            <h3>actions</h3>
            <div className="toolbar">
                <TextEditorToolButton
                    command="bold"
                >
                    {bold}
                </TextEditorToolButton>
                <TextEditorToolButton
                    command="italic"
                >
                    {italic}
                </TextEditorToolButton>
                <TextEditorToolButton
                    command="insertUnorderedList"
                >
                    {list}
                </TextEditorToolButton>
            </div>

            <textarea
                value={entry.content}
                className="content"
                name="content"
                onChange={e => handleChange(e, entry, selectedEntry, setSelectedEntry, newEntry, setNewEntry)}
            />

            <ContentEditable
                className="content"
                tagName="pre"
                html={entry.content}
                disabled={false}
                onChange={e => handleContentEditableChange(e, entry, selectedEntry, setSelectedEntry, newEntry, setNewEntry)}
            />
        </div>
    )
}

export default TextEditor;