import { Component } from "react";
import axios from "axios";
export default class Search extends Component {
  state = {
    id: "",
    searchTerm: "",
    searchResults: [],
    selectLanguage: "",
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
    if (this.props.match.params.language) {
      this.setState({ searchTerm: this.props.match.params.language });
    }
    this.handleSubmit();
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevState.searchTerm !== this.state.searchTerm ||
      prevState.selectLanguage !== this.state.selectLanguage
    ) {
      console.log(this.state.searchTerm);
      this.handleSubmit();
    }
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = async (event) => {
    try {
      const response = await axios.get(
        `https://ironrest.herokuapp.com/labfunctions`
      );
      let newArray = response.data.filter((element) => {
        return (
          (element.subjects
            .join()
            .toLowerCase()
            .includes(this.state.searchTerm.toLowerCase()) ||
            element.programming
              .toLowerCase()
              .includes(this.state.searchTerm.toLowerCase())) &&
          element.programming
            .toLowerCase()
            .includes(this.state.selectLanguage.toLowerCase())
        );
      });
      console.log(response);
      this.setState({ searchResults: [...newArray] });
    } catch (err) {
      console.log(err);
    }
  };
  arrayFilter(array) {
    let newArray = array.map((elem) => {
      return elem.programming;
    });
    this.setState({ programming: [...new Set(newArray)] });
  }
  render() {
    return (
      <div>
        <div className="mb-3 mt-3" style={{ margin: " 0 3%" }}>
          <input
            type="text"
            name="searchTerm"
            className="form-control"
            placeholder="Search by subject..."
            onChange={this.handleChange}
            value={this.state.searchTerm}
          />
          <div className="form-floating" style={{ margin: " 1% 3%" }}></div>
          <select
            className="form-select"
            name="selectLanguage"
            value={this.state.selectLanguage}
            onChange={this.handleChange}
          >
            <option value="" defaultValue="">
              Select the programming language
            </option>
            {this.state.programming.map((program) => {
              return (
                <option key={program} value={program}>
                  {program}
                </option>
              );
            })}
          </select>
        </div>
        <ul className="list-group">
          {this.state.searchResults.map((program) => {
            return (
              <li key={program._id} className="list-group-item">
                <div className="row">
                  <div className="col-8 d-flex flex-column">
                    <strong>{program.name}</strong>
                    <span>
                      <strong>Program-Language: </strong>
                      {program.programming}
                    </span>
                    <span>
                      <strong>Language: </strong>
                      {program.language}
                    </span>
                    <span>
                      <strong>Link: </strong>
                      <a target="blank" href={program.link}>
                        {program.link}
                      </a>
                    </span>
                    <span>
                      <strong>Main Subjects: </strong>
                      <span target="blank" href=" ">
                        {program.subjects.join(", ")}
                      </span>
                      <br></br>
                      <span>
                        <a
                          key={program._id}
                          href={`/edit/${program._id}`}
                          style={{ border: "none", margin: "none" }}
                          className="text-dark"
                        >
                          <i className="fas fa-user-edit"></i>
                        </a>
                      </span>
                      <span>
                        <a
                          key={program._id}
                          href={`/delete/${program._id}`}
                          style={{ border: "none", margin: "20px" }}
                          className="text-dark"
                        >
                          <i className="fas fa-trash-alt"></i>
                        </a>
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