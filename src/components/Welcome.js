import React from "react";
import { Link } from "react-router-dom";
import { hot } from "react-hot-loader";
import "../App.css";

function Welcome() {
  return (
    <main className="welcome">
      <div className="welcome-text-container">
        <h1 className="welcome-text">Welcome to BoopCamp!</h1>
      </div>

      {/* when button is clicked, it will redirect to page showing all campsites */}
      <div>
        <Link to="/signin">
          <button className="signin-button" alt="sign in">
            Sign in
          </button>
        </Link>
        <Link to="/signup">
          <button className="signup-button" alt="sign up">
            Sign up
          </button>
        </Link>
      </div>
    </main>
  );
}

export default hot(module)(Welcome);
