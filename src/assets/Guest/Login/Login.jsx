import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <React.Fragment>
      <div className="login">
        <div className="left">
          <div className="content">
            <h2>Herbivoria</h2>
            <h5>Let's make your Order</h5>
            <p>Welcome Back, Sign in with your email address and password</p>
          </div>
          <div className="content">
            <div className="input-card">
              <input type="email" id="email" placeholder="Enter your Email" />
            </div>
            <div className="input-card">
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="input-remember">
              <div className="input-check">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link to="">Forget password ?</Link>
            </div>
            <div className="input-card">
              <button>Sign In</button>
            </div>
            <div className="content">
              <p>
                Don't Have an account ? <Link to="register">Sign up </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={require("../../imgs/login.avif")} alt="login" />
        </div>
      </div>
    </React.Fragment>
  );
}
export default Login;
