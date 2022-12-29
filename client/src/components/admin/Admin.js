import React, {useEffect, useState} from "react";
import {
    Link,
    Route
} from "react-router-dom";

// component imports
import AdminUserList from "./AdminUserList";
import AdminEntryList from "./AdminEntryList";

// util imports
import {
    getAdminUserList,
    getAdminEntryList,
    adminDeleteProfile
} from "../../utils/admin/adminUtils";

// style imports
import {withStyles} from '@material-ui/core/styles';
import adminPanelStyles, {AdminStyles} from "../../utils/styles/adminStyles";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const AdminPanelComponent = (props) => {

    const {
        userType
    } = props;

    const styles = AdminStyles();
    const classes = props.classes;

    const [adminEntries, setAdminEntries] = useState([]);
    const [adminUsers, setAdminUsers] = useState([]);

    useEffect(() => {
        getAdminUserList(setAdminUsers);
        getAdminEntryList(setAdminEntries);
    }, []);

    return (
        <Container className={styles.container}>
            <h1 className={styles.title}>ADMIN PANEL</h1>
            <Container className={styles.buttonContainer}>
                <Link className={styles.link} to="/home/admin/allUsers">
                    <Button className={`${classes.panelButton} ${classes.button}`}>See all users</Button>
                </Link>
                <Link className={styles.link} to="/home/admin/allEntries">
                    <Button className={`${classes.panelButton} ${classes.button}`}>See all entries</Button>
                </Link>
            </Container>

            <Route path="/home/admin/allUsers" render={() => (
                <AdminUserList
                    adminUsers={adminUsers}
                    setAdminUsers={setAdminUsers}
                    handleProfileDelete={adminDeleteProfile}
                />
            )}/>

            <Route path="/home/admin/allEntries" render={() => (
                <AdminEntryList
                    userType={userType}
                    adminEntries={adminEntries}
                    setEntries={setAdminEntries}
                />
            )}/>

        </Container>
    );
}

export default withStyles(adminPanelStyles)(AdminPanelComponent);