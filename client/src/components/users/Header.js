import React from "react";
import axios from "axios";

const Header = (props) => {
    const {username, handleLogout, handleProfileDelete} = props;

    return (
        <div className = "header">
            <div className = "username" >{username}</div>
            <button onClick = {handleLogout}>Logout</button>
            <button onClick = {handleProfileDelete}>Delete profile</button>
        </div>
    );
}

export default Header;