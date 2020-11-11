import React from "react";
import { hot } from "react-hot-loader";

function SignIn() {
  return (
    <div className="welcome login-container">
        <div className="login-window">
          <h2 className="login-header">Please sign in:</h2>
          <div className="login-input-container">
            <label for="username">Username*</label>
            <input className="login-input" type="text" name="username" required/>
          </div>

          <div className="login-input-container">
            <label for="password">Password*</label>
            <input className="login-input" type="text" name="password" required/>
          </div>

          <div className="login-input-container">
            <button className="login-button">Submit</button>
          </div>
        </div>
    </div>
  );
}

export default hot(module)(SignIn);
