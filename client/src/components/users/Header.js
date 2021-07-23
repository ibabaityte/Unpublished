import React from "react";
import {Link} from "react-router-dom";
import {HeaderStyles} from "../../utils/styles/headerStyles";
// import {Background} from "../../utils/styles/background";

const Header = (props) => {
    const {username, userType, handleLogout, handleProfileDelete} = props;

    const styles = HeaderStyles();

    return (
        <div className={styles.header}>
            <Link className={styles.logo} to="/entries">unpublished</Link>
            <Link to="/entries">Home</Link>
            <div className="username">{username}</div>
            <button onClick={handleLogout}>Logout</button>
            {userType !== "ADMIN" ?
                <button onClick={handleProfileDelete}>Delete profile</button> :
                null
            }
        </div>
    );
}

export default Header;