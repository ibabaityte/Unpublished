import React, {useState, useEffect} from "react";

// util imports
import {handleModalToggle} from "../utils/modal/ModalUtils";
import {deleteProfile} from "../utils/users/userUtils";
import {deleteEntry} from "../utils/entries/entryUtils";

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
        userType,
        entry,
        setSelectedEntry
    } = props;

    const styles = ModalStyles();

    const [modalInfo, setModalInfo] = useState({
        modalAction: undefined,
        confirmText: "",
        questionText: ""
    });

    useEffect(() => {
        let modalInfoCopy = modalInfo;
        if (action === "deleteProfile") {
            modalInfoCopy = {
                modalAction: deleteProfile,
                questionText: "Are you sure you want to delete this profile?",
                confirmText: "Yes, delete this profile"
            };
            setModalInfo(modalInfoCopy);
        } else if (action === "deleteEntry") {
            modalInfoCopy = {
                modalAction: deleteEntry,
                questionText: "Are you sure you want to delete this entry?",
                confirmText: "Yes, delete this entry"
            };
            setModalInfo(modalInfoCopy);
        }
    }, []);

    return (
        <Modal
            open={openModal}
            onClose={() => handleModalToggle(setOpenModal, setSelectedEntry, entry)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className={`${styles.paper}`}>
                <Container className={styles.modalContainer}>
                    <h2 className={styles.modalText}>{modalInfo.questionText}</h2>
                    <div className={styles.modalButtons}>
                        <Button className={styles.modalButton}
                                onClick={e => modalInfo.modalAction(e, anchorRef, setOpenModal, userType, entry._id)}>{modalInfo.confirmText}</Button>
                        <Button className={styles.modalButton}
                                onClick={() => handleModalToggle(setOpenModal, setSelectedEntry, entry)}>Cancel</Button>
                    </div>
                </Container>
            </div>
        </Modal>
    );
}

export default ModalBox;