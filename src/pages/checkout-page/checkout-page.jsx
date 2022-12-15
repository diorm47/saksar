import React from "react";
import "./checkout-page.css";
import Footer from "../../components/footer/footer";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const incart = useSelector((state) => state.cart.cart);
  return (
    <>
      <div className="checkout_wrapper">
        <div className="checkout_title">
          <h1>Оформление заказа</h1>
        </div>
        <div className="chechout_items">
          {incart.map((item) => (
            <div className="checkout_item" key={item.id}>
              <img src={item.cart_img} alt={item.cart_img} />
              <div className="checkout_item_descrip">
                <h3 className="ch_item_name">
                  {item.type} - {item.name}
                </h3>
                <p className="ch_count">Количество - {item.count} штук</p>
                <h4 className="ch_total_price">Цена за этот товар - {item.count * item.price} ₽</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
