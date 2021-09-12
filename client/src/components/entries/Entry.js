import React from "react";
import {Link} from "react-router-dom";
import sanitize from "sanitize-html";

// data formatting import
import moment from "moment";

// util imports
import {deleteEntry} from "../../utils/entries/entries/entryUtils";

// style imports
import {withStyles} from '@material-ui/core/styles';
import {EntryListStyles} from "../../utils/styles/entryListStyles";
import entryListStyles from "../../utils/styles/entryListStyles";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

// icon imports
import DeleteIcon from '@material-ui/icons/Delete';

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
            <h1 className={styles.title}>
                {entry.title}
                <DeleteIcon
                    className={styles.deleteIcon}
                    onClick={() => deleteEntry(userType, entry._id, entries, setEntries)}
                />
            </h1>

            <div>{moment(entry.createdAt).format("L")}</div>

            <div className={styles.content}>
                <div className={styles.contentOverlay} />
                <table
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