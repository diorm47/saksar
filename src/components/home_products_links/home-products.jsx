import React from "react";
import aromadiffuzors from "../../assets/images/Аромадиффузоры.png";
import scrabs from "../../assets/images/Скрабы.png";
import spa from "../../assets/images/Spa-наборы.png";
import "./home-products.css";
import { NavLink } from "react-router-dom";

function HomeProducts() {
  return (
    <>
      <div className="home_product_cart">
        <div className="home_product_cart_img">
          <img src={aromadiffuzors} alt="Аромадиффузоры" />
        </div>
        <div className="home_product_cart_title">
          <p>Аромадиффузоры</p>
          <NavLink to="/diffusers">
            <span>Перейти в каталог</span>
          </NavLink>
        </div>
      </div>

      <div className="home_product_cart">
        <div className="home_product_cart_img">
          <img src={scrabs} alt="scrabs" />
        </div>
        <div className="home_product_cart_title">
          <p>Скрабы</p>
          <NavLink to="/scrubs">
            <span>Перейти в каталог</span>
          </NavLink>
        </div>
      </div>

      <div className="home_product_cart">
        <div className="home_product_cart_img">
          <img src={spa} alt="spa" />
        </div>
        <div className="home_product_cart_title">
          <p>Spa-наборы для тела</p>
          <NavLink to="/spa-sets">
            <span>Перейти в каталог</span>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default HomeProducts;
