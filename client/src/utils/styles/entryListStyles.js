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
        margin: "0"
    },
    contentOverlay: {
        position: "absolute",
        zIndex: "2",
        marginTop: "10px",
        width: "100%",
        maxHeight: "100px",
        height: "100%",
        background: "linear-gradient(rgba(0,0,0,0), #81CEE0)"
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
        wordBreak: "break-all",
        lineHeight: "2rem"
    },
    deleteIcon: {
        verticalAlign: "middle",
        marginLeft: "10px",
        opacity: "60%",
        fontSize: "1em"
    },
    link: {
        textDecoration: "none",
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
        alignItems: "center",
        flexDirection: "row",
        minHeight: "100px",
        marginBottom: "20px",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column"
        }
    },
    searchButtonContainer: {
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            display: "flex",
            justifyContent: "center"
        }
    }
}));

const entryListStyles = (theme) => ({
    entry: {
        marginBottom: "40px",
        width: "90%",
        paddingBottom: "20px",
        paddingTop: "20px",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: "20px"
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
        marginBottom: "40px",
        marginLeft: "0",
        fontSize: "1.5em",
        textShadow: "0px 0px 0.5px black",
        backgroundColor: styleConstants.buttonColor,
        padding: "10px"
    },
    container: {
        width: "90%",
        padding: "0"
    }
});

export {
    EntryListStyles
};

export default entryListStyles;