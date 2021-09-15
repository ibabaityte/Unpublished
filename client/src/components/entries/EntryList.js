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
    const [listStatus, setListStatus] = useState({
        statusCode: localStorage.getItem('ListStatusCode'),
        statusText: localStorage.getItem('ListStatusText')
    });
    const [status, setStatus] = useState({
        statusCode: localStorage.getItem('StatusCode'),
        statusText: localStorage.getItem('StatusText')
    });

    const styles = EntryListStyles();
    const classes = props.classes;

    const interval = () => setTimeout(() => {
        setListStatus({});
        localStorage.removeItem('ListStatusCode');
        localStorage.removeItem('ListStatusText');
    }, 8000);

    useEffect(() => {
        init(setEntries);
        interval();
        return () => {
            clearTimeout(interval());
        };
    }, []);

    return (
        <Container className={`${styles.entryList} ${classes.entryList}`}>
            <Route exact path="/home/entries">

                <Container className={classes.container}>
                    <Link className={styles.link} to="/home/entries/createEntry">
                        <Button className={`${classes.createButton}`}>
                            <AddIcon className={styles.addIcon}/>
                            Create a new Entry</Button>
                    </Link>

                    <Search
                        status={status}
                        setStatus={setStatus}
                        setEntries={setEntries}
                    />

                    {
                        listStatus.statusCode !== "200" ?
                            null :
                            <div className={`${styles.statusText} ${'alert'} ${'alert-success'}`} role="alert">
                                {listStatus.statusText}
                            </div>
                    }

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
                    setListStatus={setListStatus}
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
                    setListStatus={setListStatus}
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