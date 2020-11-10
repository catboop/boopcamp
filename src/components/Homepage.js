import React from "react";
import { Link } from "react-router-dom";
import { hot } from "react-hot-loader";

function Homepage() {
  return (
    <main className="welcome">
      <div className="welcome-text-container">
        <h1 className="welcome-text">Welcome to BoopCamp!</h1>
      </div>

      {/* when button is clicked, it will redirect to page showing all campsites */}
      <div>
        <Link to="/campsites">
          <button className="view-button" alt="view campsites">
            View campsites
          </button>
        </Link>
      </div>
    </main>
  );
}

export default hot(module)(Homepage);
