import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { hot } from "react-hot-loader";
import "./App.css";

//components
import Welcome from "./components/Welcome";
import Homepage from "./components/Homepage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Welcome}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/home" component={Homepage}/>
      </div>
    </Router>
  );
}

export default hot(module)(App);
