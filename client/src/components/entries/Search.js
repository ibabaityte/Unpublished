import React, {useState} from "react";

// util imports
import {clearSearch, searchEntries} from "../../utils/entries/search/searchUtils";
import {handleSearchEntry} from "../../utils/entries/search/searchHandlers";
import {handleDateChange} from "../../utils/entries/search/searchHandlers";

// style imports
import {withStyles} from "@material-ui/core/styles";
import searchStyles, {SearchStyles} from "../../utils/styles/searchStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Search = (props) => {

    const {
        status,
        setStatus,
        setEntries
    } = props;

    const [query, setQuery] = useState("");
    const [selectedDate, setSelectedDate] = useState({
        startDate: "",
        endDate: ""
    });

    console.log(selectedDate.startDate);

    const styles = SearchStyles();
    const classes = props.classes;

    return (
        <div>
            <form className={styles.form} onSubmit={e => searchEntries(e, setEntries, query, selectedDate, setStatus)}>
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


                    <div className={styles.dateContainer}>
                        <TextField
                            id="startDate"
                            label="Start date"
                            type="date"
                            value={selectedDate.startDate}
                            className={styles.calender}
                            onChange={(e) => handleDateChange(e, setSelectedDate)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="endDate"
                            label="End date"
                            type="date"
                            value={selectedDate.endDate}
                            className={styles.calender}
                            onChange={(e) => handleDateChange(e, setSelectedDate)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>

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
        </div>
    );
};

export default withStyles(searchStyles)(Search);