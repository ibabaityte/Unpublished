import React from "react";
import { Link } from 'react-router-dom';


const Landing = () => {

    return(
        <div>
            <div className = "background"/>
            <div className = "bgOverlay">
                <div className="content">
                    <h1>Unpublished</h1>
                    <h2>Your personal online Diary</h2>
                    <h3>So many great stories that are left Unpublished</h3>
                    <Link to = "/auth">Login</Link>
                    <Link to = "/register">Register</Link>
                </div>
            </div>
        </div>
    );
}

export default Landing;