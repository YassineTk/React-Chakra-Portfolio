import React from "react";
import "./App.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Home from "./components/Home";
import "./components/FontawesomeIcons";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
