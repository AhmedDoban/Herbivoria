import React from "react";
import "./FormContact.css";

function FormContact() {
  return (
    <React.Fragment>
      <div className="formcontact">
        <div className="container" data-aos="fade-up">
          <div className="head">
            <p>Contact</p>
            <h1>Enter your Issue</h1>
          </div>
          <div className="form-container">
            <div className="left">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="enter your Email" required />
            </div>
            <div className="right">
              <textarea placeholder="Enter Your Message here ..." />
              <input type="button" value="Submit" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default FormContact;
