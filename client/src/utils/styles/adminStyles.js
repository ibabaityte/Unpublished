import {
    makeStyles
} from "@material-ui/core/styles";
import styleConstants from "./constants";

const AdminStyles = makeStyles((theme) => ({
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
        display: "flex",
        justifyContent: "space-evenly",
        width: "40%",
        [theme.breakpoints.up("lg")]: {
            width: "50%"
        },
        [theme.breakpoints.up("md")]: {
            width: "60%"
        },
        [theme.breakpoints.up("sm")]: {
            width: "78%"
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column"
        }
    },
    link: {
        textDecoration: "none",
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            justifyContent: "center",
        }
    },
    userListContainer: {
        margin: "0 auto",
        width: "90%",
        flexDirection: "column",
    },
    containerItem: {
        marginBottom: "40px",
        padding: "50px 0 50px 0",
        display: "flex",
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: "20px",
        [theme.breakpoints.down(1000)]: {
            padding: "30px 0 30px 0"
        }
    },
    wrapper: {
        width: "80%",
        display: "flex",
        flexDirection: "row",
        margin: "0 auto",
        [theme.breakpoints.down(1000)]: {
            flexDirection: "column"
        }
    },
    button: {
        backgroundColor: "rgba(163, 163, 163, 0.4)",
        [theme.breakpoints.down(1000)]: {
            margin: "20px auto"
        }
    },
    buttonDiv: {
        display: "flex",
        width: "30%",
        justifyContent: "flex-end",
        [theme.breakpoints.down(1000)]: {
            width: "100%"
        }
    },
    usernameDiv: {
        display: "flex",
        width: "70%",
        height: "50px",
        justifyContent: "flex-start",
        [theme.breakpoints.down(1000)]: {
            width: "100%",
            justifyContent: "center",
        }
    }
}));

const adminPanelStyles = {
    button: {
        margin: "0 10px 0px 10px"
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
