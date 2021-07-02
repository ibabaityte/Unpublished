import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBold,
    faItalic,
    faList
} from '@fortawesome/free-solid-svg-icons';

const bold = <FontAwesomeIcon icon={faBold} />;
const italic = <FontAwesomeIcon icon={faItalic} />;
const list = <FontAwesomeIcon icon={faList} />;

const TextEditor = (props) => {

    const {entry, handleChange, setSelectedEntry} = props;

    const format = (command) => {
        let selection = window.getSelection().toString();
        let fullContent = entry.content;
        let entryCopy = entry;
        let modifiedSelection = '';

        if(command === 'bold') {
            modifiedSelection = '<b>' + selection + '</b>';
        }
        else if(command === 'italic') {

        }
        else if(command === 'unorderedList') {

        }

        entryCopy.content = fullContent.replace(selection, modifiedSelection);
        setSelectedEntry(entryCopy);
    }

    return (
        <div>

            <h3>actions</h3>
            <div className = "toolbar">
                <button onClick={() => format('bold', entry.content)}><span>{bold}</span></button>
                <button type="button" onClick={() => format('italic', entry.content)}><span>{italic}</span></button>
                <button type="button" onClick={() => format('unorderedList', entry.content)}><span>{list}</span></button>
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