import React from "react";
import { NavLink } from "react-router-dom";
import "./nav-bar.css";

import { ReactComponent as BasketIcon } from "../../assets/icons/basket-icon.svg";
import { useSelector } from "react-redux";

function NavBar() {
  const inCart = useSelector((state) => state.cart.cart);
  return (
    <nav>
      <div className="nav_wrapper">
        <div className="nav_left_items">
          <NavLink to="/">
            <div className="nav_menu_item">
              <p>Главная</p>
            </div>
          </NavLink>
          <div className="vertical_line">
            <span>|</span>
          </div>
          <NavLink to="/catalog">
            <div className="nav_menu_item">
              <p>Каталог</p>
            </div>
          </NavLink>
        </div>
        <NavLink to="/">
          <div className="nav_logo">
            <h1>saksar</h1>
          </div>
        </NavLink>
        <div className="nav_right_items">
          <NavLink to="/payment-delivery">
            <div className="nav_menu_item">
              <p>Оплата/доставка</p>
            </div>
          </NavLink>
          <div className="vertical_line">
            <span>|</span>
          </div>
          <NavLink to="/contacts">
            <div className="nav_menu_item">
              <p>Контакты</p>
            </div>
          </NavLink>
        </div>

        <div className="nav_basket">
          {!inCart.length || (
            <div className="selected_length">
              <p>{inCart.length}</p>
            </div>
          )}

          <NavLink to="/cart">
            <BasketIcon />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
