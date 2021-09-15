import {
    makeStyles
} from "@material-ui/core/styles";
import styleConstants from "./constants";

const EntryListStyles = makeStyles((theme) => ({
    entryList: {
        backgroundColor: styleConstants.backgroundColor,
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        minHeight: "600px",
        marginTop: "20px",
        marginBottom: "40px"
    },
    title: {
        margin: "0",
        textShadow: "1px 1px 2px currentColor",
    },
    contentOverlay: {
        position: "absolute",
        zIndex: "2",
        marginTop: "10px",
        width: "100%",
        maxHeight: "100px",
        height: "100%",
        background: "linear-gradient(rgba(0,0,0,0), #c4dce2)"
    },
    content: {
        position: "relative",
        zIndex: "1",
        marginTop: "20px",
        width: "100%",
        maxHeight: "100px",
        fontSize: "1.3em",
        fontWeight: "300",
        overflow: "hidden",
        lineHeight: "2rem",
        wordBreak: "break-all",
    },
    contentSpan: {
        display: "inline",
        width: "10px",
        // overflow: "hidden",
        // inlineSize: "minContent",
        // wordBreak: "break-all"
    },
    deleteIcon: {
        verticalAlign: "middle",
        marginLeft: "10px",
        opacity: "60%",
        fontSize: "1em",
        "&:hover": {
            color: "red"
        }
    },
    link: {
        textDecoration: "none",
        margin: "30px auto",
        '&:hover': {
            textDecoration: "none"
        }
    },
    addIcon: {
        padding: "5px",
        fontSize: "1.5em"
    },
    searchBar: {
        width: "50%",
        padding: "10px",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: "5px",
        "& .MuiFormLabel-root": {
            margin: "10px"
        },
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        }
    },
    form: {
        display: "flex",
        flexDirection: "column"
    },
    formContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        minHeight: "100px",
        marginBottom: "20px",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column"
        }
    },
    searchButtonContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            display: "flex",
            justifyContent: "center"
        }
    },
    dateContainer: {
        width: "100%"
    },
    "@keyframes fadeIn": {
        "80%": {
            opacity: 1,
        },
        "100%": {
            opacity: 0,
        }
    },
    statusText: {
        marginBottom: "20px",
        fontSize: "1.1em",
        fontWeight: "bold",
        width: "100%",
        margin: "auto",
        textAlign: "center",
        animation: "$fadeIn 8s linear"
    }
}));

const entryListStyles = (theme) => ({
    entry: {
        marginBottom: "40px",
        width: "90%",
        paddingBottom: "20px",
        paddingTop: "20px",
        backgroundColor: "#c4dce2",
        borderRadius: "20px",
        boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"
    },
    entryList: {
        maxWidth: "70%"
    },
    button: {
        margin: "20px 10px 0px 10px",
        backgroundColor: "rgba(163, 163, 163, 0.4)"
    },
    searchButton: {
        padding: "10px",
        backgroundColor: "rgba(163, 163, 163, 0.4)",
        fontSize: "1.1em",
        marginLeft: "20px",
        [theme.breakpoints.down('sm')]: {
            margin: "20px 10px 0 10px"
        }
    },
    createButton: {
        fontSize: "1.5em",
        textShadow: "0px 0px 0.5px black",
        backgroundColor: styleConstants.buttonColor,
        padding: "10px 15px 10px 10px",
        boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        borderRadius: "12px"
    },
    container: {
        width: "90%",
        padding: "0",
        display: "flex",
        flexDirection: "column"
    }
});

export {
    EntryListStyles
};

export default entryListStyles;