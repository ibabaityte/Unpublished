import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBold } from '@fortawesome/free-solid-svg-icons'
import { faItalic } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
// import { faLink } from '@fortawesome/free-solid-svg-icons'

const bold = <FontAwesomeIcon icon={faBold} />
const italic = <FontAwesomeIcon icon={faItalic} />
const list = <FontAwesomeIcon icon={faList} />

const TextEditor = (props) => {

    const {entry, handleChange} = props;

    return (
        <div>

            <h3>actions</h3>
            <div className = "toolbar">
                <button onClick={format('bold', entry.content)}><span>{bold}</span></button>
                <button onClick={format('italic', entry.content)}><span>{italic}</span></button>
                <button onClick={format('insertunorderedlist', entry.content)}><span>{list}</span></button>
            </div>

            <input
                type="text"
                value={entry.content || ""}
                className="content"
                name="content"
                onChange={e => handleChange(e, entry)}
                contentEditable="true"
            />

        </div>
    )
}

function format(command, value) {
    document.execCommand(command, false, value);
}

export default TextEditor;