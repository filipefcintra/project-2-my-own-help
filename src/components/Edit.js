import React, { Component } from "react";
import axios from "axios";
import TextInputEdit from "./TextInputEdit";
export default class Edit extends Component {
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
    axios.put(`https://ironrest.herokuapp.com/labfunctions/${id}`, this.state);
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
        <TextInputEdit
          label="Edit File Name"
          placeholder="Type the file name..."
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <TextInputEdit
          label="Edit Programming Language"
          placeholder="e.g. Java"
          type="text"
          name="programming"
          value={this.state.programming}
          onChange={this.handleChange}
        />
        <TextInputEdit
          label="Edit Url"
          placeholder="Type the file path..."
          type="text"
          name="link"
          value={this.state.link}
          onChange={this.handleChange}
        />
        <TextInputEdit
          label="Edit Main Subjects"
          placeholder="Type the subjects separate by commas, e.g., arrow functions, while, axios"
          type="text"
          name="subjects"
          value={this.state.subjects}
          onChange={this.handleChange}
        />
        <br></br>
        <div className="form-floating">
          <select
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
            value={this.state.language}
            onChange={this.handleChange}
            name="language"
          >
            <option selected value="">
              Edit Language
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
          <label for="floatingSelect">Select Language</label>
        </div>
        <div>
          <button type="submit" className="mt-4 btn btn-primary">
            Save
          </button>
        </div>
        <div></div>
      </form>
    );
  }
}
