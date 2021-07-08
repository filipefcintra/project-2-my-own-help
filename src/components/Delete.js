import React, { Component } from "react";
import axios from "axios";
import TextInput from "./TextInput";
export default class Delete extends Component {
  state = {
    name: "",
    programming: "",
    subjects: [],
    language: "",
    link: "",
  };
  componentDidMount = async () => {
    try {
      const id = this.props.match.params._id;
      const response = await axios.get(
        `https://ironrest.herokuapp.com/labfunctions/${id}`
      );
      this.setState({ ...response.data });
    } catch (err) {
      console.log(err);
    }
  };
  handleChange = (event) => {
    if (event.target.name === "subjects") {
      this.setState({ subjects: event.target.value.split(",") });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  };
  handleSubmit = async (event) => {
    const id = this.props.match.params._id;
    event.preventDefault();
    axios
      .delete(`https://ironrest.herokuapp.com/labfunctions/${id}`)
      .then((response) => {
        console.log(response);
        this.props.history.push("/search");
      })
      .catch((err) => console.log(err));
    this.setState({
      name: "",
      programming: "",
      subjects: [],
      language: "",
      link: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="container">
        <br></br>
        <br></br>
        <br></br>
        <TextInput
          label="File Name"
          type="text"
          name="name"
          value={this.state.name}
        />
        <TextInput
          label="Programming Language"
          type="text"
          name="programming"
          value={this.state.programming}
        />
        <TextInput
          label="Url"
          type="text"
          name="link"
          value={this.state.link}
        />
        <TextInput
          label="Main Subjects"
          type="text"
          name="subjects"
          value={this.state.subjects}
        />
        <br></br>
        <div>
          <button type="submit" className="mt-4 btn btn-primary">
            Delete
          </button>
        </div>
        <div></div>
      </form>
    );
  }
}
