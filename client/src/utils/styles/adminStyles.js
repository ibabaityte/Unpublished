import {
    makeStyles
} from "@material-ui/core/styles";
import styleConstants from "./constants";

const AdminStyles = makeStyles({
    container: {
        backgroundColor: styleConstants.backgroundColor,
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        minHeight: "600px",
        marginTop: "20px",
        marginBottom: "40px",
        maxWidth: "70%"
    },
    title: {
        margin: "0 auto",
        padding: "30px"
    },
    buttonContainer: {
        margin: "0 auto",
        width: "auto",
    },
    link: {
        textDecoration: "none"
    },
    userListContainer: {
        margin: "0 auto",
        width: "100%",
        flexDirection: "column",
    },
    containerItem: {
        marginBottom: "40px",
        padding: "50px 0 50px 0",
        display: "flex",
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: "20px"
    },
    button: {
        backgroundColor: "rgba(163, 163, 163, 0.4)"
    },
    buttonDiv: {
        display: "flex",
        width: "15%",
        paddingLeft: "0",
    },
    username: {
        display: "flex",
        justifyContent: "flex-start",
        margin: "0",
        width: "85%",
        paddingLeft: "70px"
    }
});

const adminPanelStyles = {
    button: {
        margin: "0 10px 0px 10px",
    },
    panelButton: {
        margin: "20px 20px 40px 20px",
        fontSize: "1.2em",
        textShadow: "0px 0px 0.5px black",
        backgroundColor: styleConstants.buttonColor,
        padding: "10px"
    },
};

export {
    AdminStyles
};

export default adminPanelStyles;
