import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    const {username, handleLogout, handleProfileDelete, userType} = props;

    return (
        <div className = "header">
            <Link to = "/entries">Unpublished</Link>
            <Link to = "/entries">Home</Link>
            <div className = "username" >{username}</div>
            <button onClick = {handleLogout}>Logout</button>
            <button onClick = {handleProfileDelete}>Delete profile</button>
            { userType === "ADMIN" ? <Link to ="/admin">
                <button type = "button">Admin</button>
            </Link> : null}
        </div>
    );
}

export default Header;