// import axios from "axios";
// import { Component } from "react";
// import { Dropdown } from "bootstrap";
// import { Link } from "react-router-dom";

// export default class NewSearch extends Component {
//   state = {
//     programming: [],
//     language: [],
//     subjects: [],
//     name: [],
//     searchTerm: "",
//     searchResults: [],
//   };
//   componentDidMount = () => {
//     axios
//       .get("https://ironrest.herokuapp.com/labfunctions")
//       .then((response) => {
//         this.arrayFilterProgramming(response.data);
//         this.arrayFilterLanguage(response.data);
//         this.arrayFilterSubject(response.data);
//         this.arrayFilterName(response.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   componentDidUpdate = (prevState) => {
//     if (prevState.searchTerm !== this.state.searchTerm) {
//       this.handleSubmit();
//     }
//   };

//   handleChange = (event) => {
//     this.setState({ searchTerm: event.target.value });
//   };
//   handleSubmit = async (event) => {
//     try {
//       const response = await axios.get(
//         `https://ironrest.herokuapp.com/labfunctions`
//       );
//       let newArray = response.data.filter((element) => {
//         return element.programming
//           .toLowerCase()
//           .includes(this.state.searchTerm.toLowerCase());
//       });
//       console.log(response);
//       this.setState({ searchResults: [...newArray] });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   arrayFilterProgramming(array) {
//     let newArray = array.map((elem) => {
//       return elem.programming;
//     });
//     console.log(newArray);
//     this.setState({ programming: [...new Set(newArray)] });
//   }

//   programProgrammingResults() {
//     this.arrayFilterProgramming.filter();
//   }

//   arrayFilterLanguage(array) {
//     let newArray2 = array.map((elem) => {
//       return elem.language;
//     });
//     console.log(newArray2);
//     this.setState({ language: [...new Set(newArray2)] });
//   }

//   programLanguageResults() {
//     this.arrayFilterLanguage.filter();
//   }

//   arrayFilterSubject(array) {
//     let newArray3 = array.map((elem) => {
//       return elem.subjects;
//     });
//     console.log(newArray3);
//     this.setState({ subjects: [...new Set(newArray3)] });
//   }

//   programSubjectResults() {
//     this.arrayFilterSubject.filter();
//   }

//   arrayFilterName(array) {
//     let newArray4 = array.map((elem) => {
//       return elem.name;
//     });
//     console.log(newArray4);
//     this.setState({ name: [...new Set(newArray4)] });
//   }

//   programNameResults() {
//     this.arrayFilterName.filter();
//   }

