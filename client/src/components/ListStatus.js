import React from "react";

// style imports
import {ListStatusStyles} from "../utils/styles/ListStatusStyles";

const ListStatus = (props) => {

    const {listStatus} = props;

    const styles = ListStatusStyles();

    return (
        <div>
            {
                listStatus.statusCode === "200" ?
                    <div className={`${styles.statusText} ${styles.successStatusText} ${'alert'} ${'alert-success'}`}
                         role="alert">
                        {listStatus.statusText}
                    </div> :
                    null
            }

            {
                listStatus.statusCode === "400" || listStatus.statusCode === "500" ?
                    <div className={`${styles.statusText} ${'alert'} ${'alert-danger'}`} role="alert">
                        {listStatus.statusText}
                    </div> :
                    null
            }
        </div>
    );
};

export default ListStatus;