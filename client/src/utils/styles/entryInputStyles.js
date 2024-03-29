import {
    makeStyles
} from "@material-ui/core/styles";
import styleConstants from "./constants";

const EntryInputStyles = makeStyles({
    field: {
        top: "0",
        left: "0",
        marginBottom: "40px",
        marginTop: "10px",
        background: "none",
        fontSize: "1.2em",
        outline: "none",
        padding: "16px",
        borderBottom: "3px solid black",
        border: "none",
        transition: ".2s",
        borderRadius: "5px",
        "&:focus": {
            borderBottom: "5px solid #0f7ef1",
        }
    },
    title: {
        marginBottom: "40px",
        marginTop: "30px",
        fontWeight: "bold"
    },
    contentField: {
        minHeight: "25vh",
        height: "auto",
    },
    titleField: {
        width: "70%",
        backgroundColor: styleConstants.backgroundColor
    },
    label: {
        margin: "0"
    },
    editor: {
        backgroundColor: styleConstants.backgroundColor
    },
    btn: {
        width: "120px",
        height: "60px",
        margin: "10px 30px 30px 0",
        fontSize: "1.2rem",
        backgroundColor: styleConstants.buttonColor,
        boxShadow: "rgba(0, 0, 0, 0.16) 0 10px 36px 0, rgba(0, 0, 0, 0.06) 0 0 0 1px",
        borderRadius: "8px",
    },
    statusText: {
        marginBottom: "20px",
        fontSize: "1.1em",
        fontWeight: "bold",
        width: "100%",
        margin: "auto",
        textAlign: "center"
    }
});

export {
    EntryInputStyles
};

