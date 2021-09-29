import {
    makeStyles
} from "@material-ui/core/styles";

const ListStatusStyles = makeStyles( {
    "@keyframes fadeIn": {
        "80%": {
            opacity: 1,
        },
        "100%": {
            opacity: 0,
        }
    },
    successStatusText: {
        animation: "$fadeIn 8s linear"
    },
    statusText: {
        marginBottom: "20px",
        fontSize: "1.1em",
        fontWeight: "bold",
        width: "100%",
        margin: "auto",
        textAlign: "center",
    }
});

export {
    ListStatusStyles
};