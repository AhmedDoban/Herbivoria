import React, { createContext, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "../Components/Navbar/Navbar";
import Menu from "./Menu/Menu";
import { FoodData } from "../Data/Food";
import FoodDetails from "../Components/Food Details/FoodDetails";
import ContactUs from "./Contact Us/ContactUs";
import AboutUs from "./About Us/AboutUs";

export const FoodContext = createContext();
function Auth() {
  const [Food, SetFood] = useState(FoodData);
  const back_to_top_btn = useRef();

  /*************************************************
   # Scroll Events
  *****************************************************/
  window.onscroll = () => {
    if (window.scrollY > 150) {
      back_to_top_btn.current.classList.add("active");
    } else {
      back_to_top_btn.current.classList.remove("active");
    }

    return () => (window.onscroll = null);
  };
  /*************************************************
   # Scroll Events
  *****************************************************/
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const HandleISInCart = (id) => {
    const Data = [...Food];
    let indexNumber = -1;
    Data.map((item, index) => (item.id === id ? (indexNumber = index) : null));
    Data[indexNumber] = {
      ...Data[indexNumber],
      isInCart: !Data[indexNumber].isInCart,
    };
    SetFood(Data);
  };

  return (
    <React.Fragment>
      <div className="auth">
        {/*=========================================================
           # Navbar 
          =========================================================*/}
        <FoodContext.Provider value={Food}>
          <Navbar />
        </FoodContext.Provider>
        {/*=========================================================
           # Pages Routes 
          =========================================================*/}
        <div className="pages">
          <i
            className="fa-solid fa-arrow-up back-to-top"
            onClick={() => scrollToTop()}
            ref={back_to_top_btn}
          />
          <FoodContext.Provider value={Food}>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    HandleISInCart={HandleISInCart}
                    scrollToTop={scrollToTop}
                  />
                }
              />
              <Route
                path="/Menu"
                element={
                  <Menu
                    SetFood={SetFood}
                    HandleISInCart={HandleISInCart}
                    scrollToTop={scrollToTop}
                  />
                }
              />
              <Route
                path="/Details/:id"
                element={
                  <FoodDetails
                    HandleISInCart={HandleISInCart}
                    scrollToTop={scrollToTop}
                  />
                }
              />
              <Route
                path="/Contact_Us"
                element={<ContactUs HandleISInCart={HandleISInCart} />}
              />
              <Route path="/About_Us" element={<AboutUs />} />
            </Routes>
          </FoodContext.Provider>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Auth;
