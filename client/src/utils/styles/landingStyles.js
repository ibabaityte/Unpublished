import {
    makeStyles
} from "@material-ui/core/styles";

const LandingStyles = makeStyles({
    img: {
        minHeight: "100%",
        minWidth: "1024px",
        width: "100%",
        height: "50%",
        filter: "blur(8px)",
        position: "fixed",
        top: 0,
        left: 0,
        opacity: "90%",
        zIndex: "-1"
    },
    btn: {
        width: "120px",
        height: "60px",
        margin: "30px",
        fontSize: "1.2rem",
        backgroundColor: "rgba(230, 230, 230, 0.5)",
        boxShadow: "rgba(0, 0, 0, 0.16) 0 10px 36px 0, rgba(0, 0, 0, 0.06) 0 0 0 1px",
        borderRadius: "8px",

    },
    landingLink: {
        textDecoration: "none"
    },
    container: {
        position: "absolute",
        top: "20%"
    },
    landingTextGrid: {
        position: "relative",
        textAlign: "center",
    },
    landingFormGrid: {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
    },
    landingH1: {
        textShadow: "5px -1px 4px rgb(110, 110, 110)",
        color: "white",
        fontSize: "6em",
        margin: "30px",
        letterSpacing: "8px"
    },
    landingH2: {
        fontSize: "2.5em",
        color: "rgb(240, 240, 240)",
        textShadow: "5px -1px 4px rgb(110, 110, 110)"
    },
    landingH3: {
        fontSize: "2.1em",
        color: "rgb(240, 240, 240)",
        textShadow: "5px -1px 4px rgb(110, 110, 110)"
    }
});

export {
    LandingStyles
};