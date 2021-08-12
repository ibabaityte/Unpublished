import {
    makeStyles
} from "@material-ui/core/styles";

const TitleInputStyles = makeStyles({
    title: {
        fontSize: "2em",
        marginTop: "20px",
        marginBottom: "40px"
    },
    "group": {
        position: "relative",
        padding: "15px 0 0",
        marginTop: "10px",
        width: "50%"
    },
    "field": {
        fontFamily: "inherit",
        width: "100%",
        border: "0",
        borderBottom: "2px solid black",
        outline: "0",
        fontSize: "1.3rem",
        color: "black",
        padding: "7px 0",
        background: "transparent",
        transition: "border-color 0.2s",
        "&:focus": {
            paddingBottom: "6px",
            fontWeight: 700,
            borderWidth: "3px",
            borderImage: "linear-gradient(to right, #11998e, #38ef7d)",
            borderImageSlice: "1"
        },
        "&::placeholder": {
            color: "transparent"
        },
        "&:placeholder-shown ~ label": {
            fontSize: "1.5rem",
            cursor: "text",
            top: "20px"
        },
        "&:focus~ label": {
            position: "absolute",
            top: "0",
            display: "block",
            transition: "0.2s",
            fontSize: "1.1rem",
            color: "#11998e",
            fontWeight: 700
        },
        "&:required,&:invalid": {
            boxShadow: "none"
        }
    },
    "label": {
        fontWeight: 700,
        position: "absolute",
        top: "0",
        display: "block",
        transition: "0.2s",
        fontSize: "1.1rem",
        color: "black"
    }
});

export {
    TitleInputStyles
};

