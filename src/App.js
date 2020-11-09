import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { hot } from "react-hot-loader";
import "./App.css";

//components
import Homepage from "./components/Homepage";
import Campsites from "./components/Campsites";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Homepage}/>
        <Route path="/campsites" component={Campsites}/>
      </div>
    </Router>
  );
}

export default hot(module)(App);
