import React, {useState} from "react";

// util imports
import {clearSearch, searchEntries} from "../utils/search/searchUtils";
import {handleSearchEntry} from "../utils/search/searchHandlers";
import {handleDateChange} from "../utils/search/searchHandlers";

// style imports
import {withStyles} from "@material-ui/core/styles";
import searchStyles, {SearchStyles} from "../utils/styles/searchStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

// icon imports
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Search = (props) => {

    const {
        setListStatus,
        setEntries
    } = props;

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [expanded, setExpanded] = React.useState(false);
    const [query, setQuery] = useState("");
    const [selectedDate, setSelectedDate] = useState({
        startDate: "",
        endDate: "",
        range: ""
    });

    const styles = SearchStyles();
    const classes = props.classes;

    return (
        <div>
            <Card className={styles.root}>
                    <h1 className={styles.cardHeading}>Search
                        <IconButton
                            className={`clsx(styles.expand, {
                                [styles.expandOpen]: expanded,
                            }) ${styles.expand}`}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon/>
                        </IconButton>
                    </h1>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Container className={styles.formContainer}>
                        <form className={styles.form} onSubmit={e => searchEntries(e, setEntries, query, selectedDate, setListStatus)}>
                            <TextField
                                id="standard-basic"
                                label="Search by title..."
                                type="text"
                                value={query}
                                name="title"
                                className={styles.searchBar}
                                onChange={e => {
                                    handleSearchEntry(e, setQuery)
                                }}
                            />

                            <div className={styles.dateContainer}>
                                <div className={styles.dateContainer1}>
                                    <InputLabel id="demo-simple-select-label">Created during...</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        label="Created since..."
                                        id="demo-simple-select"
                                        value={selectedDate.range}
                                        onChange={(e) => handleDateChange(e, setSelectedDate)}
                                        name="range"
                                        className={styles.filter}
                                    >
                                        <MenuItem value="7days">Last 7 days</MenuItem>
                                        <MenuItem value="thisMonth">This month</MenuItem>
                                        <MenuItem value="lastMonth">Last month</MenuItem>
                                        <MenuItem value="thisYear">This year</MenuItem>
                                        <MenuItem value="lastYear">Last year</MenuItem>
                                    </Select>
                                </div>

                                <div className={styles.dateContainer2}>
                                    <h4 className={styles.divider}>OR</h4>
                                </div>

                                <div className={styles.dateContainer3}>
                                    <h6>Select custom date...</h6>

                                    <TextField
                                        label="Start date"
                                        id="startDate"
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
                                        id="endDate"
                                        type="date"
                                        value={selectedDate.endDate}
                                        className={styles.calender}
                                        onChange={(e) => handleDateChange(e, setSelectedDate)}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
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
                                    onClick={() => clearSearch(setQuery, setEntries, setListStatus)}>Clear and show all
                                </Button>
                            </div>
                        </form>
                    </Container>
                </Collapse>
            </Card>
        </div>
    );
};

export default withStyles(searchStyles)(Search);
