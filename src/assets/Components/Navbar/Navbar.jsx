import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [MenuMobileActive, SetMenuMobileActive] = useState(false);
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="container">
          {/********** Start Logo Container *************/}
          <div className="logo">
            <img src={require("../../imgs/icon.png")} alt="logo" />
            <h1>Herbivoria</h1>
          </div>
          {/********** End Logo Container *************/}

          {/********** Start Menu Links*************/}
          <ul className={MenuMobileActive ? "menu active" : "menu"}>
            <div
              className="exit-menu-mob"
              onClick={() => SetMenuMobileActive(!MenuMobileActive)}
            >
              <i className="fa-solid fa-xmark" />
            </div>
            <li>
              <NavLink to="">
                <i className="fa-solid fa-house" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Menu">
                <i className="fa-solid fa-book-open" />
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact_Us">
                <i className="fa-solid fa-envelope" />
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="About_Us">
                <i className="fa-solid fa-users" />
                About Us
              </NavLink>
            </li>
          </ul>
          {/********** End Menu Links*************/}
          {/********** Start User Container *************/}
          <div className="user">
            <img
              src={require("../../imgs/user.jpg")}
              alt="user"
              className="Avatar"
            />
            <Link className="cart-item">
              <img src={require("../../imgs/cart.svg").default} alt="Cart" />
              <div className="count">3</div>
            </Link>
            <i className="fa-solid fa-right-from-bracket logout" />
            <i
              className="fa-solid fa-bars nav-mobile"
              onClick={() => SetMenuMobileActive(!MenuMobileActive)}
            />
          </div>
          {/********** End User Container *************/}
        </div>
      </div>
    </React.Fragment>
  );
}
export default Navbar;
