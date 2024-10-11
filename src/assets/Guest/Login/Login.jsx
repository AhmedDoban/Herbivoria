import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login({ SetAuthLogin, Remember, SetRemember }) {
  const HandleLogin = () => {
    if (Remember) {
      localStorage.setItem("Herbivoria-login", true);
    } else {
      sessionStorage.setItem("Herbivoria-login", true);
    }
    SetAuthLogin(true);
  };
  return (
    <React.Fragment>
      <div className="login">
        <div className="container">
          <div className="loginCard">
            <div className="left" data-aos="zoom-in">
              <div className="content">
                <img src={require("../../imgs/Herbivoria.png")} alt="logo" />
                <h5>Let's make your Order</h5>
                <p>
                  Welcome Back, Sign in with your email address and password
                </p>
              </div>
              <div className="content">
                <div className="input-card">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your Email"
                  />
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
                    <input
                      type="checkbox"
                      id="remember"
                      checked={Remember}
                      onChange={() => SetRemember(!Remember)}
                    />
                    <label htmlFor="remember">Remember me</label>
                  </div>
                  <Link to="">Forget password ?</Link>
                </div>
                <div className="input-card">
                  <button onClick={() => HandleLogin()}>Sign In</button>
                </div>
                <div className="content">
                  <p>
                    Don't Have an account ? <Link to="register">Sign up </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={require("../../imgs/resturant.jpg")} alt="login" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Login;
