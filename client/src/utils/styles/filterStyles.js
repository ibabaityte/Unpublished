import {
    makeStyles
} from "@material-ui/core/styles";

const FilterStyles = makeStyles((theme) => ({
    container: {
        width: "90%",
        padding: "0"
    },
    orderByContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        margin: "30px 0 10px 0",
        [theme.breakpoints.down('md')]: {
            flexDirection: "column",
            alignItems: "center"
        }
    },
    orderByButtonContainer: {
        width: "90%",
        display: "flex",
        [theme.breakpoints.down('lg')]: {
            width: "85%"
        },
        [theme.breakpoints.down('md')]: {
            alignItems: "center",
            justifyContent: "center"
        }
    },
    orderByLabel: {
        width: "10%",
        [theme.breakpoints.down('lg')]: {
            width: "15%"
        },
        [theme.breakpoints.down('md')]: {
            width: "100%",
            textAlign: "center"
        }
    },
    orderByButton: {
        width: "auto",
        padding: "5px 20px 5px 20px",
        [theme.breakpoints.down('md')]: {
            width: "50%",
        },
        "&:focus": {
            outline: "none",
        }
    },
    activeButton: {
        backgroundColor: "rgba(0, 0, 0, 0.1)"
    }
}));

export {
    FilterStyles
};