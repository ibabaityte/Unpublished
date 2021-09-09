import axios from "axios";
import {
    generateRequestConfig
} from "../../users/headerUtils";
import {ENTRIES_URL} from "../../constants/apiConstants";

const init = (setEntries) => {
    axios.get(ENTRIES_URL, generateRequestConfig()).then((response) => {
        setEntries(response.data);
    });
}

export {
    init
}