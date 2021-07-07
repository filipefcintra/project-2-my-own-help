import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
// import { Dropdown } from "bootstrap";  

class NavDrop extends Component {
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
      <div>
        {this.state.programming.map((program) => {
          return (
            <li>
              <Link className="dropdown-item" to={`/subject/` + program}>
                <Link to={this.state.programming.program}>{program}</Link>
              </Link>
            </li>
          );
        })}
      </div>
    );
  }
}
export default NavDrop;