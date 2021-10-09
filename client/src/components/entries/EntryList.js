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
import Search from "../Search";
import Sort from "../Sort";
import ListStatus from "../ListStatus";

// util imports
import {init} from "../../utils/entries/initUtils";

// style imports
import {withStyles} from '@material-ui/core/styles';
import entryListStyles, {EntryListStyles} from "../../utils/styles/entryListStyles";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

// icon imports
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
    const [openModal, setOpenModal] = useState(false);

    const styles = EntryListStyles();
    const classes = props.classes;

    const interval = () => setTimeout(() => {
        setListStatus({
            statusCode: null,
            statusText: null
        });
        localStorage.removeItem('ListStatusCode');
        localStorage.removeItem('ListStatusText');
    }, 8000);

    useEffect(() => {
        init(setEntries, "-1");
        if(listStatus.statusCode === "200") {
            interval();
            return () => {
                clearTimeout(interval());
            };
        }
    }, [listStatus.statusCode, setEntries]);

    return (
        <Container className={`${styles.entryList} ${classes.entryList}`}>
            <Route exact path="/home/entries">

                <Container className={classes.container}>
                    <Link className={styles.link} to="/home/entries/createEntry">
                        <Button className={`${classes.createButton}`}>
                            <AddIcon className={styles.addIcon}/>
                            Create a new Entry
                        </Button>
                    </Link>

                    <Search
                        setListStatus={setListStatus}
                        setEntries={setEntries}
                    />

                    <ListStatus
                        listStatus={listStatus}
                    />

                </Container>

                {
                    listStatus.statusCode !== "200" && listStatus.statusCode  ?
                        null :
                        <Sort
                            setEntries={setEntries}
                        />
                }

                {entries.map((entry) => (
                    <Entry
                        key={entry._id}
                        entry={entry}
                        entries={entries}
                        setEntries={setEntries}
                        selectedEntry={selectedEntry}
                        setSelectedEntry={setSelectedEntry}
                        userType={userType}
                        openModal={openModal}
                        setOpenModal={setOpenModal}
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
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                />
            )}/>
        </Container>
    );
}

export default withStyles(entryListStyles)(EntryList);