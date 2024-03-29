import React from "react";
import {Link} from "react-router-dom";
import sanitize from "sanitize-html";
import moment from "moment";

// util imports
import {deleteEntry} from "../../utils/entries/entryUtils";
import {handleModalToggle} from "../../utils/modal/ModalUtils";

// style imports
import {withStyles} from '@material-ui/core/styles';
import {EntryListStyles} from "../../utils/styles/entryListStyles";
import entryListStyles from "../../utils/styles/entryListStyles";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

// icon imports
import DeleteIcon from '@material-ui/icons/Delete';

// component imports
import Modal from "../ModalBox";


const Entry = (props) => {
    const {
        entry,
        selectedEntry,
        setSelectedEntry,
        userType,
        openModal,
        setOpenModal
    } = props;

    const styles = EntryListStyles();
    const classes = props.classes;

    return (
        <Container className={classes.entry} >
            <h1 className={styles.title}>
                {entry.title}
                <DeleteIcon
                    className={styles.deleteIcon}
                    onClick={() => handleModalToggle(setOpenModal, setSelectedEntry, entry)}
                />
            </h1>

            {
                openModal ?
                    <Modal
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                        action={deleteEntry}
                        actionText="Are you sure you want to delete this entry?"
                        confirmActionText="Yes, delete entry"
                        userType={userType}
                        entry={selectedEntry}
                        setSelectedEntry={setSelectedEntry}
                    /> : null
            }

            <div>{moment(entry.createdAt).format("L")}</div>

            <div className={styles.content}>
                <div className={styles.contentOverlay}/>
                <div
                    className={styles.contentSpan}
                    dangerouslySetInnerHTML={{__html: sanitize(entry.content)}}
                />
            </div>

            {
                userType === "USER" ?
                    <Link className={styles.link} to="/home/entries/viewEntry">
                        <Button className={classes.button} onClick={() => setSelectedEntry(entry)}>View</Button>
                    </Link>
                    :
                    <Link className={styles.link} to="/home/admin/allEntries/viewEntry">
                        <Button className={classes.button} onClick={() => setSelectedEntry(entry)}>View</Button>
                    </Link>
            }

            {userType === "USER" ?
                <Link className={styles.link} to="/home/entries/updateEntry">
                    <Button className={classes.button} onClick={() => setSelectedEntry(entry)}>Update</Button>
                </Link>
                : null
            }
        </Container>
    );
};

export default withStyles(entryListStyles)(Entry);
