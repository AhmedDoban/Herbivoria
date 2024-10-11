import React, { useState } from "react";
import "./Reservation.css";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Select from "react-dropdown-select";

function Reservation() {
  const [DateOFReservation, SetDateOFReservation] = useState(new Date());
  const [People, SetPeople] = useState();
  const options = [
    {
      value: 1,
      label: "Leanne Graham",
    },
    {
      value: 2,
      label: "Ervin Howell",
    },
  ];

  return (
    <React.Fragment>
      <div className="reservation" id="reservation">
        <div className="container" data-aos="fade-up">
          <div className="head">
            <p>reservation</p>
            <h1>Book your table</h1>
          </div>
          <div className="form-container">
            <div className="right">
              <div className="date">
                <p>Date of reservation</p>
                <Calendar
                  date={DateOFReservation}
                  onChange={(e) => SetDateOFReservation(e)}
                />
              </div>
            </div>
            <div className="left">
              <input type="text" placeholder="Enter your Name" />
              <input type="email" placeholder="enter your Email" required />
              <input type="time" placeholder="Time" />

              <div className="dropDownSlect">
                <Select
                  placeholder="number of people"
                  options={options}
                  onChange={(values) => SetPeople(values)}
                  className="SelectOptionsMenu"
                  dropdownPosition="auto"
                />
              </div>
              <input type="button" value="Find A Table" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Reservation;
