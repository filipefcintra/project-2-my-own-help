// import axios from "axios";
// import { Dropdown } from "bootstrap";
// import { Component } from "react";

// class NavDropdown extends Component {
//   state = {
//     programming: "",
//   };
//   componentDidMount = () => {
//     axios
//       .get("https://ironrest.herokuapp.com/labfunctions")
//       .then((response) => {
//         console.log(response);

//         this.setState({ programming: [...response.data] });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   render() {
//     return (
//       <div>
//         {this.state.programming.map((program) => {
//           return (
//             <li>
//               <a
//                 className="dropdown-item"
//                 to={`/subject/` + program.programming}
//               >
//                 {program.programming}
//               </a>
//             </li>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default NavDropdown;
