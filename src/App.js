import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/NavBar";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>      
        <Route exact path="/" component={Homepage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
