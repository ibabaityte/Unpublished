import React from "react";

const TextEditorToolButton = (props) => {
    const {
        command,
        argument
    } = props;

    return(
        <button key={command} onClick={e => {
            e.preventDefault();
            document.execCommand(command, false, argument);
        }}>
            {props.children}
        </button>
    );
};

export default TextEditorToolButton;