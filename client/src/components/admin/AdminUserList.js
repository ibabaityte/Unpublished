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
                        <div className={styles.wrapper}>
                            <div className={styles.usernameDiv}>
                                <h2>{user.username}</h2>
                            </div>
                            <div className={styles.buttonDiv}>
                                <Button className={styles.button} onClick={() => handleProfileDelete(user._id, adminUsers, setAdminUsers)}>Delete profile</Button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AdminUserList;