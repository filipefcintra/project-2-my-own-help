import axios from "axios";
import { Component } from "react";
import { NavDropdown } from "react-bootstrap";
export default class NavDrop extends Component {
  state = {
    programming: [],
  };
  componentDidMount = () => {
    axios
      .get("https://ironrest.herokuapp.com/labfunctions")
      .then((response) => {
        this.arrayFilter(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  arrayFilter(array) {
    let newArray = array.map((elem) => {
      return elem.programming;
    });
    console.log(newArray);
    this.setState({ programming: [...new Set(newArray)] });
  }
  programResults() {
    this.arrayFilter.filter();
  }
  render() {
    return (
      <NavDropdown title="Programming Language" id="collasible-nav-dropdown">
        {this.state.programming.map((program) => {
          return (
            <NavDropdown.Item key={program} href={"/search/" + program}>
              {program}
            </NavDropdown.Item>
          );
        })}
      </NavDropdown>
    );
  }
}
