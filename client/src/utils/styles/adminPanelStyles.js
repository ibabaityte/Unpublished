import {
    makeStyles
} from "@material-ui/core/styles";
import styleConstants from "./constants";

const AdminPanelStyles = makeStyles({
    container: {
        backgroundColor: styleConstants.backgroundColor,
        borderRadius: "20px",
        display: "flex",
        minHeight: "600px",
        marginTop: "20px",
        marginBottom: "40px"
    },
    title: {

    }
});

export {
    AdminPanelStyles
};
