import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "../Components/Navbar/Navbar";

function Auth() {
  return (
    <React.Fragment>
      <div className="auth">
        {/*=========================================================
           # Navbar 
          =========================================================*/}
        <Navbar />
        {/*=========================================================
           # Pages Routes 
          =========================================================*/}
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Auth;
