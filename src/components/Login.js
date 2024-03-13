import React from "react";
import "./login.css";
function Login() {
  return (
    <div>
      <div className="login">
        <img src="/twitter-logo-4 1.png" alt="twitter-logo" />
        <h1>Login to Twitter</h1>
        <form className="login-form">
          <input type="text" placeholder="Phone Number , Email Address" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </form>
        <div className="form-footer">
          <div>Forgot Password</div>
          <div>Sign-up for Twitter</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
