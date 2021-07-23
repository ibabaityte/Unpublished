import {
    makeStyles
} from "@material-ui/core/styles";

const UserFormStyles = makeStyles({
    userForm: {
        position: "relative",
        height: "415px",
        width: "500px",
        backgroundColor: "rgba(230, 230, 230, 0.5)",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        boxShadow: "rgba(0, 0, 0, 0.16) 0 10px 36px 0, rgba(0, 0, 0, 0.06) 0 0 0 1px",
        textAlign: "center",
    },
    label: {
        textAlign: "center",
        marginTop: "65px",
        fontSize: "1.8em",
        color: "rgb(50, 50, 50)",
        fontWeight: "600",
    },
    input: {
        marginTop: "25px",
        fontSize: "1.5em",
        width: "270px"
    },
    btn: {
        width: "110px",
        height: "45px",
        marginTop: "75px",
        fontSize: "1.2rem",
        backgroundColor: "rgba(230, 230, 230, 0.5)",
        boxShadow: "rgba(0, 0, 0, 0.16) 0 10px 36px 0, rgba(0, 0, 0, 0.06) 0 0 0 1px",
        borderRadius: "8px"
    }
});

export {
    UserFormStyles
};