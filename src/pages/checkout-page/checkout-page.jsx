import React from "react";
import "./checkout-page.css";
import Footer from "../../components/footer/footer";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const incart = useSelector((state) => state.cart.cart);
  React.useEffect(() => {
    document.title = `Оформление заказа`;
  }, []);
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
                {item.type === "Аромадиффузор" && item.count === 2 ? (
                  <p className="ch_count">Количество - 1 штук 100 грамм</p>
                ) : (
                  <p className="ch_count">Количество - {item.count} штук</p>
                )}

                {item.type === "Аромадиффузор" && item.count === 2 ? (
                  <h4 className="ch_total_price">
                    Цена за этот товар - {item.count * item.price - 990} ₽
                  </h4>
                ) : (
                  <h4 className="ch_total_price">
                    Цена за этот товар - {item.count * item.price} ₽
                  </h4>
                )}
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
