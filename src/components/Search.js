import { Component } from "react";
import axios from "axios";
class Search extends Component {
  state = {
    searchTerm: "",
    searchResults: [],
  };
  componentDidUpdate = (prevState) => {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.handleSubmit();
    }
  };
  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };
  handleSubmit = async (event) => {
    try {
      const response = await axios.get(
        `https://ironrest.herokuapp.com/labfunctions`
      );
      let newArray = response.data.filter((element) => {
        return (
          element.subjects
            .join()
            .toLowerCase()
            .includes(this.state.searchTerm.toLowerCase()) ||
          element.programming
            .toLowerCase()
            .includes(this.state.searchTerm.toLowerCase())
        );
      });
      console.log(response);
      this.setState({ searchResults: [...newArray] });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by subject..."
            onChange={this.handleChange}
            value={this.state.searchTerm}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={this.handleSubmit}
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
        <ul className="list-group">
          {this.state.searchResults.map((program) => {
            return (
              <li key={program.cioc} className="list-group-item">
                <div className="row">
                  {/* <div className="col-4">
                    <img
                      src={progam.flag}
                      alt={`Flag of ${progam.name}`}
                      className="img-fluid w-75 h-auto"
                    />
                  </div> */}
                  <div className="col-8 d-flex flex-column">
                    <strong>{program.name}</strong>
                    <span>
                      <strong>Program-Language: </strong>
                      {program.programming}
                    </span>
                    <span>
                      <strong>Link: </strong>
                      <a target="blank" href=" ">
                        {program.link}
                      </a>
                    </span>
                    <span>
                      <strong>Main Subjects: </strong>
                      <span target="blank" href=" ">
                        {program.subjects.join(", ")}
                      </span>
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Search;
