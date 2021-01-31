import React from "react";
import CreateEntry from "./CreateEntry";

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            entries: []
        }
    }

    render() {
        return (
            <CreateEntry/>
        )
    }
}

export default Home;