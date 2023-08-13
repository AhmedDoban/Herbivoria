import React from "react";
import "./ContactUs.css";
import Footer from "./../../Components/Footer/Footer";
import { NavLink } from "react-router-dom";
import Frequently from "./Frequently/Frequently";
import Waves from "./../../Components/Waves/Waves";

function ContactUs() {
  return (
    <React.Fragment>
      <div className="ContactUs">
        <div className="container">
          <div className="links">
            <div className="menu-nav">
              <NavLink to="/">Home </NavLink>
              <NavLink to="/Contact_Us">Contact Us </NavLink>
            </div>
          </div>
          <div className="content" data-aos="fade-up">
            <div className="left">
              <h1>
                <i className="fa-solid fa-headset" />
                Contact US
              </h1>
              <p>
                Need to get in touch with us ? Either fill out the form with
                your inquiry or find the department email you'd like to contact
                below .
              </p>
              <div className="contact-box">
                <a href="tel:+20 1111111111" className="contact">
                  <i className="fa-solid fa-phone" />
                  <span>+20 1111111111</span>
                </a>
                <div className="contact">
                  <i className="fa-solid fa-location-dot" />
                  <span>82 St Sphinx street</span>
                </div>
              </div>
              <div className="social">
                <i className="fa-brands fa-facebook-f" />
                <i className="fa-brands fa-twitter" />
                <i className="fa-brands fa-youtube" />
              </div>
            </div>
            <div className="right">
              <div className="box">
                <div className="input-box">
                  <input
                    type="text"
                    name=""
                    id="FirstName"
                    placeholder="First Name"
                  />
                  <label htmlFor="FirstName">First Name</label>
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    name=""
                    id="LasttName"
                    placeholder="Last Name"
                  />
                  <label htmlFor="LasttName">Last Name</label>
                </div>
              </div>
              <div className="box">
                <div className="input-box">
                  <input
                    type="email"
                    name=""
                    id="email"
                    placeholder="Enter Your Email"
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="box">
                <div className="input-box">
                  <textarea
                    placeholder="Enter Your Message here ..."
                    id="Help"
                  />
                  <label htmlFor="Help">What Can We Help you with ?</label>
                </div>
              </div>
              <div className="box">
                <div className="input-box">
                  <input type="button" value="Submit" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Waves styleWave="up" />
      {/************************** start Frequently *****************************/}
      <Frequently />
      {/************************** End Frequently *****************************/}
      {/************************** start Footer *****************************/}
      <Footer />
      {/************************** End Footer *****************************/}
    </React.Fragment>
  );
}
export default ContactUs;
