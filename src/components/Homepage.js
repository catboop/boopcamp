import React, { useState } from "react";
import { Link } from "react-router-dom";
import { hot } from "react-hot-loader";

function Homepage() {
  const [ displayAdd, setDisplayAdd ] = useState(false);

  return (
    <div>
      <nav>
        <div>
          <h3 className="corner-logo">BoopCamp</h3>
        </div>
        <div className="nav-links-container">
          <div>Logged in as</div>
          <Link to="/">
            <div className="logout-button">Log out</div>
          </Link>
        </div>
      </nav>
      <header className="hero">
        <h1 className="hero-welcome">Welcome to BoopCamp!</h1>
        <p className="hero-text">
          View cool campsites around Japan recommended by camp-lovers
        </p>
        <button className="add-button" onClick={() => setDisplayAdd(true)}>Add campsite</button>
        
        {displayAdd && (
        <div className="add-container">
          <div className="new-input-container">
            <label for="camp name">Camp Name*:</label>
            <input type="text" className="new-input" name="name" placeholder="Konashidaira" required />
          </div>
          <div className="new-input-container">
            <label for="image">Address:</label>
            <input type="text" className="new-input" name="address" placeholder="Kamikochi, Nagano, Japan 390-1516" />
          </div>
          <div className="new-input-container">
            <label for="image">Image:</label>
            <input type="text" className="new-input" name="image" placeholder="www.image-url.com" />
          </div>
          <div className="new-input-container">
            <label for="website">Website:</label>
            <input type="text" className="new-input" name="website" placeholder="www.nihonalpskankou.com" />
          </div>
          <div className="new-input-container">
            <label for="description">Description:</label>
            <input type="text" className="new-input" name="description" placeholder="Great for mountain-lovers!"
            />
          </div>
          <div className="new-input-container new-submit">
            <button className="submit-new-buttom">Submit</button>
            <button className="cancel-button" onClick={() => setDisplayAdd(false)}>Cancel</button>
          </div>
        </div>)}
      </header>
      <main></main>
    </div>
  );
}

export default hot(module)(Homepage);
