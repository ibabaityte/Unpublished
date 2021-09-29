import React from "react";
import {Link} from "react-router-dom";

// data formatting import
import moment from "moment";

// util imports
import {deleteEntry} from "../../utils/entries/entryUtils";
import sanitize from "sanitize-html";

// style imports
import {ViewEntryStyles} from "../../utils/styles/viewEntryStyles";
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';

const ViewEntry = (props) => {
    const {
        userType,
        entries,
        setEntries,
        selectedEntry,
        setSelectedEntry
    } = props;

    const styles = ViewEntryStyles();

    return (
        <Container className={styles.container}>
            <h1>{selectedEntry.title}</h1>

            <div className={styles.dateContainer}>
                <h5 className={styles.date}>
                    {moment(selectedEntry.createdAt).format("L")}
                </h5>

                <h5 className={styles.date}>
                    Updated: {
                    moment(selectedEntry.updatedAt).format("L") +
                    moment(selectedEntry.updatedAt).format(" LT")
                }
                </h5>
            </div>

            <Button className={styles.btn} onClick={() => deleteEntry(userType, selectedEntry._id, entries, setEntries)}>Delete</Button>

            {
                userType === "USER" ?
                    <Link className={styles.link} to="/home/entries/updateEntry">
                        <Button className={styles.btn} onClick={() => setSelectedEntry(selectedEntry)}>Update</Button>
                    </Link>
                    : null
            }

            <div className={styles.contentOverlay}>
                <span
                className={styles.content}
                dangerouslySetInnerHTML={{__html: sanitize(selectedEntry.content)}}
                />
            </div>


        </Container>
    );
}

export default ViewEntry;