import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Search from "./components/Search";
import ProfileDetails from "./components/Details";
import NavBar from "./components/NavBar";
import Pagination from "./components/Pagination";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container p-2">
        <Switch>
          <Route exact path="/" component={Search} />
          {/* <Route exact path="/" component={Pagination}/> */}
          <Route exact path="/:login" component={ProfileDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
