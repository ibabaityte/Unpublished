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
    }
}));

export {
    HeaderStyles
};