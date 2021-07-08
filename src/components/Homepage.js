import ImgHome from "../img/My-Own-Help.png";
import { Parallax } from "react-parallax";
import "../App.css";

export default function Homepage() {
  return (
    <div>
      <Parallax bgImage={ImgHome}>
        <div className="background-color" style={{ height: 600 }}>
          <h1
            className="bg-image text-center shadow-1-strong rounded mb-5 text-white d-none d-sm-block"
            style={{
              fontSize: "100px",
              paddingTop: "13%",
            }}
          >
            MyOwnHelp
          </h1>
        </div>
      </Parallax>
    </div>
  );
}
