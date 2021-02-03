import React from "react";
import axios from "axios";

let loginToken = localStorage.getItem('LoginToken');

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
        e.preventDefault();
        const { title, content } = this.state;
        axios.post('http://localhost:8081/entries', { title, content}, { headers: {'Content-Type' : 'application/json','Accept' : 'application/json',
            'Authorization' : loginToken }})
            .then((result) => {
                console.log(result.data.message);
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