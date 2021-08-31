import React from "react";
import {Link} from "react-router-dom";

// data formatting import
import moment from "moment";

// util imports
import {deleteEntry} from "../../utils/entries/entryListUtils";
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
                <h4 className={styles.date}>
                    {moment(selectedEntry.createdAt).format("L")}
                </h4>

                <h4 className={styles.date}>
                    Updated: {
                    moment(selectedEntry.updatedAt).format("L") +
                    moment(selectedEntry.updatedAt).format(" LT")
                }
                </h4>
            </div>

            <Button className={styles.btn} onClick={() => deleteEntry(userType, selectedEntry._id, entries, setEntries)}>Delete</Button>

            {
                userType === "USER" ?
                    <Link className={styles.link} to="/home/entries/updateEntry">
                        <Button className={styles.btn} onClick={() => setSelectedEntry(selectedEntry)}>Update</Button>
                    </Link>
                    : null
            }

            <h2><span
                className={styles.content}
                dangerouslySetInnerHTML={{__html: sanitize(selectedEntry.content)}}
            /></h2>


        </Container>
    );
}

export default ViewEntry;