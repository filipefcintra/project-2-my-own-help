import React from 'react';
import {Link, NavLink} from "react-router-dom";

export default function Navbar() {
  return (
<nav class="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" href="#">
      MyOwnHelp
    </Link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="#">
            Home
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#">
            Add New
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#">
            Search
          </Link>
        </li>
        <li class="nav-item dropdown">
          <Link
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Subjects
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <Link class="dropdown-item" href="#">
                Classes
              </Link>
            </li>
            <li>
              <Link class="dropdown-item" href="#">
                Labs
              </Link>
            </li>
            <li>
              <Link class="dropdown-item" href="#">
                Videos
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}
