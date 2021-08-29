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
        textAlign: "center"
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
        paddingRight: "30px"
    },
    panel: {
        display: "inline",
        textAlign: "right",
        [theme.breakpoints.up(768)]: {
            margin: "0 auto",
        }
    },
    username: {
        color: "white",
        fontSize: "2em",
        letterSpacing: "7px",
        textTransform: "none",
    },
    icon: {
        marginRight: "15px",
        fontSize: "1.2em"
    }
}));

export {
    HeaderStyles
};