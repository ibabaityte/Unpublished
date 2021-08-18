import React from "react";
import ContentEditable from "react-contenteditable";
import sanitize from "sanitize-html";

// util imports
import {handleContentEditableChange} from "../utils/entries/entryHandlers";

// icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faBold,
    faItalic,
    faList
} from '@fortawesome/free-solid-svg-icons';
import TextEditorToolButton from "./TextEditorToolButton";

// style imports
import {TextEditorStyles} from "../utils/styles/textEditorStyles";
import {EntryInputStyles} from "../utils/styles/entryInputStyles";

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

    const styles1 = TextEditorStyles();
    const styles2 = EntryInputStyles();

    let content;
    if (entry.content === undefined) {
        content = "";
    } else {
        content = entry.content;
    }

    return (
        <div>
            <span className={styles2.label}>Content</span>
            <div className={styles2.editor}>
                <div className={styles1.toolbar}>
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
                <ContentEditable
                    className={`${styles2.field} ${styles2.contentField}`}
                    label="content"
                    // tagName="pre"
                    html={content}
                    disabled={false}
                    onChange={e => handleContentEditableChange(e, entry, selectedEntry, setSelectedEntry, newEntry, setNewEntry)}
                    dangerouslySetInnerHTML={{__html: sanitize(entry.content)}}
                />
            </div>

        </div>
    )
}

export default TextEditor;