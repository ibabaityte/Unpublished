import {
    makeStyles
} from "@material-ui/core/styles";

const HeaderStyles = makeStyles((theme) => ({
    header: {
        margin: "40px 80px 40px 80px",
        width: "100%"
    },
    logo: {
        textDecoration: "none",
        color: "white",
        fontSize: "3.5em",
        letterSpacing: "10px",
        width: "100%",
        textAlign: "center",
        textShadow: "0px 0px 20px black",
        transition: "text-shadow 0.5s",
        '&:hover': {
            textDecoration: "none",
            color: "white",
            textShadow: "0px 0px 0px transparent"
        }
    },
    logoPanel: {
        [theme.breakpoints.up('sm')]: {
            margin: "0 auto",
        },
    },
    home: {
        textDecoration: "none",
        color: "white",
        fontSize: "2em",
        letterSpacing: "7px",
        verticalAlign: "middle",
        paddingRight: "30px",
        textShadow: "0px 0px 20px black",
        transition: "text-shadow 0.5s",
        '&:hover': {
            textDecoration: "none",
            color: "white",
            textShadow: "0px 0px 0px transparent"
        }
    },
    panel: {
        display: "inline",
        textAlign: "right",
        [theme.breakpoints.up("sm")]: {
            margin: "0 auto",
        }
    },
    username: {
        color: "white",
        fontSize: "2em",
        letterSpacing: "7px",
        textTransform: "none",
        textShadow: "0px 0px 20px black",
        transition: "text-shadow 0.5s",
        '&:hover': {
            textDecoration: "none",
            color: "white",
            textShadow: "0px 0px 0px transparent"
        },
        "&:focus": {
            outline: "none"
        }
    },
    icon: {
        marginRight: "15px",
        fontSize: "1.2em"
    },
    paper: {
        position: 'absolute',
        width: "40%",
        height: "30%",
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    },
    modalContainer: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center"
    },
    modalText: {
        marginTop: "20px"
    },
    modalButtons: {
        width: "70%",
        margin: "50px auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    modalButton: {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        padding: "15px"
    }
}));

export {
    HeaderStyles
};