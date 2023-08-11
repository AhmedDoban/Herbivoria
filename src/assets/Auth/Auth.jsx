import React, { createContext, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "../Components/Navbar/Navbar";
import Menu from "./Menu/Menu";
import { FoodData } from "../Data/Food";

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

  const HandleISInCart = (index) => {
    const Data = [...Food];
    Data[index] = { ...Data[index], isInCart: !Data[index].isInCart };
    SetFood(Data);
  };

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
          <i
            className="fa-solid fa-arrow-up back-to-top"
            onClick={() => scrollToTop()}
            ref={back_to_top_btn}
          />
          <FoodContext.Provider value={Food}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Menu" element={<Menu SetFood={SetFood} />} />
            </Routes>
          </FoodContext.Provider>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Auth;
