import React from "react";
import axios from "axios";

class UpdateEntry extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            entryId: this.props.id,
            title: this.props.entry.title,
            content: this.props.entry.content
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.currentTarget.name]: e.currentTarget.value }, () => {
            // console.log(this.state);
        });
    }

    handleSubmit = (e) => {
        let loginToken = localStorage.getItem('LoginToken');
        e.preventDefault();
        // console.log(this.props);
        const { entryId, title, content } = this.state;
        const { currentStateEntries, updateEntries, displayUpdateToggle } = this.props;
        axios.put(`http://localhost:8081/entries/${entryId}`, { title: title, content: content }, {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : loginToken
            }
        }).then((result) => {
            console.log(result);
            for(let i = 0; i < currentStateEntries.length; i++) {
                if(currentStateEntries[i]._id === result.data._id) {
                    currentStateEntries[i] = result.data;
                    updateEntries(currentStateEntries);
                    displayUpdateToggle();
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        const { title, content } = this.state;
        return (
            <div>
                <div>Update Entry</div>
                <form onSubmit = {this.handleSubmit}>
                    <input
                        type = "text"
                        value = {title}
                        name = "title"
                        onChange = {this.handleChange}
                    />
                    <input
                        type = "text"
                        value = {content}
                        name = "content"
                        onChange = {this.handleChange}
                    />
                    <input type = "submit"/>
                </form>
            </div>
        );
    }
}

export default UpdateEntry;