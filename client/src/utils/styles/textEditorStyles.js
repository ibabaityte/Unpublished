import {
    makeStyles
} from "@material-ui/core/styles";

const TextEditorStyles = makeStyles({
    toolbar: {
        width: "100%",
        height: "50px",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        position: "relative",
        marginTop: "10px"
    },
    button: {
        border: "none",
        backgroundColor: "transparent",
        fontSize: "1.5em",
        transform: "translate(50%, 50%)",
        marginRight: "20px"
    }
});

export {
    TextEditorStyles
};