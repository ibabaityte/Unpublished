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

// util imports
import {init} from "../../utils/entries/initUtils";
import {searchEntries} from "../../utils/entries/entryUtils";
import {handleSearchEntry} from "../../utils/entries/entryHandlers";
import {clearSearch} from "../../utils/entries/entryUtils";

// style imports
import {withStyles} from '@material-ui/core/styles';
import entryListStyles, {EntryListStyles} from "../../utils/styles/entryListStyles";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';

const EntryList = (props) => {

    const {
        userType
    } = props;

    const [entries, setEntries] = useState([]);
    const [newEntry, setNewEntry] = useState({});
    const [selectedEntry, setSelectedEntry] = useState({});
    const [status, setStatus] = useState({});
    const [query, setQuery] = useState("");

    const styles = EntryListStyles();
    const classes = props.classes;

    useEffect(() => {
        init(setEntries);
    }, []);

    return (
        <Container className={`${styles.entryList} ${classes.entryList}`}>
            <Route exact path="/home/entries">

                <Container className={classes.container}>
                    <Link className={styles.link} to="/home/entries/createEntry">
                        <Button className={`${classes.createButton} ${classes.button}`}><AddIcon
                            className={styles.addIcon}/>Create a new Entry</Button>
                    </Link>

                    <form
                        className={styles.form}
                        onSubmit={e => searchEntries(e, setEntries, query, setStatus)}>
                        <TextField
                            id="standard-basic"
                            label="Search entries..."
                            type="text"
                            value={query}
                            name="title"
                            className={styles.searchBar}
                            onChange={e => {
                                handleSearchEntry(e, setQuery)
                            }}
                        />

                        <div className={styles.searchButtonContainer}>
                            <Button
                                className={classes.searchButton}
                                type="submit"
                                value="Search">Search
                            </Button>
                            <Button
                                className={classes.searchButton}
                                value="Search"
                                onClick={() => clearSearch(setQuery, setEntries, setStatus)}>Clear
                            </Button>
                        </div>

                    </form>

                    <h2>{status.message}</h2>
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