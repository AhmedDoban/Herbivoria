import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <React.Fragment>
      <div className="loading">
        <div className="container">
          <div className="bullets">
            <div className="bullet"></div>
            <div className="bullet"></div>
            <div className="bullet"></div>
          </div>
          <p>Loading</p>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Loading;
