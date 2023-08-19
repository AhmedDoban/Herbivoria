import React, { createContext, useRef, useState, lazy, Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Loading from "../Components/Loading/Loading";
import { FoodData } from "../Data/Food";

const Home = lazy(() => import("./Home/Home"));
const Menu = lazy(() => import("./Menu/Menu"));
const FoodDetails = lazy(() =>
  import("../Components/Food Details/FoodDetails")
);
const ContactUs = lazy(() => import("./Contact Us/ContactUs"));
const AboutUs = lazy(() => import("./About Us/AboutUs"));
const Cart = lazy(() => import("./Cart/Cart"));
const NotFounded = lazy(() => import("../Components/Not Founded/NotFounded"));

export const FoodContext = createContext();
function Auth({ SetAuthLogin }) {
  const [Food, SetFood] = useState(FoodData);
  const back_to_top_btn = useRef();
  const Navigate = useNavigate();

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

  const HandleIncrement = (id) => {
    const Data = [...Food];
    let indexNumber = -1;
    Data.map((item, index) => (item.id === id ? (indexNumber = index) : null));
    let Count = Data[indexNumber].count;
    Count++;
    Data[indexNumber] = {
      ...Data[indexNumber],
      count: Count,
    };

    SetFood(Data);
  };
  const HandleDecrement = (id) => {
    const Data = [...Food];
    let indexNumber = -1;
    Data.map((item, index) => (item.id === id ? (indexNumber = index) : null));
    let Count = Data[indexNumber].count;
    Count--;

    if (Count <= 0) {
      Count = 0;
      Data[indexNumber] = {
        ...Data[indexNumber],
        count: Count,
      };
      SetFood(Data);
      return;
    }
    Data[indexNumber] = {
      ...Data[indexNumber],
      count: Count,
    };
    SetFood(Data);
  };

  const HandleLogout = () => {
    sessionStorage.clear();
    localStorage.clear();
    SetAuthLogin(false);
    Navigate("/");
  };

  return (
    <React.Fragment>
      <div className="auth">
        {/*=========================================================
           # Navbar 
          =========================================================*/}
        <FoodContext.Provider value={Food}>
          <Navbar scrollToTop={scrollToTop} HandleLogout={HandleLogout} />
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
          <Suspense fallback={<Loading />}>
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
                <Route
                  path="/Cart"
                  element={
                    <Cart
                      HandleISInCart={HandleISInCart}
                      HandleIncrement={HandleIncrement}
                      HandleDecrement={HandleDecrement}
                    />
                  }
                />
                <Route path="*" element={<NotFounded style={`auto`} />} />
              </Routes>
            </FoodContext.Provider>
          </Suspense>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Auth;
