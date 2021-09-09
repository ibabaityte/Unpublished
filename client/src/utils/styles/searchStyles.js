import {
    makeStyles
} from "@material-ui/core/styles";

const SearchStyles = makeStyles((theme) => ({
    searchBar: {
        width: "100%",
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
        width: "50%",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            display: "flex",
            justifyContent: "center"
        }
    },
    dateContainer: {
        width: "100%"
    },
    calender: {
        margin: "40px 40px 40px 0"
    }
}));

const searchStyles= (theme) => ({
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
    container: {
        width: "90%",
        padding: "0"
    }
});

export {
    SearchStyles
};

export default searchStyles;