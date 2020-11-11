import React from "react";
import { hot } from "react-hot-loader";

// TODO
// pass props to react router to reuse signin component for signin and signup windows
// add logic to post new user to userApi

function SignUp() {

  return (
    <div className="welcome login-container">
        <div className="login-window">
          <h2 className="login-header">Please sign up:</h2>
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

export default hot(module)(SignUp);
