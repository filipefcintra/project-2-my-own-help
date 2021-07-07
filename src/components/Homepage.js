import ImgHome from "../img/My-Own-Help.png";
import { Parallax } from "react-parallax";
function Homepage() {
  return (
    <div>
      <Parallax
        className="bg-image text-center shadow-1-strong rounded mb-5 text-white"
        style={{
          backgroundImage: `url(${ImgHome})`,
          padding: "19%",
        }}
        alt="ImgHome"
      >
        <h1 style={{ fontSize: "100px" }}>MyOwnHelp</h1>
      </Parallax>
      <Parallax></Parallax>
      <Parallax></Parallax>
    </div>
  );
}
export default Homepage;
