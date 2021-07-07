import React, { Component } from "react";
import Creatable, { makeCreatableSelect } from "react-select/creatable";
import CreatableSelect from "react-select/creatable";

export default class CreatableMulti extends Component {
  handleChange = (newValue, actionMeta) => {
    console.group("Value Changed");
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  render() {
    return <CreatableSelect isMulti onChange={this.handleChange} />;
  }
}
