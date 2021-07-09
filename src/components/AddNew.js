import React, { Component } from "react";
import axios from "axios";
import TextInput from "./TextInput";
export default class AddNew extends Component {
  state = {
    name: "",
    programming: "",
    subjects: [],
    language: "",
    link: "",
  };
  handleChange = (event) => {
    if (event.target.name === "subjects") {
      this.setState({ subjects: event.target.value.split(",") });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("https://ironrest.herokuapp.com/labfunctions", this.state);
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
          placeholder="Type the file name..."
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <TextInput
          label="Programming Language"
          placeholder="e.g. Java"
          type="text"
          name="programming"
          value={this.state.programming}
          onChange={this.handleChange}
        />
        <TextInput
          label="Url"
          placeholder="Type the file path..."
          type="text"
          name="link"
          value={this.state.link}
          onChange={this.handleChange}
        />
        <TextInput
          label="Main Subjects"
          placeholder="Type the subjects separate by commas, e.g., arrow functions, while, axios"
          type="text"
          name="subjects"
          value={this.state.subjects}
          onChange={this.handleChange}
          required
        />
        <br></br>
        <div className="form-floating">
          <select
            className="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
            value={this.state.language}
            onChange={this.handleChange}
            name="language"
            required
          >
            <option value="" defaultValue="">
              Language
            </option>
            <option value="portuguese">Portuguese</option>
            <option value="english">English</option>
            <option value="mandarin">Mandarin</option>
            <option value="hindi">Hindi</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            <option value="arabic">Arabic</option>
            <option value="bengali">Bengali</option>
            <option value="russian">Russian</option>
            <option value="indonesian">Indonesian</option>
            <option value="polish">Polish</option>
            <option value="german">German</option>
          </select>
          <label htmlFor="floatingSelect">Select Language</label>
        </div>
        <button className="mt-5 btn btn-primary">Submit</button>
      </form>
    );
  }
}
