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
        e.preventDefault();
        const { title, content } = this.state;
        axios.post('http://localhost:8081/entries', { title, content })
            .then((result) => {
                console.log(result);
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