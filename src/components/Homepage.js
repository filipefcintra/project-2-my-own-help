import ImgHome from "../img/My-Own-Help.png";
import imgSearch from "../img/My-Own-Search.png";
import { Parallax } from "react-parallax";
import imgFilipe from "../img/filipe.png";
import imgRafael from "../img/rafael.png";
import "../App.css";
export default function Homepage() {
  return (
    <div>
      <Parallax strength={100} bgImage={ImgHome}>
        <div className="background-color" style={{ height: 800 }}>
          <h1
            className="bg-image text-center shadow-1-strong rounded mb-5 text-white d-none d-sm-block"
            style={{
              fontSize: "100px",
              paddingTop: "13%",
            }}
          >
            MyOwnHelp
            <br></br>
            <div style={{ fontSize: "25px", marginTop: "10px" }}>
              Trying to make your search easier
            </div>
          </h1>
        </div>
      </Parallax>
      <Parallax strength={500} bgImage={imgSearch}>
        <div className="background-color" style={{ height: 600 }}>
          <h1
            className="bg-image text-center shadow-1-strong rounded mb-5 text-white d-none d-sm-block"
            style={{
              fontSize: "40px",
              paddingTop: "4%",
            }}
          >
            Maintenance mode is on
            <br />A brand new forum is coming
          </h1>
        </div>
      </Parallax>
      <Parallax strength={100} bgImage={ImgHome}>
        <div className="background-color" style={{ height: 730 }}>
          <h1
            className="bg-image text-center shadow-1-strong rounded mb-5 text-white d-none d-sm-block"
            style={{
              fontSize: "50px",
              padding: "3%  3%",
            }}
          >
            Meet the team
          </h1>
          <div className="container">
            <div
              style={{ paddingLeft: "10%", justifyContent: "space-between" }}
              className="row row-cols-md-4 "
            >
              <div>
                <div className="card">
                  <img src={imgFilipe} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Filipe F Cintra</h5>
                    <p
                      style={{ fontSize: "20px" }}
                      className="card-text text-md-left"
                    >
                      <br />
                      Developing a new passion for development.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="card">
                  <img src={imgRafael} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Rafael Alves</h5>
                    <p style={{ fontSize: "20px" }} className="card-text">
                      <br />
                      New developer trying to discover this new world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        A
      </Parallax>
    </div>
  );
}
