import React from "react";
import {formatText} from "../utils/textEditorUtils";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faBold,
    faItalic,
    faList
} from '@fortawesome/free-solid-svg-icons';

const bold = <FontAwesomeIcon icon={faBold}/>;
const italic = <FontAwesomeIcon icon={faItalic}/>;
const list = <FontAwesomeIcon icon={faList}/>;


const TextEditor = (props) => {

    const {selectedEntry, entry, handleChange, setSelectedEntry} = props;


    return (
        <div>

            <h3>actions</h3>
            <div className="toolbar">
                <button onClick={(e) => formatText(e, 'bold', entry, setSelectedEntry, selectedEntry)}>{bold}</button>
                <button onClick={(e) => formatText(e, 'italic', entry, setSelectedEntry, selectedEntry)}>{italic}</button>
                <button onClick={(e) => formatText(e, 'unorderedList', entry, setSelectedEntry, selectedEntry)}>{list}</button>
            </div>

            <textarea
                value={entry.content}
                className="content"
                name="content"
                onChange={e => handleChange(e, entry)}
            />

        </div>
    )
}

export default TextEditor;