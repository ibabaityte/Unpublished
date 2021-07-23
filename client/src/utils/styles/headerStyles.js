import {
    makeStyles
} from "@material-ui/core/styles";

const HeaderStyles = makeStyles({
    header: {
        margin: "40px",
        width: "100%"
    },
    logo: {
        textDecoration: "none",
        color: "white",
        fontSize: "3.5em",
        letterSpacing: "10px"
    },
    home: {
        textDecoration: "none",
        color: "white",
        fontSize: "2em",
        letterSpacing: "7px",
        verticalAlign: "middle",
        marginLeft: "30px",
        marginRight: "30px"
    },
    panel: {
        display: "inline",
    },
    username: {
        color: "white",
        fontSize: "2em",
        letterSpacing: "7px",
        textTransform: "none",
        padding: "0",
    },
    icon: {
        marginRight: "15px",
        fontSize: "1.2em"
    }
});

export {
    HeaderStyles
};