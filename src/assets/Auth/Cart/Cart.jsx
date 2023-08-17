import React, { useContext, useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import "./Cart.css";
import { FoodContext } from "../Auth";
import Select from "react-dropdown-select";

function Cart({ HandleISInCart, HandleDecrement, HandleIncrement }) {
  const InCartFood = useContext(FoodContext);
  const [Subtotal, SetSubtotal] = useState(0);
  const [TotalPrice, SetTotalPrice] = useState(0);
  const [Address, SetAddress] = useState("");
  const [time_arrive, Settime_arrive] = useState(false);

  const AddressData = [
    {
      value: "Bohemia, NY 11716",
      label: "Bohemia, NY 11716",
    },
    {
      value: "Columbia, SC 29204",
      label: "Columbia, SC 29204",
    },
  ];

  const CountPrice = () => {
    let Price = 0;
    InCartFood.filter((Food) => Food.isInCart).map(
      (Food) => (Price += Food.price * Food.count)
    );
    SetSubtotal(Price);
    if (Price === 0) {
      SetTotalPrice(0);
      return;
    }
    SetTotalPrice(Price + 3.67);
  };

  useEffect(() => {
    CountPrice();
  }, [HandleDecrement, HandleIncrement]);

  return (
    <React.Fragment>
      <div className="Cart">
        <div className="container">
          {/***************************** left ******************************/}
          <div className="left">
            {/*****************************First Box******************************/}
            <div className="box">
              <h1>Contact information</h1>
              <div className="input-container">
                <div className="input-box">
                  <input type="text" placeholder="Alica Simpson" />
                  <label htmlFor="Name">Name</label>
                </div>
                <div className="input-box">
                  <input type="Phone" placeholder="+ (987) 000 654 321 " />
                  <label htmlFor="Name">Phone</label>
                </div>
              </div>
            </div>
            {/*****************************2'nd Box******************************/}
            <div className="box">
              <h1>Order Type</h1>
              <div className="input-container">
                <div className="input-check">
                  <input type="radio" name="type" id="Pickup" checked />
                  <label htmlFor="Pickup">Pickup</label>
                </div>
                <div className="input-check">
                  <input type="radio" name="type" id="Delivery" />
                  <label htmlFor="Delivery">Delivery</label>
                </div>
              </div>
              <div className="Select-box">
                <label htmlFor="Address">Select Address from your Saved</label>
                <Select
                  options={AddressData}
                  onChange={(values) => SetAddress(values)}
                  placeholder="Select Address"
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  id="Addressdelivery"
                  placeholder="Enter your delivery address"
                />
                <label htmlFor="Addressdelivery">Address *</label>
              </div>
              <div className="input-container">
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Example: Flat #12"
                    id="Apartment / Office*"
                  />
                  <label htmlFor="Apartment / Office*">
                    Apartment / Office*
                  </label>
                </div>
                <div className="input-box">
                  <input type="text" placeholder="Example: 3 " id="Floor" />
                  <label htmlFor="Floor">Floor</label>
                </div>
              </div>
            </div>
            {/*****************************3'nd Box******************************/}
            <div className="box">
              <h1>Delivery Time</h1>
              <div className="input-container">
                <div className="input-check">
                  <input
                    type="radio"
                    name="time_arrive"
                    id="Soon"
                    checked={time_arrive ? false : true}
                  />
                  <label htmlFor="Soon" onClick={() => Settime_arrive(false)}>
                    As Soon as possible
                  </label>
                </div>
                <div className="input-check">
                  <input
                    type="radio"
                    name="time_arrive"
                    id="Time"
                    checked={time_arrive ? true : false}
                  />
                  <label htmlFor="Time" onClick={() => Settime_arrive(true)}>
                    Select Time
                  </label>
                </div>
              </div>
              {time_arrive ? (
                <div className="input-box">
                  <input
                    type="time"
                    placeholder="Enter Time "
                    id="timeArrive"
                  />
                  <label htmlFor="timeArrive">Time Arrive</label>
                </div>
              ) : null}
            </div>
          </div>
          {/***************************** Right ******************************/}
          <div className="right">
            {/***************************** Orders ******************************/}
            <div className="order">
              <p>Order Summary</p>
              {InCartFood.filter((Food) => Food.isInCart).map((food) => (
                <div className="food-box" key={food.id}>
                  <i
                    className="fa-solid fa-trash"
                    onClick={() => HandleISInCart(food.id)}
                  />
                  <div className="food-box-left">
                    <div className="img-box">
                      <img src={food.img} alt={food.name} />
                    </div>
                    <div className="data">
                      <h5>{food.name}</h5>
                      <p className="price">{food.price}$</p>
                    </div>
                  </div>
                  <div className="food-box-right">
                    <div className="actions">
                      <button onClick={() => HandleDecrement(food.id)}>
                        -
                      </button>
                      <p className="Count">{food.count}</p>
                      <button onClick={() => HandleIncrement(food.id)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/***************************** Total Price ******************************/}
            <div className="total-price">
              <div className="box">
                <p>Subtotal :</p>
                <span>{Subtotal} $</span>
              </div>
              <div className="box">
                <p>Shipping :</p>
                <span>3.67 $</span>
              </div>
            </div>
            {/***************************** Final Price ******************************/}
            <div className="final-price">
              <div className="box">
                <p>Total :</p>
                <span>{TotalPrice} $</span>
              </div>
              <button>Make Payment</button>
              <p>
                By placing your order, you agree to Terms of use and Privacy
                agreement
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Cart;
