import React, { useState } from "react";
import plusIcon from "../../assets/icons/add_to_cart_icon.png";
import "./card.css";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cart-reducer";
import Snackbar from "../snackbar/snackbar";

function Card({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inCart = useSelector((state) => state.cart.cart);
  const [snackbar, setSnackbar] = useState(false);

  const addToCartt = (data) => {
    const isItemInCart = inCart.some((item) => item.id === data.id);
    if (!isItemInCart) {
      dispatch(addToCart(data));
      setSnackbar(true);
      setTimeout(() => {
        setSnackbar(false);
      }, 2000);
    }
  };

  const aboutItem = (item) => {
    if (!localStorage.getItem("currentItem")) {
      localStorage.setItem("currentItem", JSON.stringify(item));
    } else localStorage.setItem("currentItem", JSON.stringify(item));

    navigate(`/about-item/${item.name}`);
    window.location.reload();
  };

  return (
    <>
      {item.map((item) => (
        <div className="card_item" key={item.id}>
          <div className="cart_image">
            <img src={item.cart_img} alt={item.cart_img} />
          </div>
          <div className="cart_description">
            <p>{item.type}</p>
          </div>
          <div className="cart_product_name" onClick={() => aboutItem(item)}>
            <p>{item.name}</p>
          </div>
          <div className="cart_product_price">
            {item.type !== "Аромадиффузор" ? (
              <p>{item.price} ₽</p>
            ) : (
              <>
                <p>{item.price} ₽ за 50мл</p>
                <p>{item.second_price} ₽ за 100мл</p>
              </>
            )}
          </div>
          <div
            className={
              inCart.some((data) => data.id === item.id) || false
                ? "add_del_btn added_to_cart"
                : "add_del_btn"
            }
            onClick={() => addToCartt(item)}
          >
            <img src={plusIcon} alt="plus icon" />
          </div>
        </div>
      ))}
      {!snackbar || <Snackbar props="Товар добавлен в корзину" />}
    </>
  );
}

export default Card;
