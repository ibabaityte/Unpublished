import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    const {username, userType, handleLogout, handleProfileDelete} = props;

    return (
        <div className = "header">
            <Link to = "/entries">Unpublished</Link>
            <Link to = "/entries">Home</Link>
            <div className = "username" >{username}</div>
            <button onClick = {handleLogout}>Logout</button>
            {userType !== "ADMIN" ?
                <button onClick = {handleProfileDelete}>Delete profile</button> :
                null
            }
        </div>
    );
}

export default Header;