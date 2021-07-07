import ImgHome from "../img/My-Own-Help.png";
import { Parallax } from "react-parallax";
function Homepage() {
  return (
    <div>
      <Parallax bgImage={ImgHome}>
        <div style={{ height: 600 }}>
          <h1
            className=" bg-image text-center shadow-1-strong rounded mb-5 text-white"
            style={{
              fontSize: "100px",
              paddingTop: "13%",
            }}
          >
            MyOwnHelp
          </h1>
        </div>
      </Parallax>
      <Parallax>
        <h1></h1>
      </Parallax>
      <Parallax></Parallax>
    </div>
  );
}
export default Homepage;
