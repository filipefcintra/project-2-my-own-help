import { Link, NavLink } from "react-router-dom";
function Homepage() {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            MyOwnHelp
          </a>
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
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Add New
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Search
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Subjects
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Classes
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Labs
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Videos
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br></br>
      <br></br>
      <div class="container">
        <div class="row justify-content-start">
          <Link
            class="col-4"
            style={{
              backgroundColor: "orange",
              color: "inherit",
              textDecoration: "inherit",
            }}
          >
            <div background-color="black" class="container-sm">
              Javascript
            </div>
          </Link>
          <Link
            class="col-4"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div>HTML</div>
          </Link>
        </div>
        <br></br>
        <div class="row justify-content-center">
          <Link
            class="col-4"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div class="col-4">CSS</div>
          </Link>
          <Link
            class="col-4"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div class="col-4">Node</div>
          </Link>
        </div>
        <br></br>
        <div class="row justify-content-end">
          <Link
            class="col-4"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div class="col-4">React</div>
          </Link>
          <Link
            class="col-4"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div class="col-4">Python</div>
          </Link>
        </div>
        <br></br>
        <div class="row justify-content-around">
          <Link
            class="col-4"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div class="col-4">Java</div>
          </Link>
          <Link
            class="col-4"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div class="col-4">C#</div>
          </Link>
        </div>
        <br></br>
        <div class="row justify-content-between">
          <Link
            class="col-4"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div class="col-4">C++</div>
          </Link>
          <Link
            class="col-4"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div class="col-4">PHP</div>
          </Link>
        </div>
        <br></br>
        <div class="row justify-content-evenly">
          <Link
            class="col-4"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div class="col-4">.Net</div>
          </Link>
          <Link
            class="col-4"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div class="col-4">UX/UI</div>
          </Link>
        </div>
      </div>
      <br></br>
      <div class="container">
        <div class="row justify-content-start">
          <Link
            class="col-4"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div class="col-4">Ruby</div>
          </Link>
          <Link
            class="col-4"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div class="col-4">ASP</div>
          </Link>
        </div>
        <br></br>
        <div class="row justify-content-center">
          <Link
            class="col-4"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div class="col-4">R</div>
          </Link>
          <Link
            class="col-4"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div class="col-4">Pascal</div>
          </Link>
        </div>
        <br></br>
        <div class="row justify-content-evenly">
          <Link
            class="col-4"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div class="col-4">Visual Basic</div>
          </Link>
          <Link
            class="col-4"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div class="col-4">Lua</div>
          </Link>
        </div>
        <br></br>
        <div class="row justify-content-center">
          <Link
            class="col-4"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div class="col-4">Github</div>
          </Link>
          <Link
            class="col-4"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div class="col-4">C#</div>
          </Link>
        </div>
        <br></br>
        <div class="row justify-content-start">
          <Link
            class="col-4"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div class="col-4">MongoDB</div>
          </Link>
          <Link
            class="col-4"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div class="col-4">SQL</div>
          </Link>
        </div>
        <br></br>
        <div class="row justify-content-center">
          <Link
            class="col-4"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div class="col-4">Swift</div>
          </Link>
          <Link
            class="col-4"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div class="col-4">Perl</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
