import {
    makeStyles
} from "@material-ui/core/styles";
import styleConstants from "./constants";

const LandingStyles = makeStyles((theme) => ({
    img: {
        minHeight: "100%",
        minWidth: "1024px",
        width: "100%",
        height: "50%",
        filter: "blur(8px)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: "-1"
    },
    imgOverlay: {
        backgroundColor: 'black',
        minHeight: "100%",
        minWidth: "1024px",
        width: "100%",
        height: "50%",
        position: "fixed",
        top: 0,
        left: 0,
        opacity: "30%",
        zIndex: "-1"
    },
    btn: {
        width: "120px",
        height: "60px",
        margin: "30px",
        fontSize: "1.2rem",
        backgroundColor: styleConstants.buttonColor,
        boxShadow: "rgba(0, 0, 0, 0.16) 0 10px 36px 0, rgba(0, 0, 0, 0.06) 0 0 0 1px",
        borderRadius: "8px",
        [theme.breakpoints.down('md')]: {
            marginTop: "0"
        },
        "&:focus": {
            outline: "none"
        }
    },
    landingLink: {
        textDecoration: "none",
        '&:hover': {
            textDecoration: "none"
        }
    },
    container: {
        position: "absolute",
        top: "200px",
        [theme.breakpoints.down('md')]: {
            top: "20px",
        }
    },
    landingTextGrid: {
        position: "relative",
        textAlign: "center",
    },
    landingH1: {
        color: "white",
        fontSize: "6em",
        margin: "30px",
        letterSpacing: "8px"
    },
    landingH2: {
        fontSize: "2.5em",
        color: "rgb(240, 240, 240)",
        marginBottom: "30px"
    },
    landingH3: {
        fontSize: "2.1em",
        color: "rgb(240, 240, 240)",
        marginBottom: "50px"
    }
}));

export {
    LandingStyles
};