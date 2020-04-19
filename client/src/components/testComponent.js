import React from "react";
import axios from "axios";

class TestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: undefined
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8080").then(res => {
            console.log(res);
            this.setState({
                message: res.data
            });
        });
    };

    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
            </div>
        );
    }
}

export default TestComponent;