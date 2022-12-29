import React, {useState} from "react";

// utils imports
import {handleFilterEntries} from "../utils/filter/filterHandlers";

// style imports
import {FilterStyles} from "../utils/styles/filterStyles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const Sort = (props) => {

    const {setEntries} = props;

    const [activeOrder, setActiveOrder] = useState("-1");

    const styles = FilterStyles();

    return (
        <Container className={styles.container}>
            <div className={styles.orderByContainer}>
                <h3 className={styles.orderByLabel}>Order by:</h3>
                <div className={styles.orderByButtonContainer}>
                    <Button className={activeOrder === "-1" ? `${styles.orderByButton} ${styles.activeButton}` : `${styles.orderByButton}`}
                            onClick={(e) => {handleFilterEntries(e, "-1", setEntries, setActiveOrder)}}>
                        Date (newest - oldest)
                    </Button>
                    <Button className={activeOrder === "1" ? `${styles.orderByButton} ${styles.activeButton}` : `${styles.orderByButton}`}
                            onClick={(e) => {handleFilterEntries(e, "1", setEntries, setActiveOrder)}}>
                        Date (oldest - newest)
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export default Sort;