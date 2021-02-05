import React from "react";
import axios from "axios";

class CreateEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: ""
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.currentTarget.name]: e.currentTarget.value }, () => {
            console.log(this.state);
        });
    }

    handleSubmit = (e) => {
        let loginToken = localStorage.getItem('LoginToken');
        e.preventDefault();
        const { title, content } = this.state;
        const { currentStateEntries, updateEntries } = this.props;
        axios.post('http://localhost:8081/entries', { title, content}, {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : loginToken
            }
        }).then((result) => {
            console.log(result);
            currentStateEntries.push(result.data.data);
            updateEntries(currentStateEntries);
        }).catch(err => {
            console.log(err.response.data.message);
        });
    }

    render() {
        const { title, content } = this.state;
        return (
          <div>
              <div>Create Entry</div>
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

export default CreateEntry;