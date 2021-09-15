import {
    makeStyles
} from "@material-ui/core/styles";
import styleConstants from "./constants";

const UserFormStyles = makeStyles((theme)=> ({
    userForm: {
        position: "relative",
        minHeight: "415px",
        width: "500px",
        backgroundColor: styleConstants.buttonColor,
        border: "1px solid rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        boxShadow: "rgba(0, 0, 0, 0.16) 0 10px 36px 0, rgba(0, 0, 0, 0.06) 0 0 0 1px",
        textAlign: "center",
        [theme.breakpoints.down('md')]: {
            margin: "0 auto",
            marginTop: "20px"
        }
    },
    label: {
        textAlign: "center",
        marginTop: "65px",
        fontSize: "1.8em",
        color: "rgb(50, 50, 50)",
        fontWeight: "600",
    },
    input: {
        fontSize: "1.5em",
        width: "70%"
    },
    btn: {
        width: "25%",
        height: "45px",
        fontSize: "1.2rem",
        backgroundColor: styleConstants.buttonColor,
        boxShadow: "rgba(0, 0, 0, 0.16) 0 10px 36px 0, rgba(0, 0, 0, 0.06) 0 0 0 1px",
        borderRadius: "8px",
        "&:focus": {
            outline: "none"
        }
    },
    status: {
        marginTop: "30px",
        width: "80%",
        margin: "0 auto"
    }
}));

const userFormStyles = {
    btn: {
        margin: "75px 0 30px 0"
    },
    input: {
        marginTop: "25px"
    }
};

export {
    UserFormStyles
};

export default userFormStyles;