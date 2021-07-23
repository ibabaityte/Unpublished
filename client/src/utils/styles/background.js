import {
    makeStyles
} from "@material-ui/core/styles";

const Background = makeStyles({
    img: {
        backgroundColor: "rgba(3, 157, 193, 0.65)",
        minHeight: "100%",
        minWidth: "1024px",
        width: "100%",
        height: "50%",
        // filter: "blur(8px)",
        position: "fixed",
        top: 0,
        left: 0,
        opacity: "90%",
        zIndex: "-2"
    },
    // overlay: {
    //     backgroundColor: "rgba(0,0,0,0.5)",
    //     position: "fixed",
    //     // display: "none",
    //     width: "100%",
    //     height: "100%",
    //     top: "0",
    //     left: "0",
    //     right: "0",
    //     bottom: "0",
    //     zIndex: "-1",
    //     cursor: "pointer"
    // }
});

export {
    Background
};