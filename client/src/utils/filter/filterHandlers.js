import axios from "axios";
import {generateSortRequestConfig} from "./filterUtils";
import {ENTRIES_URL} from "../constants/apiConstants";

const handleFilterEntries = (e, order, setEntries, setActiveOrder) => {
    e.preventDefault();
    setActiveOrder(order);
    const url = `${ENTRIES_URL}`;
    axios.get(url, generateSortRequestConfig(order)).then((response) => {
        setEntries(response.data);
    }).catch(err => {
        console.log(err.response);
    });
};

export {
    handleFilterEntries
};