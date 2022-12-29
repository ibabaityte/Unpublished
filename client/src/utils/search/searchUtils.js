import {ENTRIES_URL} from "../constants/apiConstants";
import axios from "axios";

import {init} from "../entries/initUtils";

let generateSearchRequestConfig = (query, startDate, endDate, range) => {
    return {
        'params': {
            'keyword': query,
            'startDate': startDate,
            'endDate': endDate,
            'range': range
        },
        'headers': {
            'Authorization': localStorage.getItem('LoginToken')
        }
    };
};

const searchEntries = (e, setEntries, query, selectedDate, setStatus) => {
    e.preventDefault();
    const { startDate, endDate, range } = selectedDate;
    const url = `${ENTRIES_URL}/search`;
    axios.get(url, generateSearchRequestConfig(query, startDate, endDate, range)).then((response) => {
        // console.log(response);
        if (response.data.length === 0 || response.data.length < 1) {
            setEntries([]);
            setStatus({
                statusCode: "500",
                statusText: "There is no such entry"
            });
        } else {
            setEntries(response.data);
            setStatus({
                statusCode: "",
                statusText: ""
            });
        }
    }).catch(err => {
        setEntries([]);
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