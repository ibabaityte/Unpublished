import React from "react";

// util imports
import {handleModalToggle} from "../utils/modal/ModalUtils";

// style imports
import {ModalStyles} from "../utils/styles/ModalStyles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";

const ModalBox = (props) => {

    const {
        anchorRef,
        openModal,
        setOpenModal,
        action,
        actionText,
        confirmActionText,
        userType,
        entry,
        setSelectedEntry
    } = props;

    const styles = ModalStyles();

    return (
        <Modal
            open={openModal}
            onClose={() => handleModalToggle(setOpenModal, setSelectedEntry, entry)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className={`${styles.paper}`}>
                <Container className={styles.modalContainer}>
                    <h2 className={styles.modalText}>{actionText}</h2>
                    <div className={styles.modalButtons}>
                        <Button className={styles.modalButton}
                                onClick={e => action(e, anchorRef, setOpenModal, userType, entry._id)}>{confirmActionText}</Button>
                        <Button className={styles.modalButton}
                                onClick={() => handleModalToggle(setOpenModal, setSelectedEntry, entry)}>Cancel</Button>
                    </div>
                </Container>
            </div>
        </Modal>
    );
}

export default ModalBox;
