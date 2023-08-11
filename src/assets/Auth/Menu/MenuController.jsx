import React, { useState } from "react";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import Slider from "@mui/material/Slider";
import FastfoodIcon from "@mui/icons-material/Fastfood";

function MenuController() {
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
      <div className="menu-controller">
        <div className="box">
          <h3>Calories</h3>
          <Slider
            value={Calories}
            onChange={(e) => SetCalories(e.target.value)}
            valueLabelDisplay="auto"
            min={5}
            max={250}
            className="Slider"
          />
          <div className="inputs-box">
            <input
              type="text"
              value={Calories[0]}
              onChange={(e) =>
                HandleChangeCaloriesOrPrice(e.target.value, 0, "Calories")
              }
            />
            <HorizontalRuleIcon />
            <input
              type="text"
              value={Calories[1]}
              onChange={(e) =>
                HandleChangeCaloriesOrPrice(e.target.value, 1, "Calories")
              }
            />
          </div>
        </div>
        <div className="box">
          <h3>Price</h3>
          <div className="inputs-box">
            <input
              type="text"
              value={Price[0]}
              onChange={(e) =>
                HandleChangeCaloriesOrPrice(e.target.value, 0, "Price")
              }
            />
            <HorizontalRuleIcon />
            <input
              type="text"
              value={Price[1]}
              onChange={(e) =>
                HandleChangeCaloriesOrPrice(e.target.value, 1, "Price")
              }
            />
          </div>
        </div>
        <div className="box">
          <input
            type="checkbox"
            name="Spicy"
            id="Spicy"
            className="CheckSpicyinput"
          />
          <label htmlFor="Spicy" className="CheckSpicy">
            Spicy
          </label>
        </div>
        <div className="box">
          <h3>Pound Bun Size</h3>
          <ul className="PoundSize">
            <div className="info">
              <span>Width</span>
              <span>length</span>
            </div>
            <input
              type="radio"
              name="Width&length"
              id="16.5-25"
              checked={Width_length === "16.5-25"}
            />
            <li onClick={() => SetWidth_length("16.5-25")}>
              <label htmlFor="16.5-25">16.5"</label>
              <label htmlFor="16.5-25">25"</label>
            </li>
            <input
              type="radio"
              name="Width&length"
              id="17.5-26"
              checked={Width_length === "17.5-26"}
            />
            <li onClick={() => SetWidth_length("17.5-26")}>
              <label htmlFor="17.5-26">17.5"</label>
              <label htmlFor="17.5-26">26"</label>
            </li>
            <input
              type="radio"
              name="Width&length"
              id="18.5-27"
              checked={Width_length === "18.5-27"}
            />
            <li onClick={() => SetWidth_length("18.5-27")}>
              <label htmlFor="18.5-27">18.5"</label>
              <label htmlFor="18.5-27">27"</label>
            </li>
            <input
              type="radio"
              name="Width&length"
              id="19.5-28"
              checked={Width_length === "19.5-28"}
            />
            <li onClick={() => SetWidth_length("19.5-28")}>
              <label htmlFor="19.5-28">19.5"</label>
              <label htmlFor="19.5-28">28"</label>
            </li>
          </ul>
        </div>
        <div className="box">
          <h3>Food & Drinks</h3>
          <FastfoodIcon />
          <i className="fa-solid fa-burger" />
          <i className="fa-solid fa-pizza-slice" />
          <i className="fa-solid fa-utensils" />
          <i class="fa-solid fa-martini-glass" />
        </div>
      </div>
    </React.Fragment>
  );
}
export default MenuController;
