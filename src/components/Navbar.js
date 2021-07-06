import React from "react";
import { Link } from "react-router-dom";
import NavDrop from "./NavDrop";
export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="./">
          MyOwnHelp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="./AddNew">
                Add New
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./Search">
                Search
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Subjects
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <NavDrop />
                {/* <li>
                  <Link className="dropdown-item" to="#">
                    classNamees
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Labs
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Videos
                  </Link>
                </li>
              </ul>
            </li> */}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
