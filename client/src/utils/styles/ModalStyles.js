import {
makeStyles
} from "@material-ui/core/styles";

const ModalStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: "40%",
        height: "30%",
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    },
    modalContainer: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center"
    },
    modalText: {
        marginTop: "20px"
    },
    modalButtons: {
        width: "70%",
        margin: "50px auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    modalButton: {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        padding: "15px"
    }
}));

export {
    ModalStyles
};