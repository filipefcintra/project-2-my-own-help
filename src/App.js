import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import AddNew from "./components/AddNew";
import Search from "./components/Search";
import Edit from "./components/Edit";
import Delete from "./components/Delete";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Homepage} />
        <Route path="/addnew" component={AddNew} />
        <Route exact path="/search/:language" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route path="/edit/:_id" component={Edit} />
        <Route path="/delete/:_id" component={Delete} />
      </BrowserRouter>
    </div>
  );
}
export default App;
