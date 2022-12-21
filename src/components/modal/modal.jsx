import React from "react";
import { useNavigate } from "react-router-dom";
import "./modal.css";
import close_menu from "../../assets/icons/menu_close.png";

function Modal({ setModal, item }) {
  const navigate = useNavigate();
  const goToCart = () => {
    navigate(`/cart`);
  };
  const goToCheckout = () => {
    navigate(`/checkout`);
  };
  return (
    <div className="modal_wrapper">
      <div className="modal">
        <div className="close_icon" onClick={() => setModal(false)}>
          <img src={close_menu} alt="close_menu" />
        </div>
        <div className="modal_title">
          <h1>Благодарю!</h1>
        </div>
        <div className="modal_item">
          <div className="item_name_type">
            <p>
              {item.type} <span>{item.name}</span> <br />
            </p>
          </div>
          <div className="modal_mess">
            <p>добавлен в корзину</p>
          </div>
          <div className="modal_price">
            <p>{new Intl.NumberFormat("ru-RU").format(item.price)} ₽</p>
          </div>
        </div>
        <div className="modal_actions">
          <div className="go_to_cart">
            <input type="button" value="Оформить заказ" onClick={goToCart} />
          </div>
          <div className="go_to_checkout">
            <input
              type="button"
              value="Купить в один клик"
              onClick={goToCheckout}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
