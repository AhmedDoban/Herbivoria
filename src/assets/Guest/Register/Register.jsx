import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <React.Fragment>
      <div className="register">
        <div className="left">
          <div className="content">
            <h2>Herbivoria</h2>
            <h5>Let's make your Account</h5>
            <p>Welcome To Herbivoria, Register Not - Order now</p>
          </div>
          <div className="content">
            <div className="input-card">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="input-card">
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="input-card">
              <input type="phone" placeholder="Phone  EX:(020) 11111111111" />
            </div>
            <div className="input-card">
              <input type="email" placeholder="Enter your Email" />
            </div>
            <div className="input-card">
              <input type="password" placeholder="Enter your password" />
            </div>
            <div className="content-gender">
              <div className="input-check">
                <input type="radio" id="male" name="gender" />
                <label htmlFor="male">male</label>
              </div>
              <div className="input-check">
                <input type="radio" id="female" name="gender" />
                <label htmlFor="female">female</label>
              </div>
            </div>
            <div className="input-policy">
              <div className="input-check">
                <input type="checkbox" id="policy" />
                <label htmlFor="policy">accept all right policy</label>
              </div>
            </div>
            <div className="input-card">
              <button>Register</button>
            </div>
            <div className="content">
              <p>
                Already Have an account ? <Link to="/">Sign in </Link>
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
export default Register;
