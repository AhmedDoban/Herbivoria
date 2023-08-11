import React, { useContext } from "react";
import "./Dishes.css";
import { FoodContext } from "../../Auth";
import { Link } from "react-router-dom";

function Dishes() {
  const DishesData = useContext(FoodContext);

  return (
    <React.Fragment>
      <div className="dishes">
        <div className="container">
          <div className="head">
            <p data-aos="fade-up" data-aos-duration="1000">
              our dishes
            </p>
            <h1 data-aos="fade-up" data-aos-duration="1000">
              most trending dishes
            </h1>
          </div>
          <div className="dishes-container">
            {DishesData.filter((dish) => dish.type === "Dishes")
              .slice(0, 8)
              .map((dish) => (
                <div
                  className="box"
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                  key={dish.id}
                >
                  <i className="fa-regular fa-heart Favorite-ele" />
                  <img src={dish.img} alt="fries_Salade" />
                  <h5>{dish.name}</h5>
                  <p>{dish.Details.slice(0, 50)}...</p>
                  <Link
                    className={dish.isInCart ? "btn active" : "btn"}
                    to="/Menu"
                  >
                    <span> Oreder now</span>
                    <i className="fa-solid fa-cart-plus" />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Dishes;
