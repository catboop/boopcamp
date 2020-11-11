import React from "react";
import { Link } from "react-router-dom";
import { hot } from "react-hot-loader";
import "../App.css";

function Welcome() {
  return (
    <main className="welcome">

        <h1 className="welcome-text">Welcome to BoopCamp!</h1>

        <Link to="/signin">
          <button className="signin-button welcome-button" alt="sign in">
            <span>Log in</span>
          </button>
        </Link>

        <Link to="/signup">
          <button className="signup-button welcome-button" alt="sign up">
            <span>Sign up</span>
          </button>
        </Link>

    </main>
  );
}

export default hot(module)(Welcome);
