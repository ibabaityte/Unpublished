import {
    makeStyles
} from "@material-ui/core/styles";
import styleConstants from "./constants";

const ViewEntryStyles = makeStyles({
    container: {
        padding: "50px"
    },
    title: {
        fontSize: "2em",
        textShadow: "0px 0px 0.8px black"
    },
    date: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "1.1em"
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
        fontSize: "1.3em"
    }
});

export {
    ViewEntryStyles
};