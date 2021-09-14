import React, {useEffect, useState} from "react";
import {
    Link,
    Route
} from "react-router-dom";

// component imports
import Entry from "./Entry";
import CreateEntry from "./CreateEntry";
import UpdateEntry from "./UpdateEntry";
import ViewEntry from "./ViewEntry";
import Search from "./Search";

// util imports
import {init} from "../../utils/entries/entries/initUtils";

// style imports
import {withStyles} from '@material-ui/core/styles';
import entryListStyles, {EntryListStyles} from "../../utils/styles/entryListStyles";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const EntryList = (props) => {

    const {
        userType
    } = props;

    const [entries, setEntries] = useState([]);
    const [newEntry, setNewEntry] = useState({});
    const [selectedEntry, setSelectedEntry] = useState({});
    const [status, setStatus] = useState({
        statusCode: localStorage.getItem('StatusCode'),
        statusText: localStorage.getItem('StatusText')
    });

    const styles = EntryListStyles();
    const classes = props.classes;

    useEffect(() => {
        init(setEntries);
    }, []);

    setTimeout(() => {
        // setStatus({});
        localStorage.removeItem('StatusCode');
        localStorage.removeItem('StatusText');
    }, 8000);


    return (
        <Container className={`${styles.entryList} ${classes.entryList}`}>
            <Route exact path="/home/entries">

                {
                    status.statusCode !== "200" ?
                        null :
                        <h2 className={styles.statusMessage}>{status.statusText}</h2>

                }

                <Container className={classes.container}>
                    <Link onClick={() => {
                        setStatus({})
                    }} className={styles.link} to="/home/entries/createEntry">
                        <Button className={`${classes.createButton}`}>
                            <AddIcon className={styles.addIcon}/>
                            Create a new Entry</Button>
                    </Link>

                    <Search
                        status={status}
                        setStatus={setStatus}
                        setEntries={setEntries}
                    />

                </Container>

                {entries.map((entry) => (
                    <Entry
                        key={entry._id}
                        entry={entry}
                        entries={entries}
                        setEntries={setEntries}
                        setSelectedEntry={setSelectedEntry}
                        userType={userType}
                    />
                ))}
            </Route>

            <Route path="/home/entries/createEntry" render={() => (
                <CreateEntry
                    entry={newEntry}
                    entries={entries}
                    setEntries={setEntries}
                    selectedEntry={selectedEntry}
                    setSelectedEntry={setSelectedEntry}
                    newEntry={newEntry}
                    setNewEntry={setNewEntry}
                    status={status}
                    setStatus={setStatus}
                />
            )}/>

            <Route path="/home/entries/updateEntry">
                <UpdateEntry
                    entry={selectedEntry}
                    entries={entries}
                    setEntries={setEntries}
                    selectedEntry={selectedEntry}
                    setSelectedEntry={setSelectedEntry}
                    newEntry={newEntry}
                    setNewEntry={setNewEntry}
                    status={status}
                    setStatus={setStatus}
                />
            </Route>

            <Route path="/home/entries/viewEntry" render={() => (
                <ViewEntry
                    key={selectedEntry._id}
                    userType={userType}
                    entries={entries}
                    setEntries={setEntries}
                    selectedEntry={selectedEntry}
                    setSelectedEntry={setSelectedEntry}
                />
            )}/>
        </Container>
    );
}

export default withStyles(entryListStyles)(EntryList);