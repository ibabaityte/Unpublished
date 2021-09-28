import {
    makeStyles
} from "@material-ui/core/styles";

const SearchStyles = makeStyles((theme) => ({
    searchBar: {
        width: "100%",
        padding: "10px",
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
        flexDirection: "column",
        paddingRight: "20px"
    },
    formContainer: {
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
    },
    dateContainer: {
        width: "100%",
        maxHeight: "5%",
        margin: "30px 10px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        [theme.breakpoints.down('md')]: {
            flexDirection: "column",
            alignItems: "flex-start",
        }
    },
    divider: {
        textAlign: "center"
    },
    dateContainer1: {
        width: "30%",
        marginBottom: "0",
        [theme.breakpoints.down('md')]: {
            paddingTop: "20px",
            width: "50%"
        }
    },
    dateContainer2: {
        width: "10%",
        [theme.breakpoints.down('md')]: {
            paddingTop: "20px"
        }
    },
    dateContainer3: {
        width: "60%",
        [theme.breakpoints.down('md')]: {
            paddingTop: "20px",
            width: "100%"
        }
    },
    calender: {
        margin: "0 40px 0 0",
        width: "35%",
        "Mui-focused" : {
            backgroundColor: "red"
        },
        [theme.breakpoints.down('md')]: {
            width: "30%"
        }
    },
    filter: {
        minWidth: "100%",
    },
    root: {
        minWidth: '60%',
        display: "flex",
        flexDirection: "column",
        marginBottom: "30px",
        borderRadius: "20px",
        backgroundColor: "rgba(230, 230, 230, 0.55)"
    },
    expand: {
        transform: 'rotate(0deg)',
        margin: '0 auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        outline: "none !important"
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    },
    cardHeading: {
        margin: "15px auto"
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
        margin: "0 25px 25px 10px",
        [theme.breakpoints.down('sm')]: {
            margin: "20px 10px 0 10px"
        },
        "&:focus": {
            outline: "none"
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