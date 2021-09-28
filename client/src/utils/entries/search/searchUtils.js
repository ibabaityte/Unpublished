import {ENTRIES_URL} from "../../constants/apiConstants";
import axios from "axios";
import {generateRequestConfig} from "../../users/headerUtils";
import {init} from "../entries/initUtils";

const searchEntries = (e, setEntries, query, selectedDate, setStatus) => {
    e.preventDefault();
    const { startDate, endDate, range } = selectedDate;
    const url = `${ENTRIES_URL}/search`;
    axios.get(url, generateRequestConfig(query, startDate, endDate, range)).then((response) => {
        if (response.data.length === 0 || response.data.length < 1) {
            setEntries([]);
            setStatus({code: "404", message: "There is no such entry"});
        } else {
            setEntries(response.data);
            setStatus({code: "200", message: ""});
        }
    }).catch(err => {
        console.log(err);
    });
};

const clearSearch = (setQuery, setEntries, setStatus) => {
    init(setEntries);
    setQuery("");
    setStatus({code: "", message: ""});
};

export {
    searchEntries,
    clearSearch
};