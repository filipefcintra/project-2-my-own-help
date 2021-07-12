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
        <div className="background-color" style={{ height: 600 }}>
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
    </div>
  );
}
