import React from "react";
import {Link} from "react-router-dom";
import sanitize from "sanitize-html";

// data formatting import
import moment from "moment";

// util imports
import {deleteEntry} from "../../utils/entries/entryListUtils";

// style imports
import {withStyles} from '@material-ui/core/styles';
import {EntryListStyles} from "../../utils/styles/entryListStyles";
import entryListStyles from "../../utils/styles/entryListStyles";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

// icon imports
import DeleteIcon from '@material-ui/icons/Delete';
// import {init} from "../../utils/entries/initUtils";

const Entry = (props) => {
    const {
        entry,
        entries,
        setEntries,
        setSelectedEntry,
        userType
    } = props;

    const styles = EntryListStyles();
    const classes = props.classes;

    return (
        <Container className={classes.entry}>
            <div className={styles.title}>
                {entry.title}
                <DeleteIcon
                    className={styles.deleteIcon}
                    onClick={() => deleteEntry(userType, entry._id, entries, setEntries)}
                />
            </div>

            <div>{moment(entry.createdAt).format("L")}</div>

            <div className={styles.content}>
                <div className={styles.contentOverlay} />
                <span
                    className="content"
                    dangerouslySetInnerHTML={{__html: sanitize(entry.content)}}
                />
            </div>

            <Link className={styles.link} to="/entries/viewEntry">
                <Button className={classes.button} onClick={() => setSelectedEntry(entry)}>View</Button>
            </Link>

            <Link className={styles.link} to="/entries/updateEntry">
                <Button className={classes.button} onClick={() => setSelectedEntry(entry)}>Update</Button>
            </Link>

        </Container>
    );
};

export default withStyles(entryListStyles)(Entry);