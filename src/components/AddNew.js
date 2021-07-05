import React, { Component } from "react";
import axios from "axios";
import TextInput from "./TextInput";
// import { Dropdown } from "bootstrap";
export default class AddNew extends Component {
  state = {
    name: "",
    tagline: "",
    language: "",
    link: "",
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleInputFileChange = (e: any) => {
    this.setFile(e.target.files[0]);
  };

  handleSubmit = async () => {  
    const response = await axios
      .post("https://ironrest.herokuapp.com/labfunctions", this.state)
      .then((response) => {
        console.log(response);
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({
      name: "",
      tagline: "",
      language: "",
      link: "",
      file: "",
    });
  };
  render() {
    return (
      <div className="container">
        <TextInput
          label="Name"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <TextInput
          label="Tag"
          type="text"
          name="tagline"
          value={this.state.tagline}
          onChange={this.handleChange}
        />
        <TextInput
          label="Language"
          type="text"
          name="language"
          value={this.state.language}
          onChange={this.handleChange}
        />
        <TextInput
          label="Link"
          type="text"
          name="link"
          value={this.state.link}
          onChange={this.handleChange}
        />
        <TextInput
          id="files"
          type="file"
          name="files"
          value={this.state.files}
          onChange={this.handleInputFileChange}
          multiple
        />
        <button onClick={this.handleSubmit} className="mt-5 btn btn-primary">
          Submit
        </button>
      </div>
    );
  }
}