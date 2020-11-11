import React, { useState } from "react";
import  { Redirect } from 'react-router-dom';
import { hot } from "react-hot-loader";

function SignIn() {
  const [ signedIn, setSignedIn ] = useState(false);

  function loginHandler() {
    // TODO
    // authenticate user
    setSignedIn(true);
  }

  return (
    <div className="welcome login-container">
        <div className="login-window">

          <h2 className="login-header">Please log in:</h2>

          <div className="login-input-container">
            <label for="username">Username*</label>
            <input className="login-input" type="text" name="username" required/>
          </div>

          <div className="login-input-container">
            <label for="password">Password*</label>
            <input className="login-input" type="text" name="password" required/>
          </div>

          <div className="login-input-container">
            <button className="login-button" onClick={loginHandler}>Submit</button>
          </div>

        </div>
        
        {signedIn && <Redirect to="/home"/>}
    </div>
  );
}

export default hot(module)(SignIn);
