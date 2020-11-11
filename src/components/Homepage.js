import React, { useState } from "react";
import Add from "./Add"
import Campsites from "./Campsites"
import { Link } from "react-router-dom";
import { hot } from "react-hot-loader";

function Homepage() {
  const [ displayAdd, setDisplayAdd ] = useState(false);

  return (
    <div>
      <nav>
        <h3 className="corner-logo">BoopCamp</h3>
        
        <div className="nav-links-container">
          <div>Logged in as</div>
          <div className="logout-button">Log out</div>
        </div>
      </nav>

      <header className="hero">
        <h1 className="hero-welcome">Welcome to BoopCamp!</h1>
        
        <p className="hero-text">
          View all the cool campsites around Japan recommend by other camp-lovers.
        </p>
        
        <button className="add-button" onClick={() => setDisplayAdd(true)}>Add campsite</button>
        
        {displayAdd && <Add setDisplayAdd={setDisplayAdd}/>}
      </header>

      <main>
        <Campsites/>
      </main>
    </div>
  );
}

export default hot(module)(Homepage);
