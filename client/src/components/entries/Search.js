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

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '@material-ui/core/Container';

const Search = (props) => {

    const {
        status,
        setStatus,
        setEntries
    } = props;

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [expanded, setExpanded] = React.useState(false);
    const [query, setQuery] = useState("");
    const [selectedDate, setSelectedDate] = useState({
        startDate: "",
        endDate: ""
    });

    const styles = SearchStyles();
    const classes = props.classes;

    return (
        <div>
            <Card className={styles.root}>
                    <h1 className={styles.cardHeading}>Search
                        <IconButton
                            className={clsx(styles.expand, {
                                [styles.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon/>
                        </IconButton>
                    </h1>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Container className={styles.formContainer}>
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
                                    label="Start date"
                                    type="date"
                                    value={selectedDate.startDate}
                                    className={styles.calender}
                                    onChange={(e) => handleDateChange(e, setSelectedDate)}
                                    sx={{ width: 500 }}

                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
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
                    </Container>
                </Collapse>
            </Card>

            <h2>{status.message}</h2>
        </div>
    );
};

export default withStyles(searchStyles)(Search);