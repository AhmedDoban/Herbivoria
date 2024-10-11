import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib";

function Register() {
  const [RegisterData, SetRegisterData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
  });
  const [Phone, SetPhone] = useState("");

  return (
    <React.Fragment>
      <div className="Register">
        <div className="container">
          <div className="RegisterCard">
            <div className="left" data-aos="zoom-in">
              <div className="content">
                <img src={require("../../imgs/Herbivoria.png")} alt="logo" />
                <h5>Let's make your Account</h5>
                <p>Welcome To Herbivoria, Register Now - Order now</p>
              </div>
              <div className="content">
                <div className="Flex-card">
                  <div className="input-card">
                    <input type="text" placeholder="First Name" />
                  </div>
                  <div className="input-card">
                    <input type="text" placeholder="Last Name" />
                  </div>
                </div>
                <div className="input-card">
                  <PhoneInput
                    country="EG"
                    value={Phone}
                    onChange={SetPhone}
                    placeholder="+20"
                    specialLabel={false}
                  />
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
                    <label htmlFor="male">Male</label>
                  </div>
                  <div className="input-check">
                    <input type="radio" id="female" name="gender" />
                    <label htmlFor="female">Female</label>
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
              <img src={require("../../imgs/resturant.jpg")} alt="Register" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Register;
