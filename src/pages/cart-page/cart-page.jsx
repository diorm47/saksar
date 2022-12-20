import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementItem,
  deleteFromCart,
  incrementItem,
} from "../../redux/cart-reducer";
import "./cart-page.css";
import Footer from "../../components/footer/footer";
import Snackbar from "../../components/snackbar/snackbar";

function CartPage() {
  const navigate = useNavigate();
  React.useEffect(() => {
    document.title = `Корзина товаров`;
  }, []);
  const incart = useSelector((state) => state.cart.cart);
  const [snackbar, setSnackbar] = useState(false);
  const dispatch = useDispatch();

  const deleteItemFromCart = (data) => {
    dispatch(deleteFromCart(data.id));
    setSnackbar(true);
    setTimeout(() => {
      setSnackbar(false);
    }, 1200);
  };

  const checkoutRedirect = () => {
    navigate(`/checkout`);
  };

  const aboutItem = (item) => {
    if (!localStorage.getItem("currentItem")) {
      localStorage.setItem("currentItem", JSON.stringify(item));
    } else localStorage.setItem("currentItem", JSON.stringify(item));

    navigate(`/about-item/${item.name}`);
  };

  const increment = (item) => {
    dispatch(incrementItem(item.id));
  };

  const decrement = (item) => {
    dispatch(decrementItem(item.id));
  };

  return (
    <>
      <div className="cart_page">
        <div className="cart_navigation">
          <p>Главная / Корзина</p>
        </div>
        <div className="cart_page_title">
          <h1>Корзина</h1>
        </div>
        <div className="in_cart_items">
          {incart.length > 0 ? (
            incart.map((item) => (
              <div key={item.id} className="in_cart_item">
                <div className="incart_item_img">
                  <img src={item.cart_img} alt={item.cart_img} />
                </div>
                <div className="in_cart_description">
                  <p>{item.type}</p>
                  <h4 onClick={() => aboutItem(item)}>{item.name}</h4>
                  {item.type === "Аромадиффузор" ? (
                    <div className="diffusor_incart_descr">
                      <p>
                        <span>Верхние ноты: </span>
                        {item.top_notes}
                      </p>
                      <p>
                        <span>Средние ноты:</span> {item.middle_notes}
                      </p>
                      <p>
                        <span>Нижние ноты:</span> {item.bottom_notes}
                      </p>
                    </div>
                  ) : (
                    <div className="other_incart_items">
                      <p>
                        <span>Состав: </span>
                        {item.compound || item.compound_items}
                      </p>
                    </div>
                  )}
                </div>
                <div className="in_item_calculator">
                  <p onClick={() => decrement(item)}>-</p>
                  <p>{item.count}</p>
                  <p onClick={() => increment(item)}>+</p>
                </div>
                <div className="in_cart_item_cost_del">
                  <div className="in_cart_item_cost">
                    <p>{new Intl.NumberFormat("ru-RU").format(item.price)} ₽</p>
                  </div>
                  <div
                    className="del_item_from_cart"
                    onClick={() => deleteItemFromCart(item)}
                  >
                    <button>Удалить</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="empty_cart_message">Корзина пуста</p>
          )}
        </div>
        {!incart.length > 0 || (
          <div className="checkout_cart">
            <div className="total_summ">
              <p>Итого: </p>
              <p>
                {new Intl.NumberFormat("ru-RU").format(
                  incart.reduce(
                    (accumulator, current) =>
                      accumulator + current.price * current.count,
                    0
                  )
                )}{" "}
                ₽
              </p>
            </div>
            <div className="checkout_btn" onClick={checkoutRedirect}>
              <button>Оформить заказ</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
      {!snackbar || <Snackbar props="Товар удалён из корзины" />}
    </>
  );
}

export default CartPage;
