import React from "react";

const AdminUserList = (props) => {
    const {adminUsers, handleProfileDelete} = props;
    return (
        adminUsers.map((user) => (
            <div key = {user.username}>
                <div>{user.username}</div>
                <button  onClick={() => handleProfileDelete(user._id)}>Delete profile</button>
            </div>
        ))
    );
};

export default AdminUserList;

