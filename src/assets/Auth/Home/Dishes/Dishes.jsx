import React, { useContext } from "react";
import "./Dishes.css";
import { FoodContext } from "../../Auth";
import { Link } from "react-router-dom";

function Dishes({ HandleISInCart, scrollToTop }) {
  const DishesData = useContext(FoodContext);

  return (
    <React.Fragment>
      <div className="dishes">
        <div className="container" data-aos="fade-up">
          <div className="head">
            <p>our dishes</p>
            <h1>most trending dishes</h1>
          </div>
          <div className="dishes-container">
            {DishesData.filter((dish) => dish.type === "Dishes")
              .slice(0, 8)
              .map((dish) => (
                <div className="box" key={dish.id}>
                  <i className="fa-regular fa-heart Favorite-ele" />
                  <div className="price">{dish.price} $</div>
                  <Link
                    className="Content"
                    to={`/Details/${dish.id}`}
                    onClick={() => scrollToTop()}
                  >
                    <img src={dish.img} alt="fries_Salade" />
                    <h5>
                      {dish.name.length > 10
                        ? `${dish.name.slice(0, 10) + `...`}`
                        : dish.name}
                    </h5>
                    <p>{dish.Details.slice(0, 50)}...</p>
                  </Link>

                  <button
                    className={dish.isInCart ? "btn active" : "btn"}
                    onClick={() => HandleISInCart(dish.id)}
                  >
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
