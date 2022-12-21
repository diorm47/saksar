import React, { useState } from "react";
import plusIcon from "../../assets/icons/add_to_cart_icon.png";
import "./card.css";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cart-reducer";
import Modal from "../modal/modal";

function Card({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inCart = useSelector((state) => state.cart.cart);

  const [modal, setModal] = useState(false);
  const [modalItem, setModalItem] = useState({});

  const addToCartt = (data) => {
    const isItemInCart = inCart.some((item) => item.id === data.id);
    if (!isItemInCart) {
      dispatch(addToCart(data));

      setModal(true);
      setModalItem(data);
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
      {!modal || <Modal setModal={setModal} item={modalItem} />}

      {item.map((item) => (
        <div className="card_item" key={item.id}>
          <div className="cart_image" onClick={() => aboutItem(item)}>
            <img src={item.cart_img} alt={item.cart_img} />
          </div>
          <div className="cart_description" onClick={() => aboutItem(item)}>
            <p>{item.type}</p>
          </div>
          <div className="cart_product_name" onClick={() => aboutItem(item)}>
            <p>{item.name}</p>
          </div>
          <div className="cart_product_price" onClick={() => aboutItem(item)}>
            <p>{new Intl.NumberFormat("ru-RU").format(item.price)} ₽</p>
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
    </>
  );
}

export default Card;
