import { Link, NavLink } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            MyOwnHelp
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Add New
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Search
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Subjects
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      classNamees
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Labs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
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
      <div className="container">
        <div className="row justify-content-start">
          <Link
            className="col-4"
            style={{
              fontWeight: "bold",
              color: "white",
              textDecoration: "inherit",
            }}
          >
            <div className="container-sm">Javascript</div>
          </Link>
          <Link
            className="col-4"
            style={{
              fontWeight: "bold",
              color: "white",
              textDecoration: "inherit",
            }}
          >
            <div>HTML</div>
          </Link>
        </div>
        <br></br>
        <div className="row justify-content-center">
          <Link
            className="col-4"
            style={{
              fontWeight: "bold",
              color: "white",
              textDecoration: "inherit",
            }}
          >
            <div className="col-4">CSS</div>
          </Link>
          <Link
            className="col-4"
            style={{
              fontWeight: "bold",
              color: "white",
              textDecoration: "inherit",
            }}
          >
            <div className="col-4">Node</div>
          </Link>
        </div>
        <br></br>
        <div className="row justify-content-end">
          <Link
            className="col-4"
            style={{
              fontWeight: "bold",
              color: "white",
              textDecoration: "inherit",
            }}
          >
            <div className="col-4">React</div>
          </Link>
          <Link
            className="col-4"
            style={{
              fontWeight: "bold",
              color: "white",
              textDecoration: "inherit",
            }}
          >
            <div className="col-4">Python</div>
          </Link>
        </div>
        <br></br>
        <div className="row justify-content-around">
          <Link
            className="col-4"
            style={{
              fontWeight: "bold",
              color: "white",
              textDecoration: "inherit",
            }}
          >
            <div className="col-4">Java</div>
          </Link>
          <Link
            className="col-4"
            style={{
              fontWeight: "bold",
              color: "white",
              textDecoration: "inherit",
            }}
          >
            <div className="col-4">C#</div>
          </Link>
        </div>
        <br></br>
        <div className="row justify-content-between">
          <Link
            className="col-4"
            style={{
              fontWeight: "bold",
              color: "white",
              textDecoration: "inherit",
            }}
          >
            <div className="col-4">C++</div>
          </Link>
          <Link
            className="col-4"
            style={{
              fontWeight: "bold",
              color: "white",
              textDecoration: "inherit",
            }}
          >
            <div className="col-4">PHP</div>
          </Link>
        </div>
        <br></br>
        <div className="row justify-content-evenly">
          <Link
            className="col-4"
            style={{
              fontWeight: "bold",
              color: "white",
              textDecoration: "inherit",
            }}
          >
            <div className="col-4">.Net</div>
          </Link>
          <Link
            className="col-4"
            style={{
              fontWeight: "bold",
              color: "white",
              textDecoration: "inherit",
            }}
          >
            <div className="col-4">UX/UI</div>
          </Link>
        </div>
      </div>
      <br></br>
      <div className="container">
        <div className="row justify-content-start">
          <Link
            className="col-4"
            style={{
              fontWeight: "bold",
              color: "white",
              textDecoration: "inherit",
            }}
          >
            <div className="col-4">Ruby</div>
          </Link>
          <Link
            className="col-4"
            style={{
              fontWeight: "bold",
              color: "white",
              textDecoration: "inherit",
            }}
          >
            <div className="col-4">ASP</div>
          </Link>
        </div>
        <br></br>
        <div className="row justify-content-center">
          <Link
            className="col-4"
            style={{
              fontWeight: "bold",
              color: "white",
              textDecoration: "inherit",
            }}
          >
            <div className="col-4">R</div>
          </Link>
          <Link
            className="col-4"
            style={{
              fontWeight: "bold",
              color: "white",
              textDecoration: "inherit",
            }}
          >
            <div className="col-4">Pascal</div>
          </Link>
        </div>
        <br></br>
        <div className="row justify-content-evenly">
          <Link
            className="col-4"
            style={{
              fontWeight: "bold",
              color: "white",
              textDecoration: "inherit",
            }}
          >
            <div className="col-4">Visual Basic</div>
          </Link>
          <Link
            className="col-4"
            style={{
              fontWeight: "bold",
              color: "white",
              textDecoration: "inherit",
            }}
          >
            <div className="col-4">Lua</div>
          </Link>
        </div>
        <br></br>
        <div className="row justify-content-center">
          <Link
            className="col-4"
            style={{
              fontWeight: "bold",
              color: "white",
              textDecoration: "inherit",
            }}
          >
            <div className="col-4">Github</div>
          </Link>
          <Link
            className="col-4"
            style={{
              fontWeight: "bold",
              color: "white",
              textDecoration: "inherit",
            }}
          >
            <div className="col-4">C#</div>
          </Link>
        </div>
        <br></br>
        <div className="row justify-content-start">
          <Link
            className="col-4"
            style={{
              fontWeight: "bold",
              color: "white",
              textDecoration: "inherit",
            }}
          >
            <div className="col-4">MongoDB</div>
          </Link>
          <Link
            className="col-4"
            style={{
              fontWeight: "bold",
              color: "white",
              textDecoration: "inherit",
            }}
          >
            <div className="col-4">SQL</div>
          </Link>
        </div>
        <br></br>
        <div className="row justify-content-center">
          <Link
            className="col-4"
            style={{
              fontWeight: "bold",
              color: "white",
              textDecoration: "inherit",
            }}
          >
            <div className="col-4">Swift</div>
          </Link>
          <Link
            className="col-4"
            style={{
              fontWeight: "bold",
              color: "white",
              textDecoration: "inherit",
            }}
          >
            <div className="col-4">Perl</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
