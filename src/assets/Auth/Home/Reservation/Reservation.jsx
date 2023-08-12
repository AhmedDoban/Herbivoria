import React, { useState } from "react";
import "./Reservation.css";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function Reservation() {
  const [DateOFReservation, SetDateOFReservation] = useState(new Date());
  const [Active, SetACtive] = useState(false);
  return (
    <React.Fragment>
      <div className="reservation" id="reservation">
        <div className="container" data-aos="fade-up">
          <div className="head">
            <p>reservation</p>
            <h1>Book your table</h1>
          </div>
          <div className="form-container">
            <div className="left">
              <input type="text" placeholder="Enter your Name" />
              <div className="date">
                <p>Date of reservation</p>
                <i
                  className={
                    Active
                      ? "fa-regular fa-calendar active"
                      : "fa-regular fa-calendar"
                  }
                  onClick={() => SetACtive(!Active)}
                />
                <Calendar
                  date={DateOFReservation}
                  onChange={(e) => SetDateOFReservation(e)}
                  className={Active ? "Calender active" : "Calender"}
                />
              </div>
              <input
                type="number"
                placeholder="number of people"
                min={0}
                max={10}
                onKeyDown={(e) => e.preventDefault()}
              />
            </div>
            <div className="right">
              <input type="email" placeholder="enter your Email" required />
              <input type="time" placeholder="Time" />
              <input type="button" value="Find A Table" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Reservation;
