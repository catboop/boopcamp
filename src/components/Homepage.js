import React from "react";
import { hot } from "react-hot-loader";

function Homepage() {
  return (
   <main className="welcome">
       <div className="welcome-text-container"><h1 className="welcome-text">Welcome to BoopCamp!</h1></div>
       <div><button className="view-button">View campsites</button></div>
   </main>
  );
}

export default hot(module)(Homepage);
