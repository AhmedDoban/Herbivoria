import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import WindowIcon from "@mui/icons-material/Window";
import ReorderIcon from "@mui/icons-material/Reorder";
import MenuController from "./MenuController";
import "./Menu.css";
import { FoodContext } from "../Auth";
import Footer from "../../Components/Footer/Footer";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Menu({ HandleISInCart }) {
  const FoodData = useContext(FoodContext);
  const [SeeMore, SetSeeMore] = useState(9);

  const HandelNextNavigation = () => {
    if (FoodData.length < SeeMore) {
      return;
    }
    SetSeeMore(SeeMore + 9);
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
    scrollToTop();
  };
  const HandelPreviousNavigation = () => {
    if (SeeMore <= 0 || SeeMore === 9) {
      SetSeeMore(9);
      return;
    }
    SetSeeMore(SeeMore - 9);
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
    scrollToTop();
  };
  const HandleFoodType = (type) => {
    SetFoodType(type);
    SetSeeMore(9);
  };
  const [StyleCard, SetStyleCard] = useState("Grid");
  const [ControlFilter, SetControlFilter] = useState(false);
  const [FoodType, SetFoodType] = useState("");
  const [Calories, SetCalories] = useState([5, 250]);
  const [Price, SetPrice] = useState([0, 100]);
  const [Width_length, SetWidth_length] = useState("16.5-25");

  const HandleChangeCaloriesOrPrice = (value, index, type) => {
    if (type === "Calories") {
      const Data = [...Calories];
      Data[index] = value;
      SetCalories(Data);
    } else if (type === "Price") {
      const Data = [...Price];
      Data[index] = value;
      SetPrice(Data);
    }
  };

  return (
    <React.Fragment>
      <div className="menu-food">
        <div className="container">
          <div className="links">
            <div className="menu-nav">
              <NavLink to="/">Home </NavLink>
              <NavLink to="/Menu">Menu </NavLink>
            </div>
            <div className="style-card">
              <i
                className="fa-solid fa-gear Filter-Setting"
                onClick={() => SetControlFilter(!ControlFilter)}
              />
              <WindowIcon
                className={StyleCard === "Grid" ? "active" : ""}
                onClick={() => SetStyleCard("Grid")}
              />
              <ReorderIcon
                className={StyleCard === "List" ? "active" : ""}
                onClick={() => SetStyleCard("List")}
              />
            </div>
          </div>
          <div className="content">
            <MenuController
              FoodType={FoodType}
              HandleFoodType={HandleFoodType}
              Calories={Calories}
              SetCalories={SetCalories}
              Width_length={Width_length}
              SetWidth_length={SetWidth_length}
              HandleChangeCaloriesOrPrice={HandleChangeCaloriesOrPrice}
              Price={Price}
              SetPrice={SetPrice}
              ControlFilter={ControlFilter}
              SetControlFilter={SetControlFilter}
            />
            <div className={`right ${StyleCard}`}>
              {FoodData.filter((Foods) =>
                FoodType === "" ? Foods : Foods.type === FoodType
              )
                .slice(SeeMore - 9, SeeMore)
                .map((item) => (
                  <React.Fragment>
                    {StyleCard === "Grid" ? (
                      <div className="food-box" key={item.id}>
                        <i className="fa-regular fa-heart Favorite-ele" />
                        <img src={item.img} alt="fries_Salade" />
                        <h5>
                          {item.name.length > 10
                            ? `${item.name.slice(0, 10) + `...`}`
                            : item.name}
                        </h5>
                        <p>
                          {item.Details.length > 50
                            ? `${item.Details.slice(0, 50)}...`
                            : item.Details}
                        </p>
                        <div className="actions">
                          <div className="price">{item.price} $</div>
                          <button
                            className={item.isInCart ? "btn active" : "btn"}
                            onClick={() => HandleISInCart(item.id)}
                          >
                            <ShoppingCartOutlinedIcon />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="food-box" key={item.id}>
                        <div className="left">
                          <img src={item.img} alt="fries_Salade" />
                        </div>

                        <div className="right">
                          <div className="info">
                            <h5>{item.name}</h5>
                            <p>{item.Details}</p>
                          </div>
                          <div className="info actions">
                            <div className="price">{item.price}$</div>
                            <button
                              className={item.isInCart ? "btn active" : "btn"}
                              onClick={() => HandleISInCart(item.id)}
                            >
                              <ShoppingCartOutlinedIcon />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
            </div>
          </div>
          <div className="nav-seemore">
            <button className="next" onClick={() => HandelPreviousNavigation()}>
              previous
            </button>
            <button className="previous" onClick={() => HandelNextNavigation()}>
              Next
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Menu;
