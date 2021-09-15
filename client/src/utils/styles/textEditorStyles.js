import {
    makeStyles
} from "@material-ui/core/styles";

const TextEditorStyles = makeStyles({
    toolbar: {
        width: "100%",
        height: "70px",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        position: "relative",
        marginTop: "10px"
    },
    button: {
        border: "none",
        backgroundColor: "transparent",
        fontSize: "1.5em",
        transform: "translate(30%, 30%)",
        marginRight: "20px",
        padding: "5px",
        width: "4%",
        "&:hover": {
            backgroundColor: "rgba(5, 5, 5, 0.1)",
            borderRadius: "5px"
        }
    }
});

export {
    TextEditorStyles
};