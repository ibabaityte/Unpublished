import React from "react";
import {Link} from "react-router-dom";


const AdminPanelComponent = () => {
    return (
        <div>
            <div>ADMIN PANEL</div>
            <Link to="/admin/allUsers">
                <button>See all users</button>
            </Link>
            <Link to="/admin/allEntries">
                <button>See all entries</button>
            </Link>
        </div>
    );
}

export default AdminPanelComponent;