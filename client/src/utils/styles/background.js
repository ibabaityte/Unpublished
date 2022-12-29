import {
    makeStyles
} from "@material-ui/core/styles";

const Background = makeStyles({
    img: {
        backgroundColor: "rgba(3, 157, 193)",
        minHeight: "100%",
        minWidth: "1024px",
        width: "100%",
        height: "50%",
        position: "fixed",
        top: 0,
        left: 0,
        opacity: "90%",
        zIndex: "-2"
    },
});

export {
    Background
};