//   render() {
//     return (
//       <div>
//         <section class="intro">
//           <div>
//             <div
//               className="mask d-flex align-items-center h-100"
//               style={{ backgroundColor: "" }}
//             >
//               <div className="container" style={{ backgroundColor: "" }}>
//                 <div className="row">
//                   <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
//                     <div className="card mb-2" style={{ backgroundColor: "" }}>
//                       <div className="card-body p-2">
//                         <div className="input-group input-group-lg">
//                           <input
//                             type="text"
//                             className="form-control form-control-lg rounded"
//                             style={{ backgroundColor: "" }}
//                             placeholder="Type Keywords"
//                             aria-label="Type Keywords"
//                             aria-describedby="basic-addon2"
//                             onChange={this.handleChange}
//                             value={this.state.searchTerm}
//                           />
//                           <button
//                             className="btn btn-primary"
//                             type="button"
//                             onClick={this.handleSubmit}
//                           >
//                             <i className="fas fa-search"></i>
//                           </button>
//                           <ul className="list-group">
//                             {this.state.searchResults.map((programa) => {
//                               return (
//                                 <li
//                                   key={programa.cioc}
//                                   className="list-group-item"
//                                 >
//                                   <div className="row">
//                                     <div className="col-8 d-flex flex-column">
//                                       <strong>{programa.name}</strong>
//                                       <span>
//                                         <strong>Program-Language: </strong>
//                                         {programa.programming}
//                                       </span>
//                                       <span>
//                                         <strong>Link: </strong>
//                                         <a target="blank" href=" ">
//                                           {programa.link}
//                                         </a>
//                                       </span>
//                                     </div>
//                                   </div>
//                                 </li>
//                               );
//                             })}
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="card" style={{ backgroundColor: "" }}>
//                       <div className="card-body p-4">
//                         <h6 className="text-black mt-3 mb-4">
//                           Advanced search
//                         </h6>
//                         <div className="row">
//                           <div className="col-md-12 mb-3">
//                             <div className="dropdown">
//                               <a
//                                 className="btn btn-outline-dark btn-lg btn-block dropdown-toggle"
//                                 href="#"
//                                 role="button"
//                                 id="dropdownMenuLink"
//                                 data-mdb-toggle="dropdown"
//                                 aria-expanded="false"
//                               >
//                                 Programming Language
//                               </a>
//                               <div>
//                                 {this.state.programming.map((program) => {
//                                   return (
//                                     <ul
//                                       className="dropdown-menu"
//                                       aria-labelledby="dropdownMenuLink"
//                                     >
//                                       <li>
//                                         <a
//                                           className="dropdown-item"
//                                           to={`/subject/` + program}
//                                         >
//                                           <Link
//                                             to={this.state.programming.program}
//                                           >
//                                             {program}
//                                           </Link>
//                                         </a>
//                                       </li>
//                                     </ul>
//                                   );
//                                 })}
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-md-12 mb-3">
//                             <div className="dropdown">
//                               <a
//                                 className="btn btn-outline-dark btn-lg btn-block dropdown-toggle"
//                                 href="#"
//                                 role="button"
//                                 id="dropdownMenuLink1"
//                                 data-mdb-toggle="dropdown"
//                                 aria-expanded="false"
//                               >
//                                 Subjects
//                               </a>
//                               <ul
//                                 className="dropdown-menu"
//                                 aria-labelledby="dropdownMenuLink1"
//                               >
//                                 {this.state.subjects.map((program) => {
//                                   return (
//                                     <li>
//                                       <a
//                                         className="dropdown-item"
//                                         to={`/subject/` + program}
//                                       >
//                                         <Link to={this.state.subjects.program}>
//                                           {program}
//                                         </Link>
//                                       </a>
//                                     </li>
//                                   );
//                                 })}
//                               </ul>
//                             </div>
//                           </div>
//                           <div className="col-md-6 mb-3">
//                             <div className="dropdown">
//                               <a
//                                 className="btn btn-outline-dark btn-lg btn-block dropdown-toggle"
//                                 href="#"
//                                 role="button"
//                                 id="dropdownMenuLink2"
//                                 data-mdb-toggle="dropdown"
//                                 aria-expanded="false"
//                               >
//                                 Language
//                               </a>
//                               <ul
//                                 className="dropdown-menu"
//                                 aria-labelledby="dropdownMenuLink2"
//                               >
//                                 {this.state.language.map((program) => {
//                                   return (
//                                     <li>
//                                       <a
//                                         className="dropdown-item"
//                                         to={`/subject/` + program}
//                                       >
//                                         <Link to={this.state.language.program}>
//                                           {program}
//                                         </Link>
//                                       </a>
//                                     </li>
//                                   );
//                                 })}
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="row">
//                           <div className="col-md-6 mb-3">
//                             <div className="dropdown">
//                               <a
//                                 className="btn btn-outline-dark btn-lg btn-block dropdown-toggle"
//                                 href="#"
//                                 role="button"
//                                 id="dropdownMenuLink3"
//                                 data-mdb-toggle="dropdown"
//                                 aria-expanded="false"
//                               >
//                                 File Name
//                               </a>
//                               <ul
//                                 className="dropdown-menu"
//                                 aria-labelledby="dropdownMenuLink3"
//                               >
//                                 {this.state.name.map((program) => {
//                                   return (
//                                     <li>
//                                       <a
//                                         className="dropdown-item"
//                                         to={`/subject/` + program}
//                                       >
//                                         <Link to={this.state.name.program}>
//                                           {program}
//                                         </Link>
//                                       </a>
//                                     </li>
//                                   );
//                                 })}
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="d-flex justify-content-between align-items-center mt-4">
//                           <div>
//                             <button type="button" className="btn btn-warning">
//                               Search
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   }
// }
