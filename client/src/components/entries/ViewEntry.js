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
            <div className={styles.title}>
                {selectedEntry.title}
            </div>

            <div className={styles.date}>
                <div>
                    {moment(selectedEntry.createdAt).format("L")}
                </div>

                <div>
                    Updated: {
                    moment(selectedEntry.updatedAt).format("L") +
                    moment(selectedEntry.updatedAt).format(" LT")
                }
                </div>
            </div>

            <Button className={styles.btn} onClick={() => deleteEntry(userType, selectedEntry._id, entries, setEntries)}>Delete</Button>

            <Link className={styles.link} to="/entries/updateEntry">
                <Button className={styles.btn} onClick={() => setSelectedEntry(selectedEntry)}>Update</Button>
            </Link>

            <div><span
                className={styles.content}
                dangerouslySetInnerHTML={{__html: sanitize(selectedEntry.content)}}
            /></div>


        </Container>
    );
}

export default ViewEntry;