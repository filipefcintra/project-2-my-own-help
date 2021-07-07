import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import AddNew from "./components/AddNew";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path="" component={Homepage} />
        <Route path="/addnew" component={AddNew} />
        <Route path="/search" component={Search} />
        {/* <Route path="/edit" component={EditPage} /> */}
        {/* Tem que fazer a rota subjects ir para a funcao escolhida */}
        {/* <Route path="/subjects" component={this.programming} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
