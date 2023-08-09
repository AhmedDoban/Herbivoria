import React from "react";
import "./Dishes.css";
import { Dishes_data } from "./../../../Data/Dishes";

function Dishes() {
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
            {Dishes_data.slice(0, 8).map((dish, index) => (
              <div
                className="box"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                key={index}
              >
                <i className="fa-regular fa-heart Favorite-ele" />
                <img src={dish.img} alt="fries_Salade" />
                <h5>fries Salade</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className={dish.isInCart ? "btn active" : "btn"}>
                  <span> Oreder now</span>
                  <i className="fa-solid fa-cart-plus" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Dishes;
