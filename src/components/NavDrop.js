import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";

class NavDrop extends Component {
  state = {
    programming: [],
  };
  componentDidMount = () => {
    axios
      .get("https://ironrest.herokuapp.com/labfunctions")
      .then((response) => {
        console.log(response);

        this.setState({ programming: [...response.data] });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  arrayFilter() {
    let newArray = this.state.programming.filter(function (este, i) {
      return this.state.programming.indexOf(este) === i;
    });
  }

  render() {
    return (
      <div>
        {this.state.programming.map((program) => {
          return (
            <li>
              <Link
                className="drop-item"
                to={`/subject/` + program.programming}
              >
                {program.programming}
              </Link>
            </li>
          );
        })}
      </div>
    );
  }
}

export default NavDrop;
