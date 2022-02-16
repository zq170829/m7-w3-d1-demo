import * as React from "react";
import Page1 from "./Components/Page1/Page1";
import Page2 from "./Components/Page2/Page2";
import SphereApp from "./Components/Page3/SphereApp";
import Home from "./Components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Page1" component={Page1} />
        <Route path="/Page2" component={Page2} />
        <Route path="/Page3" component={SphereApp} />
      </Switch>
    </BrowserRouter>
  );
}
