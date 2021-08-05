import {
    makeStyles
} from "@material-ui/core/styles";

const EntryListStyles = makeStyles({
    entryList: {
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        minHeight: "600px",
        marginTop: "20px",
        marginBottom: "40px"
    },
    title: {
        fontSize: "2em",
        textShadow: "0px 0px 0.5px black"
    },
    content: {
        marginTop: "20px",
        fontSize: "1.3em"
    },
    deleteIcon: {
        verticalAlign: "middle",
        marginLeft: "10px",
        opacity: "60%",
        fontSize: "1em"
    },
    link: {
        textDecoration: "none",
    }
});

const entryListStyles = {
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
        backgroundColor: "rgba(153, 153, 153, 0.3)"
    },
    createButton: {
        marginBottom: "40px",
        marginLeft: "0",
        fontSize: "1.2em",
        textShadow: "0px 0px 0.5px black"
    },
    createButtonContainer: {
        width: "90%",
        padding: "0"
    }
};

export {
    EntryListStyles
};

export default entryListStyles;