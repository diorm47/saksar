import React from "react";
import aromadiffuzors from "../../assets/images/Аромадиффузоры.png";
import scrabs from "../../assets/images/Скрабы.png";
import spa from "../../assets/images/Spa-наборы.png";
import "./home-products.css";
import { NavLink } from "react-router-dom";

function HomeProducts() {
  return (
    <>
      <NavLink to="/diffusers">
        <div className="home_product_cart">
          <div className="home_product_cart_img">
            <img src={aromadiffuzors} alt="Аромадиффузоры" />
          </div>
          <div className="home_product_cart_title">
            <p>Аромадиффузоры</p>

            <span>Перейти в каталог</span>
          </div>
        </div>
      </NavLink>
      <NavLink to="/scrubs">
        <div className="home_product_cart">
          <div className="home_product_cart_img">
            <img src={scrabs} alt="scrabs" />
          </div>
          <div className="home_product_cart_title">
            <p>Скрабы</p>
            <span>Перейти в каталог</span>
          </div>
        </div>
      </NavLink>
      <NavLink to="/spa-sets">
        <div className="home_product_cart">
          <div className="home_product_cart_img">
            <img src={spa} alt="spa" />
          </div>
          <div className="home_product_cart_title">
            <p>Spa-наборы для тела</p>

            <span>Перейти в каталог</span>
          </div>
        </div>
      </NavLink>
    </>
  );
}

export default HomeProducts;
