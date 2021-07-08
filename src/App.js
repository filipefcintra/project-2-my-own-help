import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import AddNew from "./components/AddNew";
import Edit from "./components/Edit";
import Search from "./components/Search";
import Delete from "./components/Delete";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Homepage} />
        <Route path="/addnew" component={AddNew} />
        <Route path="/search" component={Search} />
        <Route path="/edit/:_id" component={Edit} />
        <Route path="/delete/:_id" component={Delete} />

        {/* <Route path="/edit" component={EditPage} /> */}
        {/* Tem que fazer a rota subjects ir para a funcao escolhida */}
        {/* <Route path="/subjects" component={this.programming} /> */}
      </BrowserRouter>
    </div>
  );
}
export default App;
