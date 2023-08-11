import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import WindowIcon from "@mui/icons-material/Window";
import ReorderIcon from "@mui/icons-material/Reorder";
import MenuController from "./MenuController";
import "./Menu.css";
// import { FoodData } from "../../Data/Food";

function Menu() {
  const [StyleCard, SetStyleCard] = useState("Grid");
  const [FoodType, SetFoodType] = useState("Burger");

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
            <MenuController FoodType={FoodType} />
            <div className={`right ${StyleCard}`}>
              {/* {FoodData.map((item) => (
                <div className="food-box">{item.name}</div>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Menu;
