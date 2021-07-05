import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavDropdown from "./components/NavDropdown";

import Homepage from "./components/Homepage";
import AddNew from "./components/AddNew";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Homepage} />
        <Route path="/add-new" component={AddNew} />
        <Route path="/search" component={AddNew} />
        {/* Tem que fazer a rota subjects ir para a funcao escolhida */}
        {/* <Route path="/subjects" component={this.programming} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
