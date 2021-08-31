import React from "react";

// style imports
import {AdminStyles} from "../../utils/styles/adminStyles";
import Button from '@material-ui/core/Button';

const AdminUserList = (props) => {
    const {adminUsers, setAdminUsers, handleProfileDelete} = props;

    const styles = AdminStyles();
    return (
        <div className={styles.userListContainer}>
            {
                adminUsers.map((user) => (
                    <div className={styles.containerItem} key={user.username}>
                        <h2 className={styles.username}>{user.username}</h2>
                        <div className={styles.buttonDiv}>
                            <Button className={styles.button} onClick={() => handleProfileDelete(user._id, adminUsers, setAdminUsers)}>Delete profile</Button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AdminUserList;