import {ENTRIES_URL} from "../../constants/apiConstants";
import axios from "axios";
import {generateRequestConfig} from "../../users/headerUtils";
import {init} from "../entries/initUtils";

const searchEntries = (e, setEntries, query, selectedDate, setStatus) => {
    e.preventDefault();
    const { startDate, endDate, range } = selectedDate;
    const url = `${ENTRIES_URL}/search`;
    axios.get(url, generateRequestConfig(query, startDate, endDate, range)).then((response) => {
        console.log(response);
        if(response.data.length === 0) {
            setStatus({
                statusCode: "500",
                statusText: "There is no such entry"
            });
        }
        if (response.data.length === 0 || response.data.length < 1) {
            setEntries([]);
        } else {
            setEntries(response.data);
        }
    }).catch(err => {
        setStatus({
            statusCode: err.response.data.code,
            statusText: err.response.data.message
        });
        // console.log(err.response.data.message);
    });
};

const clearSearch = (setQuery, setEntries, setStatus) => {
    init(setEntries);
    setQuery("");
    setStatus({
        statusCode: null,
        statusText: null
    });
};

export {
    searchEntries,
    clearSearch
};