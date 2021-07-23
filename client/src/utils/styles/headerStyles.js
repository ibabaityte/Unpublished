import {
    makeStyles
} from "@material-ui/core/styles";

const HeaderStyles = makeStyles({
    header: {
        margin: "40px"
    },
    logo: {
        textDecoration: "none",
        color: "white",
        fontSize: "3em",
        // textTransform: "uppercase",
        letterSpacing: "8px"
    }
});

export {
    HeaderStyles
};