import React, { Component } from "react";
import axios from "axios";
import NewForm from "./NewForm";

class AddNew extends Component {
  state = {
    name: "",
    image_url: "",
    tagline: "",
    first_brewed: "",
    description: "",
    attenuation_level: 0,
    contributed_by: "",
    brewers_tips: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "",
        this.state
      );

      console.log(response);
      this.props.history.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <NewForm
        title="New"
        state={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default AddNew;
