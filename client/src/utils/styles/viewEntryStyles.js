import {
    makeStyles
} from "@material-ui/core/styles";
import styleConstants from "./constants";

const ViewEntryStyles = makeStyles({
    container: {
        width: "90%",
        padding: "0",
        marginTop: "40px",
        marginBottom: "40px"
    },
    dateContainer: {
        display: "flex",
        justifyContent: "space-between"
    },
    date: {
        margin: "0",
        textShadow: "0 0 3px currentColor"
    },
    deleteIcon: {
        verticalAlign: "middle",
        marginLeft: "10px",
        opacity: "60%",
        fontSize: "1em"
    },
    btn: {
        width: "90px",
        height: "45px",
        margin: "15px 15px 30px 0",
        fontSize: "1rem",
        backgroundColor: styleConstants.buttonColor,
        boxShadow: "rgba(0, 0, 0, 0.16) 0 10px 36px 0, rgba(0, 0, 0, 0.06) 0 0 0 1px",
        borderRadius: "8px",
    },
    link: {
        textDecoration: "none"
    },
    content: {
        fontWeight: "lighter",
    },
    contentOverlay: {
        fontSize: "1.7em",
        fontWeight: "bold",
        wordBreak: "break-all",
    }
});

export {
    ViewEntryStyles
};