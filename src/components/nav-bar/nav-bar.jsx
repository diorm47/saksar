import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav-bar.css";
import burger_menu from "../../assets/icons/menu_icon.png";
import close_menu from "../../assets/icons/menu_close.png";
import basketIcon from "../../assets/icons/basket-icon.png";

import { useSelector } from "react-redux";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

function NavBar() {
  const inCart = useSelector((state) => state.cart.cart);
  const [menu, setMenu] = useState(false);
  return (
    <>
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
              <Logo />
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
          <div
            onClick={() => setMenu(false)}
            className={menu ? "nav_burger_menu" : "hide_burger_menu"}
          >
            <img src={close_menu} alt="close_menu" />
          </div>
          <div
            onClick={() => setMenu(true)}
            className={menu ? "nav_burger_close" : "hide_close_menu"}
          >
            <img src={burger_menu} alt="burger_menu" />
          </div>
          <div className="nav_basket">
            {inCart.length > 0 ? (
              <div className="selected_length">
                <p>{inCart.length}</p>
              </div>
            ) : (
              ""
            )}
            <NavLink to="/cart">
              <img src={basketIcon} alt="basketIcon" />
            </NavLink>
          </div>
        </div>
      </nav>
      <div
        onClick={() => setMenu(false)}
        className={menu ? "nav_mobilie_menu" : "hide_mobile_menu"}
      >
        <NavLink to="/">
          <div className="nav_menu_item">
            <p>Главная</p>
          </div>
        </NavLink>
        <NavLink to="/catalog">
          <div className="nav_menu_item">
            <p>Каталог</p>
          </div>
        </NavLink>
        <NavLink to="/payment-delivery">
          <div className="nav_menu_item">
            <p>Оплата/доставка</p>
          </div>
        </NavLink>

        <NavLink to="/contacts">
          <div className="nav_menu_item">
            <p>Контакты</p>
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default NavBar;
