import React from "react";
import {TextEditorStyles} from "../utils/styles/textEditorStyles";

const TextEditorToolButton = (props) => {
    const {
        command,
        argument
    } = props;

    const styles = TextEditorStyles();


    return(
        <button
            key={command}
            className={styles.button}
            onClick={e => {
            e.preventDefault();
            document.execCommand(command, false, argument);
        }}>
            {props.children}
        </button>
    );
};

export default TextEditorToolButton;