import React from "react";
// import axios from "axios";
import { Button } from '@material-ui/core';

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: undefined
        };
    }

    // componentDidMount() {
    //     axios.get("http://localhost:8081/").then(res => {
    //         console.log("hello");
    //         this.setState({
    //             message: res.data
    //         });
    //     });
    // };

    render() {
        return(
            <div>
                <div className = "background"/>
                <div className = "bgOverlay">
                    <div className="content">
                        <h1>Unpublished</h1>
                        <h2>Your personal online Diary</h2>
                        <h3>So many great stories that are left Unpublished</h3>
                        <h1>{this.state.message}</h1>
                        <Button variant="contained" className = "button">Login</Button>
                        <Button variant="contained" className = "button">Signup</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;